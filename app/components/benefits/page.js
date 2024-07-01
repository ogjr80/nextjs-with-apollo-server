import Stepper from  './Stepper';
import Welcome from './steps/Welcome';
import BenefitsInformation from './steps/BenefitsInformation';
import MemberDetails from './steps/MemberDetails';
import VoluntaryRiskBenefitElection from './steps/VoluntaryRiskBenefitElection';
import DeclarationByEmployee from './steps/DeclarationByEmployee';
import InvestmentSelection from './steps/InvestmentSelection';
import BeneficiaryNomination from './steps/BeneficiaryNomination';
import FuneralBenefitsRecipient from './steps/FuneralBenefitsRecipient';

const Home = () => {
  return (
    <div>
      <h1 className="text-center text-4xl font-bold my-8 text-dark-blue">Benefits | Applications | Election | Nominations  </h1>
      <Stepper>
        <Welcome />
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

