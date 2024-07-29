'use client'; 

import React, { useState } from 'react';
import EditButton from './EditButton';
import { Transition } from '@headlessui/react';

interface ViewComponentProps {
  title: string;
  items: { label: string; value: string }[];
  isAddress?: boolean; // Flag to indicate if it's an address section
}

const ViewComponent: React.FC<ViewComponentProps> = ({ title, items, isAddress = false }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="animate-fadeIn p-4 bg-white rounded-lg shadow-lg mb-4">
      <div className="flex justify-between items-center mb-2 cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
        <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
        <button className="text-gray-600 hover:text-gray-800 transition-colors duration-300">
          {isOpen ? '-' : '+'}
        </button>
      </div>
      <Transition
        show={isOpen}
        enter="transition-all duration-500 ease-in-out"
        enterFrom="transform max-h-0 opacity-0"
        enterTo="transform max-h-full opacity-100"
        leave="transition-all duration-500 ease-in-out"
        leaveFrom="transform max-h-full opacity-100"
        leaveTo="transform max-h-0 opacity-0"
      >
        <div className="overflow-hidden">
          <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md mt-4">
            <thead>
              <tr>
                {isAddress && <th className="py-2 px-4 border-b border-gray-200 bg-gray-50 text-gray-800 text-left">Address Type</th>}
                {items.map((item, index) => (
                  <th key={index} className="py-2 px-4 border-b border-gray-200 bg-gray-50 text-gray-800 text-left">{item.label}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr className="hover:bg-gray-100 transition-colors duration-300">
                {isAddress && <td className="py-2 px-4 border-b border-gray-200">Present Home Address</td>}
                {items.map((item, index) => (
                  <td key={index} className="py-2 px-4 border-b border-gray-200">{item.value}</td>
                ))}
              </tr>
              {isAddress && (
                <tr className="hover:bg-gray-100 transition-colors duration-300">
                  <td className="py-2 px-4 border-b border-gray-200">Postal Address</td>
                  {items.map((item, index) => (
                    <td key={index} className="py-2 px-4 border-b border-gray-200">{item.value}</td>
                  ))}
                </tr>
              )}
            </tbody>
          </table>
          <div className="mt-4 flex justify-end">
            <EditButton />
          </div>
        </div>
      </Transition>
    </div>
  );
};

export default ViewComponent;
