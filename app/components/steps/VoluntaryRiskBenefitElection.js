const VoluntaryRiskBenefitElection = () => {
    return (
      <div className="form-step">
        <h2 className="form-title">Voluntary Risk Benefit Election</h2>
        <form className="form">
          <div className="form-group">
            <label>Election Options</label>
            <input type="text" className="form-input" />
          </div>
          <div className="form-group">
            <label>Coverage Amount</label>
            <input type="text" className="form-input" />
          </div>
          <div className="form-group">
            <label>Beneficiary Information</label>
            <input type="text" className="form-input" />
          </div>
        </form>
      </div>
    );
  };
  
  export default VoluntaryRiskBenefitElection;
  