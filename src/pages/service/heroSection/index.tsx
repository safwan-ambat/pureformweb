import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="text-center px-4 sm:px-6 md:px-12 lg:px-24 xl:px-[356px] mt-8 sm:mt-12 md:mt-[56px]">
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-bold my-0 px-2 sm:px-4 md:px-8 lg:px-[100px]">
        Design Partner for fast shipping teams
      </h1>
      <p className="text-base sm:text-lg md:text-[18px] text-black mt-4 sm:mt-6 md:mt-[32px] max-w-3xl mx-auto">
        We work with founders to build their Brand, Product, website, and Pitch Deck using a modular approach. 
        From the first idea to scaling up to creating a lasting legacy, we tailor our solutions to fit your needs. 
        Choose your timeline 1 month, 2 months, 3 months, and let's create something remarkable together, 
        one building block at a time.
      </p>
    </section>
  );
};

export default HeroSection;