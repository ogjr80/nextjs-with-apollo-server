'use client'; 

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const steps = [
  'Benefits Information',
  'Members Details',
  'Voluntary Risk Benefit Election',
  'Declaration by the Employee',
  'Investment Selection',
  'Beneficiary Nomination - Death Benefits',
  'Funeral Benefits Recipient',
];

const Stepper = ({ children }) => {
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
  const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 0));

  return (
    <div className="container mx-auto py-8">
      <div className="steps mb-8 flex justify-between">
        {steps.map((step, index) => (
          <div key={index} className={`step ${index === currentStep ? 'active' : ''}`}>
            {step}
          </div>
        ))}
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
