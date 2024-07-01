const DependantsInformation = () => {
    return (
      <div className="form-step">
        <h2 className="form-title">Dependants Information</h2>
        <form className="form">
          <div className="form-group">
            <label>Dependant's Name</label>
            <input type="text" className="form-input" />
          </div>
          <div className="form-group">
            <label>Date of Birth</label>
            <input type="date" className="form-input" />
          </div>
          <div className="form-group">
            <label>Relationship</label>
            <input type="text" className="form-input" />
          </div>
        </form>
      </div>
    );
  };
  
  export default DependantsInformation;
  