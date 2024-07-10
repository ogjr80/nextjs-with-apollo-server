'use client'; 

import React, { useState } from 'react';
import { gql, useMutation } from '@apollo/client';

const CREATE_MEMBER_DETAILS = gql`
  mutation CreateMemberDetails($input: MemberDetailsInput!) {
    createMemberDetails(input: $input) {
      id
      surname
      firstName
    }
  }
`;

const MemberDetails: React.FC = () => {

  const [formData, setFormData] = useState({
    surname: '',
    firstName: '',
    identityPassportNumber: '',
    dateOfBirth: '',
    maritalStatus: 'SINGLE',
    gender: 'MALE',
    taxReferenceNumber: '',
    emailAddress: '',
    mobileNumber: '',
    alternateTelephoneNumber: '',
    healthDetails: ''
  });

  const [createMemberDetails, { data, loading, error }] = useMutation(CREATE_MEMBER_DETAILS);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    createMemberDetails({ variables: { input: formData } });
  };

  if (loading) return <p>Submitting...</p>;
  if (error) return <p>Submission error! {error.message}</p>;

  return (
    <form onSubmit={handleSubmit} className="form-step">
      <h2 className="form-title">Member Details</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="form-group">
          <label htmlFor="surname">Surname</label>
          <input type="text" id="surname" name="surname" className="form-input" value={formData.surname} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <input type="text" id="firstName" name="firstName" className="form-input" value={formData.firstName} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="identityPassportNumber">Identity/Passport Number</label>
          <input type="text" id="identityPassportNumber" name="identityPassportNumber" className="form-input" value={formData.identityPassportNumber} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="dateOfBirth">Date of Birth</label>
          <input type="date" id="dateOfBirth" name="dateOfBirth" className="form-input" value={formData.dateOfBirth} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="maritalStatus">Marital Status</label>
          <select id="maritalStatus" name="maritalStatus" className="form-input" value={formData.maritalStatus} onChange={handleChange} required>
            <option value="SINGLE">Single</option>
            <option value="MARRIED">Married</option>
            <option value="DIVORCED">Divorced</option>
            <option value="WIDOWED">Widowed</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="gender">Gender</label>
          <select id="gender" name="gender" className="form-input" value={formData.gender} onChange={handleChange} required>
            <option value="MALE">Male</option>
            <option value="FEMALE">Female</option>
            <option value="OTHER">Other</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="taxReferenceNumber">Tax Reference Number</label>
          <input type="text" id="taxReferenceNumber" name="taxReferenceNumber" className="form-input" value={formData.taxReferenceNumber} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="emailAddress">Email Address</label>
          <input type="email" id="emailAddress" name="emailAddress" className="form-input" value={formData.emailAddress} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="mobileNumber">Mobile Number</label>
          <input type="tel" id="mobileNumber" name="mobileNumber" className="form-input" value={formData.mobileNumber} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="alternateTelephoneNumber">Alternate Telephone Number</label>
          <input type="tel" id="alternateTelephoneNumber" name="alternateTelephoneNumber" className="form-input" value={formData.alternateTelephoneNumber} />
        </div>
      </div>
      <div className="mt-6">
        <label htmlFor="healthDetails">If you have had any injury, disease or disorder requiring treatment or medication during the preceding six months, please provide details below:</label>
        <textarea id="healthDetails" name="healthDetails" className="form-input" value={formData.healthDetails} onChange={handleChange}></textarea>
      </div>
      <button type="submit" className="btn mt-4">Submit</button>
    </form>
  );
};

export default MemberDetails;
