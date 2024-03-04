import Link from 'next/link';
import React from 'react';

export const metadata = {
  title: "About us",
  description: "description for about us",
};

const AboutLayout = ({ children }) => {
  return (
    <div>
      <nav>
        <ul className="flex gap-6">
          <li><Link href="/about/mission">mission</Link></li>
          <li><Link href="/about/vission">vission</Link></li>
        </ul>
      </nav>      
      {children}
    </div>
  );
};

export default AboutLayout;