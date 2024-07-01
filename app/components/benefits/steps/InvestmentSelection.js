const InvestmentSelection = () => {
    return (
      <div className="form-step">
        <h2 className="form-title">Investment Selection</h2>
        <form className="form">
          <div className="form-group">
            <label>Investment Funds</label>
            <input type="text" className="form-input" />
          </div>
          <div className="form-group">
            <label>Allocation Percentage</label>
            <input type="number" className="form-input" />
          </div>
        </form>
      </div>
    );
  };
  
  export default InvestmentSelection;
  