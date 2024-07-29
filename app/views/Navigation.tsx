import React from 'react';
import Link from 'next/link';

const Navigation: React.FC = () => {
  return (
    <nav className="bg-gray-200 p-4 rounded-lg shadow-lg">
      <Link href="/views">
        <span className="text-blue-600 hover:text-blue-800 transition-colors duration-300">View Onboarding Details</span>
      </Link>
    </nav>
  );
};

export default Navigation;
