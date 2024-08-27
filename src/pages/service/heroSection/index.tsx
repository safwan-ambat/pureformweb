import React, { useState, useEffect } from 'react';
import Styled from '@/components/styledWord';
import Button from '@/components/button';

const HeroSection: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50); // Adjust this value as needed
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleButtonClick = () => {
    window.open('https://cal.com/pureform/20min', '_blank');
  };

  return (
    <>
      <section className="flex flex-col items-center justify-center text-center px-[16px] md:px-12 xl:px-[350px] mt-8 sm:mt-12 md:mt-[56px]">
        <h1 className="font-bold my-0 px-2 sm:px-4 md:px-8 lg:px-[100px]">
          <span className='font-georgia italic'>Design Partner</span> for <br/>fast shipping teams
        </h1>
        <div className="flex justify-center w-full mt-4 sm:mt-6 lg:mt-[32px]">
          <p className="text-center md:text-[18px] text-[16px] md:px-[37px] px-[22px] max-w-[784px]">
            We work with founders to build their Brand <Styled>B</Styled> Product <Styled>P</Styled> website <Styled>W</Styled> and<br/>
            Pitch Deck <Styled>PD</Styled> using a modular approach. From the first idea <Styled>0 → 1</Styled> scaling up <Styled>1 → N</Styled> to creating a lasting legacy <Styled>N → XYZ</Styled> we tailor our solutions to fit your needs.
            Choose your timeline 1 month <Styled>\</Styled> 2 months <Styled>\\</Styled> 3 months <Styled>\\\</Styled> and let's
            create something remarkable together, one building block at a time.
          </p>
        </div>
        
        {/* Mobile-only Button with smooth transition and bottom shadow */}
        <div 
          className={`
            sm:hidden 
            w-full
            transition-all duration-300 ease-in-out 
            ${isScrolled
              ? 'fixed bottom-0 z-50 opacity-100   pb-4 '
              : 'relative mt-[40px] opacity-100 '
            }
          `}
        >
          <Button
            text="Book your kickoff"
            onClick={handleButtonClick}
            className="StyledBtn  py-[16px] px-[14px] font-semibold text-[14px]  -rotate-2 w-full max-w-[160px] mx-auto"
          />
        </div>
        {/* <div className="fixed h-[20px] w-full bottom-0 opacity-50 bg-gradient-to-t from-[#898989]  to-transparent z-40"></div> */}
      </section>
    </>
  );
};

export default HeroSection;