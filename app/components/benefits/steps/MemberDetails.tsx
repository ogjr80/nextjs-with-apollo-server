const MemberDetails: React.FC = () => {
  return (
    <div className="form-step">
      <h2 className="form-title">Member Details</h2>
      <form className="form">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="form-group">
            <label htmlFor="surname">Surname</label>
            <input type="text" id="surname" className="form-input" />
          </div>
          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input type="text" id="firstName" className="form-input" />
          </div>
          <div className="form-group">
            <label htmlFor="idNumber">Identity/Passport Number</label>
            <input type="text" id="idNumber" className="form-input" />
          </div>
          <div className="form-group">
            <label htmlFor="dob">Date of Birth</label>
            <input type="date" id="dob" className="form-input" />
          </div>
          <div className="form-group">
            <label htmlFor="maritalStatus">Marital Status</label>
            <select id="maritalStatus" className="form-input">
              <option value="">Select</option>
              <option value="single">Single</option>
              <option value="married">Married</option>
              <option value="divorced">Divorced</option>
              <option value="widowed">Widowed</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="gender">Gender</label>
            <select id="gender" className="form-input">
              <option value="">Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="taxNumber">Tax Reference Number</label>
            <input type="text" id="taxNumber" className="form-input" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" className="form-input" />
          </div>
          <div className="form-group">
            <label htmlFor="mobile">Mobile Number</label>
            <input type="tel" id="mobile" className="form-input" />
          </div>
          <div className="form-group">
            <label htmlFor="alternatePhone">Alternate Telephone Number</label>
            <input type="tel" id="alternatePhone" className="form-input" />
          </div>
        </div>

        <h3 className="mt-6 mb-4 text-lg font-semibold">Physical Address</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="form-group">
            <label htmlFor="physicalStreet">Street</label>
            <input type="text" id="physicalStreet" className="form-input" />
          </div>
          <div className="form-group">
            <label htmlFor="physicalCity">City</label>
            <input type="text" id="physicalCity" className="form-input" />
          </div>
          <div className="form-group">
            <label htmlFor="physicalProvince">Province</label>
            <input type="text" id="physicalProvince" className="form-input" />
          </div>
          <div className="form-group">
            <label htmlFor="physicalCode">Postal Code</label>
            <input type="text" id="physicalCode" className="form-input" />
          </div>
        </div>

        <h3 className="mt-6 mb-4 text-lg font-semibold">Postal Address</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="form-group">
            <label htmlFor="postalStreet">Street</label>
            <input type="text" id="postalStreet" className="form-input" />
          </div>
          <div className="form-group">
            <label htmlFor="postalCity">City</label>
            <input type="text" id="postalCity" className="form-input" />
          </div>
          <div className="form-group">
            <label htmlFor="postalProvince">Province</label>
            <input type="text" id="postalProvince" className="form-input" />
          </div>
          <div className="form-group">
            <label htmlFor="postalCode">Postal Code</label>
            <input type="text" id="postalCode" className="form-input" />
          </div>
        </div>

        <div className="form-group mt-6">
          <label htmlFor="injuryDetails">If you have had any injury, disease or disorder requiring treatment or medication during the preceding six months, please provide details below:</label>
          <textarea id="injuryDetails" className="form-input"></textarea>
        </div>
      </form>
    </div>
  );
};

export default MemberDetails;
