const BeneficiaryNomination = () => {
    return (
      <div className="form-step">
        <h2 className="form-title">Beneficiary Nomination - Death Benefits</h2>
        <form className="form">
          <div className="form-group">
            <label>Beneficiary Name</label>
            <input type="text" className="form-input" />
          </div>
          <div className="form-group">
            <label>Relationship</label>
            <input type="text" className="form-input" />
          </div>
          <div className="form-group">
            <label>Percentage Allocation</label>
            <input type="number" className="form-input" />
          </div>
        </form>
      </div>
    );
  };
  
  export default BeneficiaryNomination;
  