const MemberDetails = () => {
    return (
      <div className="form-step">
        <h2 className="form-title">Member Details</h2>
        <form className="form">
          <div className="form-group">
            <label>Full Name</label>
            <input type="text" className="form-input" />
          </div>
          <div className="form-group">
            <label>Date of Birth</label>
            <input type="date" className="form-input" />
          </div>
          <div className="form-group">
            <label>Employee ID</label>
            <input type="text" className="form-input" />
          </div>
          <div className="form-group">
            <label>Contact Information</label>
            <input type="text" className="form-input" />
          </div>
          <div className="form-group">
            <label>Address</label>
            <input type="text" className="form-input" />
          </div>
        </form>
      </div>
    );
  };
  
  export default MemberDetails;
  