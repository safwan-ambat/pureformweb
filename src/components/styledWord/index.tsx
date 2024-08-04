// src/components/Styled.tsx

import React from 'react';

interface StyledProps {
  children: React.ReactNode;
  className?: string;
}

const Styled: React.FC<StyledProps> = ({ children, className = '' }) => (
  <span className={`inline-block StyledWord  text-white my-[6px] py-[3px] px-[8px] ${className}`}>
    {children}
  </span>
);

export default Styled;