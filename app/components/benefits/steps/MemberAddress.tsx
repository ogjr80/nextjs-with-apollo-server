'use client'; 
import React, { useState } from 'react';
import { gql, useMutation } from '@apollo/client';

const CREATE_ADDRESS = gql`
  mutation CreateAddress($input: AddressInput!) {
    createAddress(input: $input) {
      id
      street
    }
  }
`;

const MemberAddress: React.FC = () => {
  const [formData, setFormData] = useState({
    physicalAddress: {
      street: '',
      city: '',
      province: '',
      code: ''
    },
    postalAddress: {
      street: '',
      city: '',
      province: '',
      code: ''
    }
  });

  const [createAddress, { data, loading, error }] = useMutation(CREATE_ADDRESS);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const [addressType, field] = name.split('.');
    setFormData((prevState) => ({
      ...prevState,
      [addressType]: {
        ...prevState[addressType],
        [field]: value
      }
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    createAddress({ variables: { input: formData.physicalAddress } });
    createAddress({ variables: { input: formData.postalAddress } });
  };

  if (loading) return <p>Submitting...</p>;
  if (error) return <p>Submission error! {error.message}</p>;

  return (
    <form onSubmit={handleSubmit} className="form-step">
      <h2 className="form-title">Member Address</h2>
      <div className="mt-6">
        <h3 className="text-lg font-semibold">Physical Address</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="form-group">
            <label htmlFor="physicalAddress.street">Street</label>
            <input type="text" id="physicalAddress.street" name="physicalAddress.street" className="form-input" value={formData.physicalAddress.street} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="physicalAddress.city">City</label>
            <input type="text" id="physicalAddress.city" name="physicalAddress.city" className="form-input" value={formData.physicalAddress.city} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="physicalAddress.province">Province</label>
            <input type="text" id="physicalAddress.province" name="physicalAddress.province" className="form-input" value={formData.physicalAddress.province} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="physicalAddress.code">Code</label>
            <input type="text" id="physicalAddress.code" name="physicalAddress.code" className="form-input" value={formData.physicalAddress.code} onChange={handleChange} required />
          </div>
        </div>
      </div>
      <div className="mt-6">
        <h3 className="text-lg font-semibold">Postal Address</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="form-group">
            <label htmlFor="postalAddress.street">Street</label>
            <input type="text" id="postalAddress.street" name="postalAddress.street" className="form-input" value={formData.postalAddress.street} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="postalAddress.city">City</label>
            <input type="text" id="postalAddress.city" name="postalAddress.city" className="form-input" value={formData.postalAddress.city} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="postalAddress.province">Province</label>
            <input type="text" id="postalAddress.province" name="postalAddress.province" className="form-input" value={formData.postalAddress.province} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="postalAddress.code">Code</label>
            <input type="text" id="postalAddress.code" name="postalAddress.code" className="form-input" value={formData.postalAddress.code} onChange={handleChange} required />
          </div>
        </div>
      </div>
      <button type="submit" className="btn mt-4">Submit</button>
    </form>
  );
};

export default MemberAddress;
