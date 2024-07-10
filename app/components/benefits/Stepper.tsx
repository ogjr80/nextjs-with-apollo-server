'use client'; 

import { useState, ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Step {
  title: string;
  description: string;
}

const steps: Step[] = [
  { title: 'Welcome', description: 'Introduction to the onboarding process' },
  { title: 'Member Details', description: 'Personal information and contact details' },
  { title: 'Member Address', description: 'Personal Address Information ' },
  { title: 'Voluntary Risk Benefit Elections', description: 'Election for voluntary risk benefits' },
  { title: 'Previous Paid-Up Benefits', description: 'Details about previous paid-up benefits' },
  { title: 'Declaration by Employee', description: 'Employee declaration form' },
  { title: 'Investment Selection', description: 'Choose your investment options' },
  { title: 'Beneficiary Nomination', description: 'Nominate your beneficiaries' },
];

interface StepperProps {
  children: ReactNode[];
}

const Stepper: React.FC<StepperProps> = ({ children }) => {
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
  const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 0));

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="steps mb-4 flex justify-between">
        {steps.map((step, index) => (
          <div key={index} className={`step ${index === currentStep ? 'active' : ''}`}>
            {step.title}
          </div>
        ))}
      </div>
      <div className="step-description mb-8 text-center text-lg text-dark-blue">
        {steps[currentStep].description}
      </div>
      <AnimatePresence mode='wait'>
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="step-content"
        >
          {children[currentStep]}
        </motion.div>
      </AnimatePresence>
      <div className="flex justify-between mt-8">
        <button onClick={prevStep} className="btn" disabled={currentStep === 0}>
          Previous
        </button>
        <button onClick={nextStep} className="btn" disabled={currentStep === steps.length - 1}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Stepper;
