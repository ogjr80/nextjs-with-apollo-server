const BenefitsInformation = () => {
    return (
      <div className="form-step">
        <h2 className="form-title">Benefits Information</h2>
        <form className="form">
          <div className="form-group">
            <label>Benefit Type</label>
            <input type="text" className="form-input" />
          </div>
          <div className="form-group">
            <label>Coverage Details</label>
            <input type="text" className="form-input" />
          </div>
          <div className="form-group">
            <label>Plan Options</label>
            <input type="text" className="form-input" />
          </div>
        </form>
      </div>
    );
  };
  
  export default BenefitsInformation;
  