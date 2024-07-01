const NextOfKinAddress = () => {
    return (
      <div className="form-step">
        <h2 className="form-title">Next of Kin Address</h2>
        <form className="form">
          <div className="form-group">
            <label>Street Address</label>
            <input type="text" className="form-input" />
          </div>
          <div className="form-group">
            <label>City</label>
            <input type="text" className="form-input" />
          </div>
          <div className="form-group">
            <label>State</label>
            <input type="text" className="form-input" />
          </div>
          <div className="form-group">
            <label>Postal Code</label>
            <input type="text" className="form-input" />
          </div>
        </form>
      </div>
    );
  };
  
  export default NextOfKinAddress;
  