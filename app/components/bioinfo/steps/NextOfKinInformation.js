const NextOfKinInformation = () => {
    return (
      <div className="form-step">
        <h2 className="form-title">Next of Kin Information</h2>
        <form className="form">
          <div className="form-group">
            <label>Full Name</label>
            <input type="text" className="form-input" />
          </div>
          <div className="form-group">
            <label>Relationship</label>
            <input type="text" className="form-input" />
          </div>
          <div className="form-group">
            <label>Contact Number</label>
            <input type="text" className="form-input" />
          </div>
        </form>
      </div>
    );
  };
  
  export default NextOfKinInformation;
  