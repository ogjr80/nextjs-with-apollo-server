const PreviousPaidUpBenefits: React.FC = () => {
  return (
    <div className="form-step">
      <h2 className="form-title">Previous Paid-Up Benefits</h2>

      <p className="mt-2 text-sm text-gray-700">
        In terms of the Pension Funds Act, we request that you provide us with a list of paid-up membership certificates
        that you may have in respect of any previous retirement fund savings.
        Should you wish, we can arrange to have these previous paid-up benefits transferred to the UWRF at no charge.
        This can be arranged by supplying the relevant paid-up membership certificate(s) to the Pensions Office at Wits.
      </p>

      <h3 className="mt-6 mb-2 text-lg font-semibold">Please tick the relevant box below:</h3>
      <div className="space-y-2">
        <div className="form-group">
          <label className="flex items-center space-x-3">
            <input type="checkbox" className="form-checkbox" />
            <span>I have no previous fund paid-up certificates.</span>
          </label>
        </div>
        <div className="form-group">
          <label className="flex items-center space-x-3">
            <input type="checkbox" className="form-checkbox" />
            <span>I have previous fund paid-up certificates but prefer to leave these paid-up in the original fund.</span>
          </label>
        </div>
        <div className="form-group">
          <label className="flex items-center space-x-3">
            <input type="checkbox" className="form-checkbox" />
            <span>I have previous fund paid-up certificates and would like these transferred to the UWRF. I will contact the Pensions Office.</span>
          </label>
        </div>
      </div>

      <p className="mt-6 text-sm text-gray-700">
        If you have elected to transfer your paid-up benefits to the UWRF, please provide the Fund name of your paid-up benefit/s below:
      </p>
      <div className="form-group mt-4">
        <label htmlFor="fundName1">Fund Name 1</label>
        <input type="text" id="fundName1" className="form-input" />
      </div>
      <div className="form-group mt-2">
        <label htmlFor="fundName2">Fund Name 2</label>
        <input type="text" id="fundName2" className="form-input" />
      </div>
      <div className="form-group mt-2">
        <label htmlFor="fundName3">Fund Name 3</label>
        <input type="text" id="fundName3" className="form-input" />
      </div> 
    </div>
  );
};

export default PreviousPaidUpBenefits;
