import Stepper from  './components/Stepper'
import BenefitsInformation from './components/steps/BenefitsInformation';
import MemberDetails from './components/steps/MemberDetails';
import VoluntaryRiskBenefitElection from './components/steps/VoluntaryRiskBenefitElection';
import DeclarationByEmployee from './components/steps/DeclarationByEmployee';
import InvestmentSelection from './components/steps/InvestmentSelection';
import BeneficiaryNomination from './components/steps/BeneficiaryNomination';
import FuneralBenefitsRecipient from './components/steps/FuneralBenefitsRecipient';

const Home = () => {
  return (
    <div>
      <h1 className="text-center text-4xl font-bold my-8 text-dark-blue">University Onboarding</h1>
      <Stepper>
        <BenefitsInformation />
        <MemberDetails />
        <VoluntaryRiskBenefitElection />
        <DeclarationByEmployee />
        <InvestmentSelection />
        <BeneficiaryNomination />
        <FuneralBenefitsRecipient />
      </Stepper>
    </div>
  );
};

export default Home;
