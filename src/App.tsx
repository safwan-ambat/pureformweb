import React, { useState } from 'react';
import Navbar from '@/pages/service/navbar';
import ToggleButton from '@/components/toggleButton/button';
import Service from '@/pages/service';
import Works from '@/pages/works'; // Create this component if it doesn't exist
import Footer from '@/pages/service/footer';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('offer');

  const toggleOptions = [
    { id: 'offer', label: 'What we offer' },
    { id: 'works', label: 'Our works' },
  ];

  const handleToggle = (selectedId: string) => {
    setActiveSection(selectedId);
  };

  return (
    <main className={`flex flex-col min-h-screen bg-white w-full font-geist`} >
      <Navbar />
      <main className="flex-grow">
          <ToggleButton
            options={toggleOptions}
            activeOption={activeSection}
            onToggle={handleToggle}
          />
          {activeSection === 'offer' ? <Service /> : <Works />}
      </main>
      <Footer />
    </main>
  );
};

export default App;