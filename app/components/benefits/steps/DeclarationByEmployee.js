const DeclarationByEmployee = () => {
    return (
      <div className="form-step">
        <h2 className="form-title">Declaration by the Employee</h2>
        <form className="form">
          <div className="form-group">
            <label>Declaration Statement</label>
            <textarea className="form-input"></textarea>
          </div>
          <div className="form-group">
            <label>Employee Signature</label>
            <input type="text" className="form-input" />
          </div>
          <div className="form-group">
            <label>Date</label>
            <input type="date" className="form-input" />
          </div>
        </form>
      </div>
    );
  };
  
  export default DeclarationByEmployee;
  