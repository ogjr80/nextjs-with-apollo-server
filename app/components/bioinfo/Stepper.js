import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const steps = [
  { title: 'Welcome', description: 'Introduction to the onboarding process' },
  { title: 'Employee Information', description: 'Details about the employee' },
  { title: 'Employee Address', description: 'Employee address details' },
  { title: 'Next of Kin Information', description: 'Information about next of kin' },
  { title: 'Next of Kin Address', description: 'Address details for next of kin' },
  { title: 'Dependants Information', description: 'Details about dependants' },
];

const Stepper = ({ children }) => {
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
  const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 0));

  return (
    <div className="container mx-auto py-8">
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
