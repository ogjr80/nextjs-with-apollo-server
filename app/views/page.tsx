'use client'; 

import React from 'react';
import ViewComponent from './ViewComponents';
const ViewPage: React.FC = () => {
  const memberDetails = {
    title: 'Member Details',
    items: [
      { label: 'Surname', value: 'Doe' },
      { label: 'First Name', value: 'John' },
      { label: 'Identity/Passport Number', value: '123456789' },
      { label: 'Date of Birth', value: '1990-01-01' },
      { label: 'Marital Status', value: 'Single' },
      { label: 'Gender', value: 'Male' },
      { label: 'Tax Reference Number', value: 'TRN123456' },
      { label: 'Email Address', value: 'john.doe@example.com' },
      { label: 'Mobile Number', value: '123-456-7890' },
      { label: 'Alternate Telephone Number', value: '098-765-4321' },
    ]
  };

  const addressDetails = {
    title: 'Address Details',
    items: [
      { label: 'Street', value: '123 Main St' },
      { label: 'City', value: 'Anytown' },
      { label: 'Province', value: 'Anyprovince' },
      { label: 'Postal Code', value: '12345' },
    ]
  };

  const nextOfKinDetails = {
    title: 'Next of Kin Details',
    items: [
      { label: 'Relationship', value: 'Spouse' },
      { label: 'Surname', value: 'Doe' },
      { label: 'First Names', value: 'Jane' },
      { label: 'Title', value: 'Mrs' },
      { label: 'Home Telephone', value: '123-456-7890' },
      { label: 'Business Telephone', value: '098-765-4321' },
    ]
  };

  const nextOfKinAddress = {
    title: 'Next of Kin Address',
    items: [
      { label: 'Street', value: '456 Another St' },
      { label: 'City', value: 'Anycity' },
      { label: 'Province', value: 'Anyprovince' },
      { label: 'Postal Code', value: '67890' },
    ]
  };

  const dependantsInformation = {
    title: 'Dependants Information',
    items: [
      { label: 'Surname', value: 'Doe' },
      { label: 'First Name', value: 'Junior' },
      { label: 'Birth Date', value: '2010-05-20' },
      { label: 'Sex', value: 'Male' },
      { label: 'Relationship', value: 'Son' },
    ]
  };

  return (
    <div className="p-6 space-y-6">
      <ViewComponent title={memberDetails.title} items={memberDetails.items} />
      <ViewComponent title={addressDetails.title} items={addressDetails.items} />
      <ViewComponent title={nextOfKinDetails.title} items={nextOfKinDetails.items} />
      <ViewComponent title={nextOfKinAddress.title} items={nextOfKinAddress.items} />
      <ViewComponent title={dependantsInformation.title} items={dependantsInformation.items} />
    </div>
  );
};

export default ViewPage;
