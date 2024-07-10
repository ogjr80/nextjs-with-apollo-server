// import Stepper from '@/components/onboard/benefits/Stepper'; 
// import Welcome from '@/components/onboard/benefits/steps/Welcome';
import Stepper from './Stepper';
import Welcome from './steps/Welcome';
import MemberDetails from './steps/MemberDetails';
import MemberAddress from './steps/MemberAddress';
import VoluntaryRiskBenefitElection from './steps/VoluntaryRiskBenefitElection';
import PreviousPaidUpBenefits from './steps/PreviousPaidUpBenefits';
import DeclarationByEmployee from './steps/DeclarationByEmployee';
import InvestmentSelection from './steps/InvestmentSelection';
import BeneficiaryNomination from './steps/BeneficiaryNomination';

const Home: React.FC = () => {
  return (
    <div>

    
      <h1 className="text-center text-4xl font-bold my-8 text-dark-blue">Witswaterstrand Benefits | Investment | Nomination</h1>
      <Stepper>
        <Welcome />
        <MemberDetails />
        <MemberAddress /> 
        <VoluntaryRiskBenefitElection />
        <PreviousPaidUpBenefits />
        <DeclarationByEmployee />
        <InvestmentSelection />
        <BeneficiaryNomination />
      </Stepper>
      </div>
  );
};

export default Home;
