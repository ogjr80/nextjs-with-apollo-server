const FuneralBenefitsRecipient = () => {
    return (
      <div className="form-step">
        <h2 className="form-title">Funeral Benefits Recipient</h2>
        <form className="form">
          <div className="form-group">
            <label>Recipient Name</label>
            <input type="text" className="form-input" />
          </div>
          <div className="form-group">
            <label>Relationship</label>
            <input type="text" className="form-input" />
          </div>
          <div className="form-group">
            <label>Contact Details</label>
            <input type="text" className="form-input" />
          </div>
        </form>
      </div>
    );
  };
  
  export default FuneralBenefitsRecipient;
  