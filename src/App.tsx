import React, { useState } from 'react';
import Navbar from '@/pages/service/navbar';
import ToggleButton from '@/components/toggleButton/button';
import Service from '@/pages/service';
import Works from '@/pages/works';
import Footer from '@/pages/service/footer';
import Button from '@/components/button';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('offer');

  const toggleOptions = [
    { id: 'offer', label: 'What we offer' },
    { id: 'works', label: 'Our works' },
  ];

  const handleToggle = (selectedId: string) => {
    setActiveSection(selectedId);
  };

  const handleButtonClick = () =>{
    window.open('https://cal.com/pureform/20min','_blank') 
  }

  return (
    <main className={`flex flex-col min-h-screen bg-white w-full font-geist relative`}>
      <Navbar />
      <main className="flex-grow">
        <ToggleButton
          options={toggleOptions}
          activeOption={activeSection}
          onToggle={handleToggle}
        />
        {activeSection === 'offer' ? <Service /> : <Works />}
      </main>
 
      
      {/* Responsive Fixed Button at bottom right */}
      <div className="fixed bottom-[60px] sm:top-[22px] sm:right-[56px] self-center sm:self-start -rotate-2">
        <Button 
          text="Book your kickoff"
          onClick={handleButtonClick}
          className="StyledBtn py-[16px] px-[14px]  sm:py-[20px] sm:px-[20px] font-semibold text-[14px] sm:text-[16px] "
        />
      </div>
      <Footer />
    </main>
  );
};

export default App;