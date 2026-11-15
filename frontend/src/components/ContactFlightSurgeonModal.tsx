import React, { useState } from 'react';
import { X, Send, Radio, AlertOctagon, Database, CheckCircle } from 'lucide-react';
import { SyncTelemetry, CrewMember } from '../types';
import { BigButton } from './BigButton';

interface ContactFlightSurgeonModalProps {
  isOpen: boolean;
  onClose: () => void;
  syncInfo: SyncTelemetry;
  crewMember: CrewMember;
  onSendMessage: (msg: { priority: string; text: string; attachVitals: boolean }) => void;
}

export const ContactFlightSurgeonModal: React.FC<ContactFlightSurgeonModalProps> = ({
  isOpen,
  onClose,
  syncInfo,
  crewMember,
  onSendMessage,
}) => {
  const [priority, setPriority] = useState<'routine' | 'priority' | 'emergency'>('priority');
  const [messageText, setMessageText] = useState('');
  const [attachVitals, setAttachVitals] = useState(true);
  const [sentSuccess, setSentSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSendMessage({
      priority,
      text: messageText || 'Urgent medical consult requested from crew.',
      attachVitals,
    });
    setSentSuccess(true);
    setTimeout(() => {
      setSentSuccess(false);
      setMessageText('');
      onClose();
    }, 1800);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="surgeon-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in"
    >
      <div className="bg-surface rounded-card border-2 border-status-red max-w-lg w-full p-5 sm:p-7 shadow-2xl relative">
        <button
          onClick={onClose}
          aria-label="Close consult dialog"
          className="touch-target absolute top-3 right-3 w-10 h-10 rounded-full flex items-center justify-center text-text-muted hover:text-text hover:bg-surface-alt cursor-pointer"
        >
          <X size={20} />
        </button>

        <div className="flex items-center gap-3 text-status-red mb-3">
          <AlertOctagon size={28} />
          <h2 id="surgeon-modal-title" className="text-xl sm:text-2xl font-bold text-text">
            Flight Surgeon Direct Uplink
          </h2>
        </div>

        {/* Offline Transmission Notice */}
        <div className="bg-surface-alt rounded-btn p-3 border border-pastel-blue text-xs text-text-muted mb-4 flex items-start gap-2">
          {syncInfo.state === 'offline' || syncInfo.simulatedLinkLoss ? (
            <>
              <Database size={16} className="text-status-amber flex-shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-status-amber">Link Offline / Delayed: </span>
                This transmission will be prioritized in your local IndexedDB queue and automatically packetized to Earth Mission Control when the ground link establishes.
              </div>
            </>
          ) : (
            <>
              <Radio size={16} className="text-status-green flex-shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-status-green">Link Active: </span>
                One-way signal latency is currently {Math.floor(syncInfo.signalDelaySeconds / 60)}m {syncInfo.signalDelaySeconds % 60}s. Ground medical team receives alerts immediately upon signal arrival.
              </div>
            </>
          )}
        </div>

        {sentSuccess ? (
          <div className="py-8 text-center flex flex-col items-center justify-center gap-3">
            <CheckCircle size={48} className="text-status-green animate-bounce" />
            <h3 className="text-lg font-bold text-text">Uplink Packet Queued / Sent!</h3>
            <p className="text-sm text-text-muted">
              {syncInfo.state === 'offline' ? 'Stored in IndexedDB Outbox' : 'Transmitted to Ground Link'}
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Priority Selection */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-text-muted mb-2">
                Triage Urgency Level
              </label>
              <div className="grid grid-cols-3 gap-2">
                {(['routine', 'priority', 'emergency'] as const).map((lvl) => (
                  <button
                    key={lvl}
                    type="button"
                    onClick={() => setPriority(lvl)}
                    className={`touch-target py-2 px-3 rounded-btn text-xs sm:text-sm font-bold capitalize border transition-all ${
                      priority === lvl
                        ? lvl === 'emergency'
                          ? 'bg-status-red text-white border-status-red shadow-glow-red'
                          : lvl === 'priority'
                          ? 'bg-status-amber text-white border-status-amber'
                          : 'bg-blue-dark text-white border-blue-dark'
                        : 'bg-surface-alt text-text border-pastel-blue hover:bg-pastel-blue'
                    }`}
                  >
                    {lvl}
                  </button>
                ))}
              </div>
            </div>

            {/* Astronaut Notes / Symptoms */}
            <div>
              <label htmlFor="surgeon-notes" className="block text-xs font-bold uppercase tracking-wider text-text-muted mb-1">
                Clinical Observation / Notes
              </label>
              <textarea
                id="surgeon-notes"
                rows={3}
                value={messageText}
                onChange={(e) => setMessageText(e.target.value)}
                placeholder="Describe current symptoms, onset time, medications taken, or cabin environment factors..."
                className="w-full rounded-btn border border-pastel-blue p-3 text-sm text-text bg-surface focus:outline-none focus:ring-2 focus:ring-blue-dark"
              />
            </div>

            {/* Attach Vitals Snapshot Checkbox */}
            <label className="flex items-center gap-2.5 text-sm text-text cursor-pointer select-none">
              <input
                type="checkbox"
                checked={attachVitals}
                onChange={(e) => setAttachVitals(e.target.checked)}
                className="w-5 h-5 rounded text-blue-dark border-pastel-blue focus:ring-blue-dark"
              />
              <span className="font-medium">Attach latest 24h vitals and radiation telemetry</span>
            </label>

            {/* Submit Action */}
            <div className="pt-2">
              <BigButton
                type="submit"
                variant={priority === 'emergency' ? 'emergency' : 'primary'}
                size="large"
                fullWidth
                icon={<Send size={20} />}
              >
                Transmit Telemetry Packet
              </BigButton>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
