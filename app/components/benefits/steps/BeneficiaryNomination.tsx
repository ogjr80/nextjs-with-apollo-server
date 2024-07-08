// 'use client';
// import React, { useState } from 'react';

// const Nomination: React.FC = () => {
//   const [allocations, setAllocations] = useState<string[]>(Array(6).fill(''));
//   const [nominees, setNominees] = useState<any[]>([]);
//   const [recipients, setRecipients] = useState<any[]>([]);
//   const [showNomineeDialog, setShowNomineeDialog] = useState<boolean>(false);
//   const [showRecipientDialog, setShowRecipientDialog] = useState<boolean>(false);
//   const [nomineeData, setNomineeData] = useState<any>({
//     title: '',
//     initials: '',
//     firstNames: '',
//     surname: '',
//     idNumber: '',
//     passportNumber: '',
//     passportCountry: '',
//     telephone: '',
//     address: '',
//     financiallyDependent: 'Yes',
//   });
//   const [recipientData, setRecipientData] = useState<any>({
//     surname: '',
//     firstName: '',
//     relationship: '',
//     dob: '',
//   });

//   const handleAllocationChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
//     const newAllocations = [...allocations];
//     newAllocations[index] = e.target.value;
//     setAllocations(newAllocations);
//   };

//   const calculateTotalAllocation = () => {
//     return allocations.reduce((total, allocation) => total + (parseInt(allocation) || 0), 0);
//   };

//   const handleNomineeChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
//     const { name, value } = e.target;
//     setNomineeData({ ...nomineeData, [name]: value });
//   };

//   const addNominee = () => {
//     setNominees([...nominees, nomineeData]);
//     setNomineeData({
//       title: '',
//       initials: '',
//       firstNames: '',
//       surname: '',
//       idNumber: '',
//       passportNumber: '',
//       passportCountry: '',
//       telephone: '',
//       address: '',
//       financiallyDependent: 'Yes',
//     });
//     setShowNomineeDialog(false);
//   };

//   const handleRecipientChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setRecipientData({ ...recipientData, [name]: value });
//   };

//   const addRecipient = () => {
//     setRecipients([...recipients, recipientData]);
//     setRecipientData({
//       surname: '',
//       firstName: '',
//       relationship: '',
//       dob: '',
//     });
//     setShowRecipientDialog(false);
//   };

//   return (
//     <div className="form-step">
//       <h2 className="form-title">Nomination</h2>

//       <details className="mt-6 bg-gray-100 p-4 rounded-lg shadow">
//         <summary className="cursor-pointer text-lg font-semibold">Instructions and Information</summary>
//         <div className="mt-2 text-sm text-gray-700 space-y-2">
//           <p>1. This form must be completed for the purposes of ensuring that the Trustees of the University of the Witwatersrand Retirement Fund and, if applicable, the underwriter of the group funeral scheme that forms part of your employer’s employee benefit arrangements, are informed of your wishes regarding the payment of these benefits should you pass away or for any purpose set out in the fund’s PAIA manual (if any). We are collecting and processing your personal information for this purpose.</p>
//           <p>2. We wish to protect your personal information. Personal information is any information about or associated with a person and that can identify the person. The processing of the personal information for the purposes set out above is in your legitimate interests as without it the fund cannot be guided by your preference regarding nomination of your beneficiaries in the event of your death.</p>
//           <p>3. The fund has an obligation in law to process for the purpose set out above in terms of section 37C of the Pension Funds Act.</p>
//           <p>4. It is optional for you to provide the fund with the requested information. However, if you do not give it to us the fund cannot consider your wishes with regards to whom you would like to receive a portion of any death benefit, should you pass away, when they are allocating the death benefit.</p>
//           <p>5. Certain types of sensitive information, called special personal information (i.e. race, ethnicity, religious beliefs, information about criminal behaviour, health and sexuality), as well as information about children may be revealed by you on this form. The fund processes this information as it is obliged to under section 37C of the Pension Funds Act.</p>
//           <p>6. You may:</p>
//           <ul className="list-disc ml-5">
//             <li>request from us what personal information we hold about you (free) and for a copy of it (may be subject to a fee);</li>
//             <li>request information from us about which third parties have access to your personal information;</li>
//             <li>request us to delete or destroy your information, if we are no longer authorised to keep it;</li>
//             <li>object to us processing your personal information. Please use Form 1 in the Regulations to the Protection of Personal Information Act (“POPIA”), which is available on the Information Regulator’s website (see website address below);</li>
//             <li>request us to correct or delete your personal information if it is inaccurate, irrelevant, excessive, out-of-date, incomplete, misleading or unlawfully obtained. Please use Form 2 in the Regulations to POPIA, which is available on the Information Regulator’s website.</li>
//           </ul>
//           <p>7. The Promotion of Access to Information Act (“PAIA”) provides you with the right of access to information held by the fund when you request such information under PAIA, so that you can exercise or protect your or another person’s rights. If you want to make a PAIA request of the fund, you must use the prescribed form (Form C). You can find Form C on this website: www.sahrc.org.za. For more information, please request the fund’s Access to information and data subject participation manual from the fund’s administrator.</p>
//           <p>8. If you do not use the mandatory prescribed forms set out above, we may not process your request or we may deny your request.</p>
//           <p>9. From time to time we may disclose personal information you provide to us to: regulators, ombud or government entities; our tracing or other agents; other companies in the Ensimini Group; our auditors or legal providers; any person or organisation having legal entitlement to access the information or any person notified in our PAIA manual (if any).</p>
//           <p>10. We will keep the personal information we collect from you for as long as the fund needs to for our purposes, as required by law. Once we are no longer authorised to keep the personal information, we can delete, destroy, restrict or de-identify it. It is important to realise that funds are often required to keep personal information related to the fund, its members, former members, and beneficiaries for many years, even long after the member has left the fund.</p>
//           <p>If you provide us with any personal information that requires you to have first obtained consent to process it, then it is your responsibility to obtain the consents from the relevant persons.</p>
//           <p>11. Please list all your spouse(s) and all your children, even if the proportion of benefit to be allocated is zero, i.e. you do not wish them to receive any benefit. The sum of benefit proportions allocated must not exceed a total of 100%.</p>
//           <p>12. All benefits paid from the retirement fund will be paid in terms of Section 37C of the Pension Funds Act. This section of the Pension Funds Act makes the Trustees of the retirement fund responsible for ensuring that they identify all dependants and nominees and that they then distribute the benefit in an equitable manner. Whilst the Trustees will take note of the information completed on this Beneficiary Nomination Form, they are not legally bound by its contents, but must take the provisions of the Pension Funds Act into consideration.</p>
//           <p>13. A benefit paid from a funeral insurance policy that does not form part of the retirement fund is referred to as “unapproved benefits”. This benefit will be paid strictly in accordance with the instructions you provide herein. If you fail to make a nomination, the benefit will be paid to your estate.</p>
//           <p>14. Please ensure that you regularly update your Beneficiary Nomination Form as your circumstances change from time to time. This will ensure that the benefit payable to your beneficiaries are paid quicker and in the most efficient manner.</p>
//           <p>15. Please complete as much of the information relating to each of the beneficiaries in the beneficiary details page. This will assist in speeding up payment of the benefits due to your beneficiaries.</p>
//           <p>16. Please note the following definitions relevant for the completion of the retirement fund component of the Beneficiary Nomination Form:</p>
//           <ul className="list-disc ml-5">
//             <li>Beneficiary is defined as a nominee of a member or a dependant who is entitled to a benefit, as provided for in the Rules of the Fund.</li>
//             <li>Dependant is defined as:</li>
//             <ul className="list-decimal ml-5">
//               <li>A person in respect of whom the member is legally liable for maintenance;</li>
//               <li>A person in respect of whom the member is not legally liable for maintenance, if such person:
//                 <ul className="list-disc ml-5">
//                   <li>Was, in the opinion of the board, upon death of the member in fact dependent on the member for maintenance;</li>
//                   <li>Is the spouse of the member;</li>
//                   <li>Is a child of the member, including a posthumous child, an adopted child and a child born out of wedlock;</li>
//                 </ul>
//               </li>
//               <li>A person in respect of whom the member would have become legally liable for maintenance, had the member not died.</li>
//             </ul>
//             <li>Nominee is defined as a person who is not a dependant of the member but who has been designated in writing by the member as a nominee, to receive such part of the benefit as is specified by the member.</li>
//           </ul>
//           <p>Please list your spouse(s) and all children, even if the portion of the benefit to be allocated is zero.</p>
//           <p>Complaints and queries: If you have complaints about the way in which we have used your personal information, you can lodge a complaint with the Information Regulator at: tel: 012 406 4818; fax: 086 500 3351; email: inforeg@justice.gov.za; website: https://www.justice.gov.za/inforeg/</p>
//           <p>Queries: if you have any queries, please address them in writing to Ensimini Administration Services (Pty) Ltd at info@ensimini.com.</p>
//         </div>
//       </details>

//       <div className="mt-6">
//         <h3 className="text-lg font-semibold">Fund Details</h3>
//         <p className="mt-2 text-sm text-gray-700">
//           Fund Name: University of the Witwatersrand Retirement Fund
//         </p>
//       </div>

//       <div className="mt-6">
//         <h3 className="text-lg font-semibold">Member Details</h3>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           <div className="form-group">
//             <label htmlFor="surname">Surname</label>
//             <input type="text" id="surname" className="form-input" value="Doe" readOnly />
//           </div>
//           <div className="form-group">
//             <label htmlFor="firstName">First Name</label>
//             <input type="text" id="firstName" className="form-input" value="John" readOnly />
//           </div>
//           <div className="form-group">
//             <label htmlFor="idNumber">Identity/Passport Number</label>
//             <input type="text" id="idNumber" className="form-input" value="A1234567" readOnly />
//           </div>
//           <div className="form-group">
//             <label htmlFor="dob">Date of Birth</label>
//             <input type="text" id="dob" className="form-input" value="01/01/1980" readOnly />
//           </div>
//           <div className="form-group">
//             <label htmlFor="contactPerson">Nominated Contact Person</label>
//             <input type="text" id="contactPerson" className="form-input" placeholder="Enter contact person" />
//           </div>
//           <div className="form-group">
//             <label htmlFor="telephone">Telephone Number</label>
//             <input type="tel" id="telephone" className="form-input" placeholder="Enter telephone number" />
//           </div>
//         </div>
//       </div>

//       <div className="mt-6">
//         <h3 className="text-lg font-semibold">Beneficiaries</h3>
//         <div className="overflow-x-auto">
//           <table className="min-w-full bg-white border border-gray-300">
//             <thead>
//               <tr>
//                 <th className="py-2 px-4 bg-gray-200 border-b">Surname</th>
//                 <th className="py-2 px-4 bg-gray-200 border-b">First Name</th>
//                 <th className="py-2 px-4 bg-gray-200 border-b">Relationship to the Deceased</th>
//                 <th className="py-2 px-4 bg-gray-200 border-b">Date of Birth (DD/MM/YYYY)</th>
//                 <th className="py-2 px-4 bg-gray-200 border-b">Allocation (%)</th>
//               </tr>
//             </thead>
//             <tbody>
//               {Array.from({ length: 6 }).map((_, index) => (
//                 <tr key={index}>
//                   <td className="border-t py-2 px-4">
//                     <input type="text" className="form-input" placeholder="Surname" />
//                   </td>
//                   <td className="border-t py-2 px-4">
//                     <input type="text" className="form-input" placeholder="First Name" />
//                   </td>
//                   <td className="border-t py-2 px-4">
//                     <input type="text" className="form-input" placeholder="Relationship" />
//                   </td>
//                   <td className="border-t py-2 px-4">
//                     <input type="text" className="form-input" placeholder="DD/MM/YYYY" />
//                   </td>
//                   <td className="border-t py-2 px-4">
//                     <input
//                       type="number"
//                       className="form-input"
//                       min="0"
//                       max="100"
//                       value={allocations[index]}
//                       onChange={(e) => handleAllocationChange(e, index)}
//                     />
//                   </td>
//                 </tr>
//               ))}
//               <tr>
//                 <td className="border-t py-2 px-4 font-semibold" colSpan={4}>
//                   Total Allocation (%)
//                 </td>
//                 <td className="border-t py-2 px-4 font-semibold">
//                   <input type="number" className="form-input" value={calculateTotalAllocation()} readOnly />
//                 </td>
//               </tr>
//             </tbody>
//           </table>
//         </div>
//       </div>

//       <div className="mt-6">
//         <h3 className="text-lg font-semibold">Nominee Details</h3>
//         <button
//           type="button"
//           onClick={() => setShowNomineeDialog(true)}
//           className="btn mt-4"
//         >
//           Add Nominated Person
//         </button>
//         <div className="overflow-x-auto mt-4">
//           <table className="min-w-full bg-white border border-gray-300">
//             <thead>
//               <tr>
//                 <th className="py-2 px-4 bg-gray-200 border-b">Title</th>
//                 <th className="py-2 px-4 bg-gray-200 border-b">Initials</th>
//                 <th className="py-2 px-4 bg-gray-200 border-b">First Names</th>
//                 <th className="py-2 px-4 bg-gray-200 border-b">Surname</th>
//                 <th className="py-2 px-4 bg-gray-200 border-b">ID Number</th>
//                 <th className="py-2 px-4 bg-gray-200 border-b">Passport Number</th>
//                 <th className="py-2 px-4 bg-gray-200 border-b">Country</th>
//                 <th className="py-2 px-4 bg-gray-200 border-b">Telephone</th>
//                 <th className="py-2 px-4 bg-gray-200 border-b">Address</th>
//                 <th className="py-2 px-4 bg-gray-200 border-b">Financially Dependent</th>
//               </tr>
//             </thead>
//             <tbody>
//               {nominees.map((nominee, index) => (
//                 <tr key={index}>
//                   <td className="border-t py-2 px-4">{nominee.title}</td>
//                   <td className="border-t py-2 px-4">{nominee.initials}</td>
//                   <td className="border-t py-2 px-4">{nominee.firstNames}</td>
//                   <td className="border-t py-2 px-4">{nominee.surname}</td>
//                   <td className="border-t py-2 px-4">{nominee.idNumber}</td>
//                   <td className="border-t py-2 px-4">{nominee.passportNumber}</td>
//                   <td className="border-t py-2 px-4">{nominee.passportCountry}</td>
//                   <td className="border-t py-2 px-4">{nominee.telephone}</td>
//                   <td className="border-t py-2 px-4">{nominee.address}</td>
//                   <td className="border-t py-2 px-4">{nominee.financiallyDependent}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>

//       <div className="mt-6">
//         <h3 className="text-lg font-semibold">Recipients</h3>
//         <details className="mt-6 bg-gray-100 p-4 rounded-lg shadow">
//           <summary className="cursor-pointer text-lg font-semibold">Funeral Benefits Info</summary>
//           <div className="mt-2 text-sm text-gray-700">
//             <p>A funeral benefit (if applicable) is payable in the event of death as defined in the group insurance policy with your Employer.</p>
//             <p>In the event of your death, the Funeral Benefit will be paid to your nominated beneficiary in terms of your signed Nomination of Beneficiary form on record with your Employer.</p>
//             <p>If you have not completed a Nomination of Beneficiary form or if you have nominated your Employer, the funeral benefit will be paid to your estate in terms of the policy terms and conditions.</p>
//             <p>Beneficiary one is the person you nominate to claim and receive the funeral benefit in the event of a successful claim. If beneficiary one predeceases you, the benefit will become payable to the nominated beneficiary two.</p>
//             <p>The nominated beneficiaries must be 18 years or older. In the event that both beneficiaries predecease you the benefit will be paid to your estate.</p>
//           </div>
//         </details>
//         <button
//           type="button"
//           onClick={() => setShowRecipientDialog(true)}
//           className="btn mt-4"
//         >
//           Add Recipient
//         </button>
//         <div className="overflow-x-auto mt-4">
//           <table className="min-w-full bg-white border border-gray-300">
//             <thead>
//               <tr>
//                 <th className="py-2 px-4 bg-gray-200 border-b">Surname</th>
//                 <th className="py-2 px-4 bg-gray-200 border-b">First Name</th>
//                 <th className="py-2 px-4 bg-gray-200 border-b">Relationship to Deceased</th>
//                 <th className="py-2 px-4 bg-gray-200 border-b">Date of Birth (DD/MM/YYYY)</th>
//               </tr>
//             </thead>
//             <tbody>
//               {recipients.map((recipient, index) => (
//                 <tr key={index}>
//                   <td className="border-t py-2 px-4">{recipient.surname}</td>
//                   <td className="border-t py-2 px-4">{recipient.firstName}</td>
//                   <td className="border-t py-2 px-4">{recipient.relationship}</td>
//                   <td className="border-t py-2 px-4">{recipient.dob}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>

//       {showNomineeDialog && (
//         <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
//           <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-3xl">
//             <h3 className="text-lg font-semibold mb-4">Add Nominated Person</h3>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               <div className="form-group">
//                 <label htmlFor="title">Title</label>
//                 <input
//                   type="text"
//                   id="title"
//                   name="title"
//                   className="form-input"
//                   value={nomineeData.title}
//                   onChange={handleNomineeChange}
//                 />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="initials">Initials</label>
//                 <input
//                   type="text"
//                   id="initials"
//                   name="initials"
//                   className="form-input"
//                   value={nomineeData.initials}
//                   onChange={handleNomineeChange}
//                 />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="firstNames">First Names</label>
//                 <input
//                   type="text"
//                   id="firstNames"
//                   name="firstNames"
//                   className="form-input"
//                   value={nomineeData.firstNames}
//                   onChange={handleNomineeChange}
//                 />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="surname">Surname</label>
//                 <input
//                   type="text"
//                   id="surname"
//                   name="surname"
//                   className="form-input"
//                   value={nomineeData.surname}
//                   onChange={handleNomineeChange}
//                 />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="idNumber">RSA Identity Number</label>
//                 <input
//                   type="text"
//                   id="idNumber"
//                   name="idNumber"
//                   className="form-input"
//                   value={nomineeData.idNumber}
//                   onChange={handleNomineeChange}
//                 />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="passportNumber">Passport Number</label>
//                 <input
//                   type="text"
//                   id="passportNumber"
//                   name="passportNumber"
//                   className="form-input"
//                   value={nomineeData.passportNumber}
//                   onChange={handleNomineeChange}
//                 />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="passportCountry">Passport Country of Origin</label>
//                 <input
//                   type="text"
//                   id="passportCountry"
//                   name="passportCountry"
//                   className="form-input"
//                   value={nomineeData.passportCountry}
//                   onChange={handleNomineeChange}
//                 />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="telephone">Telephone Number</label>
//                 <input
//                   type="tel"
//                   id="telephone"
//                   name="telephone"
//                   className="form-input"
//                   value={nomineeData.telephone}
//                   onChange={handleNomineeChange}
//                 />
//               </div>
//               <div className="form-group md:col-span-2">
//                 <label htmlFor="address">Residential Address</label>
//                 <input
//                   type="text"
//                   id="address"
//                   name="address"
//                   className="form-input"
//                   value={nomineeData.address}
//                   onChange={handleNomineeChange}
//                 />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="financiallyDependent">Financially Dependent on Deceased</label>
//                 <select
//                   id="financiallyDependent"
//                   name="financiallyDependent"
//                   className="form-input"
//                   value={nomineeData.financiallyDependent}
//                   onChange={handleNomineeChange}
//                 >
//                   <option value="Yes">Yes</option>
//                   <option value="No">No</option>
//                 </select>
//               </div>
//             </div>
//             <div className="flex justify-end mt-4">
//               <button
//                 type="button"
//                 onClick={addNominee}
//                 className="btn"
//               >
//                 Add Nominee
//               </button>
//               <button
//                 type="button"
//                 onClick={() => setShowNomineeDialog(false)}
//                 className="btn ml-4"
//               >
//                 Cancel
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {showRecipientDialog && (
//         <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
//           <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
//             <h3 className="text-lg font-semibold mb-4">Add Recipient</h3>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               <div className="form-group">
//                 <label htmlFor="surname">Surname</label>
//                 <input
//                   type="text"
//                   id="surname"
//                   name="surname"
//                   className="form-input"
//                   value={recipientData.surname}
//                   onChange={handleRecipientChange}
//                 />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="firstName">First Name</label>
//                 <input
//                   type="text"
//                   id="firstName"
//                   name="firstName"
//                   className="form-input"
//                   value={recipientData.firstName}
//                   onChange={handleRecipientChange}
//                 />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="relationship">Relationship to Deceased</label>
//                 <input
//                   type="text"
//                   id="relationship"
//                   name="relationship"
//                   className="form-input"
//                   value={recipientData.relationship}
//                   onChange={handleRecipientChange}
//                 />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="dob">Date of Birth (DD/MM/YYYY)</label>
//                 <input
//                   type="text"
//                   id="dob"
//                   name="dob"
//                   className="form-input"
//                   value={recipientData.dob}
//                   onChange={handleRecipientChange}
//                 />
//               </div>
//             </div>
//             <div className="flex justify-end mt-4">
//               <button
//                 type="button"
//                 onClick={addRecipient}
//                 className="btn"
//               >
//                 Add Recipient
//               </button>
//               <button
//                 type="button"
//                 onClick={() => setShowRecipientDialog(false)}
//                 className="btn ml-4"
//               >
//                 Cancel
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       <div className="mt-6">
//         <h3 className="text-lg font-semibold">Declaration by Member</h3>
//         <p className="mt-4 text-sm text-gray-700">
//           I agree that:
//         </p>
//         <ul className="list-disc ml-5 mt-2 text-sm text-gray-700">
//           <li>This Beneficiary Nomination Form cancels all previous Beneficiary Nomination Forms in respect of the retirement fund and/or unapproved group life or funeral assurance policy I belong to by virtue of my employment with my employer listed above.</li>
//           <li>To the best of my knowledge, the information supplied herein is true and correct.</li>
//           <li>It is my responsibility to ensure that the retirement fund and my employer has up to date contact information for my beneficiaries.</li>
//           <li>The payment of any benefit shall be subject to the conditions of relevant prevailing legislation and the rules and policies applicable to the retirement fund and / or group life and/or funeral insurance policies in terms of which the benefits are payable.</li>
//         </ul>
//         <p className="mt-4 text-sm text-gray-700">
//           I consent to the fund and its administrator processing:
//         </p>
//         <ul className="list-disc ml-5 mt-2 text-sm text-gray-700">
//           <li>any personal information for the purposes set out above about my minor children; and</li>
//           <li>any special personal information (see above) provided by me for the purposes set out above.</li>
//         </ul>
//         <div className="mt-6">
//           <div className="flex items-center">
//             <input type="checkbox" id="signed" className="form-checkbox h-5 w-5 text-green-600" />
//             <label htmlFor="signed" className="ml-2 text-sm text-gray-700">Signed at</label>
//             <input type="text" className="form-input ml-2" placeholder="Location" />
//             <label className="ml-2 text-sm text-gray-700">on this</label>
//             <input type="text" className="form-input ml-2" placeholder="Day" />
//             <label className="ml-2 text-sm text-gray-700">day of</label>
//             <input type="text" className="form-input ml-2" placeholder="Month" />
//             <label className="ml-2 text-sm text-gray-700">20</label>
//             <input type="text" className="form-input ml-2" placeholder="Year" />
//           </div>
//           <div className="mt-6">
//             <label htmlFor="signature" className="text-sm text-gray-700">Employee's Signature:</label>
//             <input type="text" id="signature" className="form-input mt-2" placeholder="Signature" />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Nomination;
'use client'; 
'use client';
import React, { useState } from 'react';

const Nomination: React.FC = () => {
  const [allocations, setAllocations] = useState<string[]>(Array(6).fill(''));
  const [nominees, setNominees] = useState<any[]>([]);
  const [recipients, setRecipients] = useState<any[]>([]);
  const [showNomineeDialog, setShowNomineeDialog] = useState<boolean>(false);
  const [showRecipientDialog, setShowRecipientDialog] = useState<boolean>(false);
  const [nomineeData, setNomineeData] = useState<any>({
    title: '',
    initials: '',
    firstNames: '',
    surname: '',
    idNumber: '',
    passportNumber: '',
    passportCountry: '',
    telephone: '',
    address: '',
    financiallyDependent: 'Yes',
  });
  const [recipientData, setRecipientData] = useState<any>({
    surname: '',
    firstName: '',
    relationship: '',
    dob: '',
  });

  const handleAllocationChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const newAllocations = [...allocations];
    newAllocations[index] = e.target.value;
    setAllocations(newAllocations);
  };

  const calculateTotalAllocation = () => {
    return allocations.reduce((total, allocation) => total + (parseInt(allocation) || 0), 0);
  };

  const handleNomineeChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setNomineeData({ ...nomineeData, [name]: value });
  };

  const addNominee = () => {
    setNominees([...nominees, nomineeData]);
    setNomineeData({
      title: '',
      initials: '',
      firstNames: '',
      surname: '',
      idNumber: '',
      passportNumber: '',
      passportCountry: '',
      telephone: '',
      address: '',
      financiallyDependent: 'Yes',
    });
    setShowNomineeDialog(false);
  };

  const handleRecipientChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setRecipientData({ ...recipientData, [name]: value });
  };

  const addRecipient = () => {
    setRecipients([...recipients, recipientData]);
    setRecipientData({
      surname: '',
      firstName: '',
      relationship: '',
      dob: '',
    });
    setShowRecipientDialog(false);
  };

  return (
    <div className="form-step">
      <h2 className="form-title">Nomination</h2>

      <details className="mt-6 bg-gray-100 p-4 rounded-lg shadow">
        <summary className="cursor-pointer text-lg font-semibold">Instructions and Information</summary>
        <div className="mt-2 text-sm text-gray-700 space-y-2">
          <p>1. This form must be completed for the purposes of ensuring that the Trustees of the University of the Witwatersrand Retirement Fund and, if applicable, the underwriter of the group funeral scheme that forms part of your employer’s employee benefit arrangements, are informed of your wishes regarding the payment of these benefits should you pass away or for any purpose set out in the fund’s PAIA manual (if any). We are collecting and processing your personal information for this purpose.</p>
          <p>2. We wish to protect your personal information. Personal information is any information about or associated with a person and that can identify the person. The processing of the personal information for the purposes set out above is in your legitimate interests as without it the fund cannot be guided by your preference regarding nomination of your beneficiaries in the event of your death.</p>
          <p>3. The fund has an obligation in law to process for the purpose set out above in terms of section 37C of the Pension Funds Act.</p>
          <p>4. It is optional for you to provide the fund with the requested information. However, if you do not give it to us the fund cannot consider your wishes with regards to whom you would like to receive a portion of any death benefit, should you pass away, when they are allocating the death benefit.</p>
          <p>5. Certain types of sensitive information, called special personal information (i.e. race, ethnicity, religious beliefs, information about criminal behaviour, health and sexuality), as well as information about children may be revealed by you on this form. The fund processes this information as it is obliged to under section 37C of the Pension Funds Act.</p>
          <p>6. You may:</p>
          <ul className="list-disc ml-5">
            <li>request from us what personal information we hold about you (free) and for a copy of it (may be subject to a fee);</li>
            <li>request information from us about which third parties have access to your personal information;</li>
            <li>request us to delete or destroy your information, if we are no longer authorised to keep it;</li>
            <li>object to us processing your personal information. Please use Form 1 in the Regulations to the Protection of Personal Information Act (“POPIA”), which is available on the Information Regulator’s website (see website address below);</li>
            <li>request us to correct or delete your personal information if it is inaccurate, irrelevant, excessive, out-of-date, incomplete, misleading or unlawfully obtained. Please use Form 2 in the Regulations to POPIA, which is available on the Information Regulator’s website.</li>
          </ul>
          <p>7. The Promotion of Access to Information Act (“PAIA”) provides you with the right of access to information held by the fund when you request such information under PAIA, so that you can exercise or protect your or another person’s rights. If you want to make a PAIA request of the fund, you must use the prescribed form (Form C). You can find Form C on this website: www.sahrc.org.za. For more information, please request the fund’s Access to information and data subject participation manual from the fund’s administrator.</p>
          <p>8. If you do not use the mandatory prescribed forms set out above, we may not process your request or we may deny your request.</p>
          <p>9. From time to time we may disclose personal information you provide to us to: regulators, ombud or government entities; our tracing or other agents; other companies in the Ensimini Group; our auditors or legal providers; any person or organisation having legal entitlement to access the information or any person notified in our PAIA manual (if any).</p>
          <p>10. We will keep the personal information we collect from you for as long as the fund needs to for our purposes, as required by law. Once we are no longer authorised to keep the personal information, we can delete, destroy, restrict or de-identify it. It is important to realise that funds are often required to keep personal information related to the fund, its members, former members, and beneficiaries for many years, even long after the member has left the fund.</p>
          <p>If you provide us with any personal information that requires you to have first obtained consent to process it, then it is your responsibility to obtain the consents from the relevant persons.</p>
          <p>11. Please list all your spouse(s) and all your children, even if the proportion of benefit to be allocated is zero, i.e. you do not wish them to receive any benefit. The sum of benefit proportions allocated must not exceed a total of 100%.</p>
          <p>12. All benefits paid from the retirement fund will be paid in terms of Section 37C of the Pension Funds Act. This section of the Pension Funds Act makes the Trustees of the retirement fund responsible for ensuring that they identify all dependants and nominees and that they then distribute the benefit in an equitable manner. Whilst the Trustees will take note of the information completed on this Beneficiary Nomination Form, they are not legally bound by its contents, but must take the provisions of the Pension Funds Act into consideration.</p>
          <p>13. A benefit paid from a funeral insurance policy that does not form part of the retirement fund is referred to as “unapproved benefits”. This benefit will be paid strictly in accordance with the instructions you provide herein. If you fail to make a nomination, the benefit will be paid to your estate.</p>
          <p>14. Please ensure that you regularly update your Beneficiary Nomination Form as your circumstances change from time to time. This will ensure that the benefit payable to your beneficiaries are paid quicker and in the most efficient manner.</p>
          <p>15. Please complete as much of the information relating to each of the beneficiaries in the beneficiary details page. This will assist in speeding up payment of the benefits due to your beneficiaries.</p>
          <p>16. Please note the following definitions relevant for the completion of the retirement fund component of the Beneficiary Nomination Form:</p>
          <ul className="list-disc ml-5">
            <li>Beneficiary is defined as a nominee of a member or a dependant who is entitled to a benefit, as provided for in the Rules of the Fund.</li>
            <li>Dependant is defined as:</li>
            <ul className="list-decimal ml-5">
              <li>A person in respect of whom the member is legally liable for maintenance;</li>
              <li>A person in respect of whom the member is not legally liable for maintenance, if such person:
                <ul className="list-disc ml-5">
                  <li>Was, in the opinion of the board, upon death of the member in fact dependent on the member for maintenance;</li>
                  <li>Is the spouse of the member;</li>
                  <li>Is a child of the member, including a posthumous child, an adopted child and a child born out of wedlock;</li>
                </ul>
              </li>
              <li>A person in respect of whom the member would have become legally liable for maintenance, had the member not died.</li>
            </ul>
            <li>Nominee is defined as a person who is not a dependant of the member but who has been designated in writing by the member as a nominee, to receive such part of the benefit as is specified by the member.</li>
          </ul>
          <p>Please list your spouse(s) and all children, even if the portion of the benefit to be allocated is zero.</p>
          <p>Complaints and queries: If you have complaints about the way in which we have used your personal information, you can lodge a complaint with the Information Regulator at: tel: 012 406 4818; fax: 086 500 3351; email: inforeg@justice.gov.za; website: https://www.justice.gov.za/inforeg/</p>
          <p>Queries: if you have any queries, please address them in writing to Ensimini Administration Services (Pty) Ltd at info@ensimini.com.</p>
        </div>
      </details>

      <hr className="my-8 border-gray-300" />

      <div>
        <h3 className="text-lg font-semibold">Fund Details</h3>
        <p className="mt-2 text-sm text-gray-700">
          Fund Name: University of the Witwatersrand Retirement Fund
        </p>
      </div>

      <hr className="my-8 border-gray-300" />

      <div>
        <h3 className="text-lg font-semibold">Member Details</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="form-group">
            <label htmlFor="surname">Surname</label>
            <input type="text" id="surname" className="form-input" value="Doe" readOnly />
          </div>
          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input type="text" id="firstName" className="form-input" value="John" readOnly />
          </div>
          <div className="form-group">
            <label htmlFor="idNumber">Identity/Passport Number</label>
            <input type="text" id="idNumber" className="form-input" value="A1234567" readOnly />
          </div>
          <div className="form-group">
            <label htmlFor="dob">Date of Birth</label>
            <input type="text" id="dob" className="form-input" value="01/01/1980" readOnly />
          </div>
          <div className="form-group">
            <label htmlFor="contactPerson">Nominated Contact Person</label>
            <input type="text" id="contactPerson" className="form-input" placeholder="Enter contact person" />
          </div>
          <div className="form-group">
            <label htmlFor="telephone">Telephone Number</label>
            <input type="tel" id="telephone" className="form-input" placeholder="Enter telephone number" />
          </div>
        </div>
      </div>

      <hr className="my-8 border-gray-300" />

      <div>
        <h3 className="text-lg font-semibold">Beneficiaries</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300">
            <thead>
              <tr>
                <th className="py-2 px-4 bg-gray-200 border-b">Surname</th>
                <th className="py-2 px-4 bg-gray-200 border-b">First Name</th>
                <th className="py-2 px-4 bg-gray-200 border-b">Relationship to the Deceased</th>
                <th className="py-2 px-4 bg-gray-200 border-b">Date of Birth (DD/MM/YYYY)</th>
                <th className="py-2 px-4 bg-gray-200 border-b">Allocation (%)</th>
              </tr>
            </thead>
            <tbody>
              {Array.from({ length: 6 }).map((_, index) => (
                <tr key={index}>
                  <td className="border-t py-2 px-4">
                    <input type="text" className="form-input" placeholder="Surname" />
                  </td>
                  <td className="border-t py-2 px-4">
                    <input type="text" className="form-input" placeholder="First Name" />
                  </td>
                  <td className="border-t py-2 px-4">
                    <input type="text" className="form-input" placeholder="Relationship" />
                  </td>
                  <td className="border-t py-2 px-4">
                    <input type="text" className="form-input" placeholder="DD/MM/YYYY" />
                  </td>
                  <td className="border-t py-2 px-4">
                    <input
                      type="number"
                      className="form-input"
                      min="0"
                      max="100"
                      value={allocations[index]}
                      onChange={(e) => handleAllocationChange(e, index)}
                    />
                  </td>
                </tr>
              ))}
              <tr>
                <td className="border-t py-2 px-4 font-semibold" colSpan={4}>
                  Total Allocation (%)
                </td>
                <td className="border-t py-2 px-4 font-semibold">
                  <input type="number" className="form-input" value={calculateTotalAllocation()} readOnly />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <hr className="my-8 border-gray-300" />

      <div>
        <h3 className="text-lg font-semibold">Nominee Details</h3>
        <button
          type="button"
          onClick={() => setShowNomineeDialog(true)}
          className="btn mt-4"
        >
          Add Nominated Person
        </button>
        <div className="overflow-x-auto mt-4">
          <table className="min-w-full bg-white border border-gray-300">
            <thead>
              <tr>
                <th className="py-2 px-4 bg-gray-200 border-b">Title</th>
                <th className="py-2 px-4 bg-gray-200 border-b">Initials</th>
                <th className="py-2 px-4 bg-gray-200 border-b">First Names</th>
                <th className="py-2 px-4 bg-gray-200 border-b">Surname</th>
                <th className="py-2 px-4 bg-gray-200 border-b">ID Number</th>
                <th className="py-2 px-4 bg-gray-200 border-b">Passport Number</th>
                <th className="py-2 px-4 bg-gray-200 border-b">Country</th>
                <th className="py-2 px-4 bg-gray-200 border-b">Telephone</th>
                <th className="py-2 px-4 bg-gray-200 border-b">Address</th>
                <th className="py-2 px-4 bg-gray-200 border-b">Financially Dependent</th>
              </tr>
            </thead>
            <tbody>
              {nominees.map((nominee, index) => (
                <tr key={index}>
                  <td className="border-t py-2 px-4">{nominee.title}</td>
                  <td className="border-t py-2 px-4">{nominee.initials}</td>
                  <td className="border-t py-2 px-4">{nominee.firstNames}</td>
                  <td className="border-t py-2 px-4">{nominee.surname}</td>
                  <td className="border-t py-2 px-4">{nominee.idNumber}</td>
                  <td className="border-t py-2 px-4">{nominee.passportNumber}</td>
                  <td className="border-t py-2 px-4">{nominee.passportCountry}</td>
                  <td className="border-t py-2 px-4">{nominee.telephone}</td>
                  <td className="border-t py-2 px-4">{nominee.address}</td>
                  <td className="border-t py-2 px-4">{nominee.financiallyDependent}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <hr className="my-8 border-gray-300" />

      <div>
        <h3 className="text-lg font-semibold">Recipients</h3>
        <details className="mt-6 bg-gray-100 p-4 rounded-lg shadow">
          <summary className="cursor-pointer text-lg font-semibold">Funeral Benefits Info</summary>
          <div className="mt-2 text-sm text-gray-700">
            <p>A funeral benefit (if applicable) is payable in the event of death as defined in the group insurance policy with your Employer.</p>
            <p>In the event of your death, the Funeral Benefit will be paid to your nominated beneficiary in terms of your signed Nomination of Beneficiary form on record with your Employer.</p>
            <p>If you have not completed a Nomination of Beneficiary form or if you have nominated your Employer, the funeral benefit will be paid to your estate in terms of the policy terms and conditions.</p>
            <p>Beneficiary one is the person you nominate to claim and receive the funeral benefit in the event of a successful claim. If beneficiary one predeceases you, the benefit will become payable to the nominated beneficiary two.</p>
            <p>The nominated beneficiaries must be 18 years or older. In the event that both beneficiaries predecease you the benefit will be paid to your estate.</p>
          </div>
        </details>
        <button
          type="button"
          onClick={() => setShowRecipientDialog(true)}
          className="btn mt-4"
        >
          Add Recipient
        </button>
        <div className="overflow-x-auto mt-4">
          <table className="min-w-full bg-white border border-gray-300">
            <thead>
              <tr>
                <th className="py-2 px-4 bg-gray-200 border-b">Surname</th>
                <th className="py-2 px-4 bg-gray-200 border-b">First Name</th>
                <th className="py-2 px-4 bg-gray-200 border-b">Relationship to Deceased</th>
                <th className="py-2 px-4 bg-gray-200 border-b">Date of Birth (DD/MM/YYYY)</th>
              </tr>
            </thead>
            <tbody>
              {recipients.map((recipient, index) => (
                <tr key={index}>
                  <td className="border-t py-2 px-4">{recipient.surname}</td>
                  <td className="border-t py-2 px-4">{recipient.firstName}</td>
                  <td className="border-t py-2 px-4">{recipient.relationship}</td>
                  <td className="border-t py-2 px-4">{recipient.dob}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {showNomineeDialog && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-3xl">
            <h3 className="text-lg font-semibold mb-4">Add Nominated Person</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="form-group">
                <label htmlFor="title">Title</label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  className="form-input"
                  value={nomineeData.title}
                  onChange={handleNomineeChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="initials">Initials</label>
                <input
                  type="text"
                  id="initials"
                  name="initials"
                  className="form-input"
                  value={nomineeData.initials}
                  onChange={handleNomineeChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="firstNames">First Names</label>
                <input
                  type="text"
                  id="firstNames"
                  name="firstNames"
                  className="form-input"
                  value={nomineeData.firstNames}
                  onChange={handleNomineeChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="surname">Surname</label>
                <input
                  type="text"
                  id="surname"
                  name="surname"
                  className="form-input"
                  value={nomineeData.surname}
                  onChange={handleNomineeChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="idNumber">RSA Identity Number</label>
                <input
                  type="text"
                  id="idNumber"
                  name="idNumber"
                  className="form-input"
                  value={nomineeData.idNumber}
                  onChange={handleNomineeChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="passportNumber">Passport Number</label>
                <input
                  type="text"
                  id="passportNumber"
                  name="passportNumber"
                  className="form-input"
                  value={nomineeData.passportNumber}
                  onChange={handleNomineeChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="passportCountry">Passport Country of Origin</label>
                <input
                  type="text"
                  id="passportCountry"
                  name="passportCountry"
                  className="form-input"
                  value={nomineeData.passportCountry}
                  onChange={handleNomineeChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="telephone">Telephone Number</label>
                <input
                  type="tel"
                  id="telephone"
                  name="telephone"
                  className="form-input"
                  value={nomineeData.telephone}
                  onChange={handleNomineeChange}
                />
              </div>
              <div className="form-group md:col-span-2">
                <label htmlFor="address">Residential Address</label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  className="form-input"
                  value={nomineeData.address}
                  onChange={handleNomineeChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="financiallyDependent">Financially Dependent on Deceased</label>
                <select
                  id="financiallyDependent"
                  name="financiallyDependent"
                  className="form-input"
                  value={nomineeData.financiallyDependent}
                  onChange={handleNomineeChange}
                >
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </div>
            </div>
            <div className="flex justify-end mt-4">
              <button
                type="button"
                onClick={addNominee}
                className="btn"
              >
                Add Nominee
              </button>
              <button
                type="button"
                onClick={() => setShowNomineeDialog(false)}
                className="btn ml-4"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {showRecipientDialog && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
            <h3 className="text-lg font-semibold mb-4">Add Recipient</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="form-group">
                <label htmlFor="surname">Surname</label>
                <input
                  type="text"
                  id="surname"
                  name="surname"
                  className="form-input"
                  value={recipientData.surname}
                  onChange={handleRecipientChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  className="form-input"
                  value={recipientData.firstName}
                  onChange={handleRecipientChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="relationship">Relationship to Deceased</label>
                <input
                  type="text"
                  id="relationship"
                  name="relationship"
                  className="form-input"
                  value={recipientData.relationship}
                  onChange={handleRecipientChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="dob">Date of Birth (DD/MM/YYYY)</label>
                <input
                  type="text"
                  id="dob"
                  name="dob"
                  className="form-input"
                  value={recipientData.dob}
                  onChange={handleRecipientChange}
                />
              </div>
            </div>
            <div className="flex justify-end mt-4">
              <button
                type="button"
                onClick={addRecipient}
                className="btn"
              >
                Add Recipient
              </button>
              <button
                type="button"
                onClick={() => setShowRecipientDialog(false)}
                className="btn ml-4"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      <hr className="my-8 border-gray-300" />

      <div>
        <h3 className="text-lg font-semibold">Declaration by Member</h3>
        <p className="mt-4 text-sm text-gray-700">
          I agree that:
        </p>
        <ul className="list-disc ml-5 mt-2 text-sm text-gray-700">
          <li>This Beneficiary Nomination Form cancels all previous Beneficiary Nomination Forms in respect of the retirement fund and/or unapproved group life or funeral assurance policy I belong to by virtue of my employment with my employer listed above.</li>
          <li>To the best of my knowledge, the information supplied herein is true and correct.</li>
          <li>It is my responsibility to ensure that the retirement fund and my employer has up to date contact information for my beneficiaries.</li>
          <li>The payment of any benefit shall be subject to the conditions of relevant prevailing legislation and the rules and policies applicable to the retirement fund and / or group life and/or funeral insurance policies in terms of which the benefits are payable.</li>
        </ul>
        <p className="mt-4 text-sm text-gray-700">
          I consent to the fund and its administrator processing:
        </p>
        <ul className="list-disc ml-5 mt-2 text-sm text-gray-700">
          <li>any personal information for the purposes set out above about my minor children; and</li>
          <li>any special personal information (see above) provided by me for the purposes set out above.</li>
        </ul>
        <div className="mt-6">
          <div className="flex items-center">
            <input type="checkbox" id="signed" className="form-checkbox h-5 w-5 text-green-600" />
            <label htmlFor="signed" className="ml-2 text-sm text-gray-700">Signed at</label>
            <input type="text" className="form-input ml-2" placeholder="Location" />
            <label className="ml-2 text-sm text-gray-700">on this</label>
            <input type="text" className="form-input ml-2" placeholder="Day" />
            <label className="ml-2 text-sm text-gray-700">day of</label>
            <input type="text" className="form-input ml-2" placeholder="Month" />
            <label className="ml-2 text-sm text-gray-700">20</label>
            <input type="text" className="form-input ml-2" placeholder="Year" />
          </div>
          <div className="mt-6">
            <label htmlFor="signature" className="text-sm text-gray-700">Employee's Signature:</label>
            <input type="text" id="signature" className="form-input mt-2" placeholder="Signature" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nomination;
