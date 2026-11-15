import React from 'react';
import { ArrowLeft, ArrowRight, AlertTriangle, PhoneCall, CheckCircle, ShieldAlert } from 'lucide-react';
import { EmergencyProtocol } from '../types';
import { BigButton } from './BigButton';

interface ProtocolStepProps {
  protocol: EmergencyProtocol;
  currentStepIndex: number;
  onNext: () => void;
  onPrevious: () => void;
  onFinish: () => void;
  onContactFlightSurgeon: () => void;
}

export const ProtocolStep: React.FC<ProtocolStepProps> = ({
  protocol,
  currentStepIndex,
  onNext,
  onPrevious,
  onFinish,
  onContactFlightSurgeon,
}) => {
  const currentStep = protocol.steps[currentStepIndex];
  const totalSteps = protocol.steps.length;
  const isFirstStep = currentStepIndex === 0;
  const isLastStep = currentStepIndex === totalSteps - 1;

  return (
    <div className="bg-surface rounded-card p-5 sm:p-7 border border-pastel-blue shadow-soft max-w-3xl mx-auto">
      {/* Educational & Prototype Disclaimer */}
      <div className="bg-surface-alt rounded-btn p-3 border border-pastel-blue text-xs text-text-muted flex items-start gap-2 mb-5">
        <ShieldAlert size={16} className="text-blue-dark flex-shrink-0 mt-0.5" />
        <div>
          <span className="font-bold text-text">Educational Prototype Content: </span>
          {protocol.educationalDisclaimer ||
            'Illustrative medical guidance for spaceflight simulations. Not official NASA flight procedures.'}
        </div>
      </div>

      {/* Protocol Header */}
      <div className="flex items-center justify-between gap-4 border-b border-pastel-blue pb-4 mb-5">
        <div>
          <span className="text-xs uppercase tracking-wider font-bold text-status-red">
            Emergency Protocol
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-text mt-0.5">{protocol.title}</h2>
          <p className="text-xs sm:text-sm text-text-muted mt-1">Condition: {protocol.condition}</p>
        </div>

        {/* Step Progress Bubble */}
        <div className="text-right">
          <span className="text-xs text-text-muted block font-medium">Step</span>
          <span className="text-xl sm:text-2xl font-extrabold text-blue-deep dark:text-pastel-blue">
            {currentStepIndex + 1}
            <span className="text-sm font-normal text-text-muted"> / {totalSteps}</span>
          </span>
        </div>
      </div>

      {/* Current Step Instruction Box */}
      <div className="my-6">
        <h3 className="text-lg sm:text-xl font-bold text-text mb-3">
          {currentStep.title}
        </h3>

        <div className="text-base sm:text-lg text-text leading-relaxed bg-surface-alt/70 p-5 rounded-card border border-pastel-blue-2">
          {currentStep.instruction}
        </div>

        {/* Caution Notice */}
        {currentStep.cautionNotice && (
          <div className="mt-4 p-4 rounded-card bg-status-amber-tint border border-status-amber/40 text-status-amber flex items-start gap-3">
            <AlertTriangle size={20} className="flex-shrink-0 mt-0.5" />
            <div className="text-sm">
              <span className="font-bold">Caution: </span>
              {currentStep.cautionNotice}
            </div>
          </div>
        )}

        {/* Telemetry to check */}
        {currentStep.vitalToCheck && (
          <div className="mt-3 text-xs sm:text-sm text-blue-deep dark:text-pastel-blue-2 font-medium flex items-center gap-1.5">
            <CheckCircle size={16} />
            <span>Target indicator to verify: </span>
            <span className="font-bold text-text underline">{currentStep.vitalToCheck}</span>
          </div>
        )}
      </div>

      {/* Stepper Navigation Buttons (Glove-Friendly >= 56px / 64px) */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-4 border-t border-pastel-blue">
        <button
          onClick={onPrevious}
          disabled={isFirstStep}
          className={`touch-target w-full sm:w-auto px-6 py-3 rounded-btn border text-sm sm:text-base font-semibold flex items-center justify-center gap-2 ${
            isFirstStep
              ? 'opacity-30 cursor-not-allowed bg-surface-alt text-text-muted border-pastel-blue'
              : 'bg-surface text-text border-pastel-blue-2 hover:bg-surface-alt active:scale-95 cursor-pointer'
          }`}
        >
          <ArrowLeft size={18} />
          <span>Previous Step</span>
        </button>

        <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
          {isLastStep ? (
            <BigButton
              variant="primary"
              size="large"
              onClick={onFinish}
              className="w-full sm:w-auto"
              icon={<CheckCircle size={20} />}
            >
              Complete Protocol
            </BigButton>
          ) : (
            <BigButton
              variant="primary"
              size="large"
              onClick={onNext}
              className="w-full sm:w-auto"
              icon={<ArrowRight size={20} />}
            >
              Next Step
            </BigButton>
          )}

          {/* Direct Flight Surgeon Callout */}
          <button
            onClick={onContactFlightSurgeon}
            className="touch-target w-full sm:w-auto px-5 py-3 rounded-btn bg-status-red text-white font-bold text-sm sm:text-base shadow-glow-red hover:bg-[#A93226] active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
          >
            <PhoneCall size={18} />
            <span>Contact Surgeon</span>
          </button>
        </div>
      </div>
    </div>
  );
};
