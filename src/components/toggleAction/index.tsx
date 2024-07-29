import React from 'react';
import ToggleButton from '@/components/toggleButton/button'; // Ensure this path is correct

const YourComponent: React.FC = () => {
  // Define the options for the toggle button
  const options = [
    { id: 'offer', label: 'What we offer' },
    { id: 'works', label: 'Our works' },
  ];

  // Define the onChange handler
  const handleToggleChange = (selectedId: string) => {
    console.log('Selected option:', selectedId);
    // Add your logic here to handle the change
  };

  return (
    <div>
      <ToggleButton
        options={options}
        onToggle={handleToggleChange}
        activeOption="offer" // This prop is optional
      />
    </div>
  );
};

export default YourComponent;