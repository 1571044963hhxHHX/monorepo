import React from 'react';

interface HButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

export const HButton: React.FC<HButtonProps> = ({ children, onClick }) => {
  return (
    <button 
      onClick={onClick}
      style={{
        padding: '10px 20px',
        backgroundColor: '#3b82f6',
        color: 'white',
        border: 'none',
        borderRadius: '6px',
        cursor: 'pointer',
        margin: '5px'
      }}
    >
      {children}
    </button>
  );
}; 