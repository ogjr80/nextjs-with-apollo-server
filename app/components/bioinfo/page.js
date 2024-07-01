'use client'; 

import Stepper from './Stepper';
import Welcome from './steps/Welcome';
import EmployeeInformation from './steps/EmployeeInformation';
import EmployeeAddress from './steps/EmployeeAddress';
import NextOfKinInformation from './steps/NextOfKinInformation';
import NextOfKinAddress from './steps/NextOfKinAddress';
import DependantsInformation from './steps/DependantsInformation';

const Home = () => {
  return (
    <div>
      <h1 className="text-center text-4xl font-bold my-8 text-dark-blue">Employee Onboarding</h1>
      <Stepper>
        <Welcome />
        <EmployeeInformation />
        <EmployeeAddress />
        <NextOfKinInformation />
        <NextOfKinAddress />
        <DependantsInformation />
      </Stepper>
    </div>
  );
};

export default Home;
