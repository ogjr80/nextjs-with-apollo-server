import '../globals.css';
import React from 'react';
import Navigation from './Navigation';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 min-h-screen">
        <Navigation />
        <main className="p-6">
          {children}
        </main>
      </body>
    </html>
  );
}
