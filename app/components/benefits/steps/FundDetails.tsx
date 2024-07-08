const FundDetails: React.FC = () => {
    return (
      <div className="form-step">
        <h2 className="form-title">Fund Details</h2>
        <form className="form">
          <div className="form-group">
            <label htmlFor="fundName">Fund Name</label>
            <input type="text" id="fundName" className="form-input" />
          </div>
          <div className="form-group">
            <label htmlFor="fundType">Fund Type</label>
            <input type="text" id="fundType" className="form-input" />
          </div>
          <div className="form-group">
            <label htmlFor="fundValue">Fund Value</label>
            <input type="number" id="fundValue" className="form-input" />
          </div>
          <div className="form-group">
            <label htmlFor="contribution">Contribution</label>
            <input type="number" id="contribution" className="form-input" />
          </div>
        </form>
      </div>
    );
  };
  
  export default FundDetails;
  