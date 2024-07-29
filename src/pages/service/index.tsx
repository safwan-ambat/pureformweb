import React from 'react';
import HeroSection from '@/pages/service/heroSection';
import Section01 from '@/pages/service/section01';
import Section02 from '@/pages/service/section02';
import Section03 from '@/pages/service/section03';
import Section04 from '@/pages/service/section04';
import Section05 from '@/pages/service/section05';
import Faq from '@/components/faq';

const Service: React.FC = () => {
  return (
    <div className="flex flex-col  min-h-screen bg-white w">
      <HeroSection />
      <Section01/>
      <Section02/>
      <Section03/>
      <Section04/>
      <Section05/>
      <Faq/>
      
    </div>
  );
};

export default Service;