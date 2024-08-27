import React from 'react';
import icon1 from '@/assets/icon1.webp'
import icon2 from '@/assets/icon2.webp'
import icon3 from '@/assets/icon3.webp'
import icon4 from '@/assets/icon4.webp'
import icon5 from '@/assets/icon5.webp'
import spiralIcon from '@/assets/iconSpiral.webp'
import profile from '@/assets/profile.webp'

// Define the type for feature data
type Feature = {
  imageUrl: string;
  text: string;
};

// Array of feature objects
const features: Feature[] = [
  {
    imageUrl: icon1, // Replace with the actual path to your image
    text: 'Experienced Designer',
  },
  {
    imageUrl: icon2, // Replace with the actual path to your image
    text: 'No contracts',
  },
  {
    imageUrl: icon3, // Replace with the actual path to your image
    text: '2+ Updates per week',
  },
  {
    imageUrl: icon4, // Replace with the actual path to your image
    text: 'Cancel anytime',
  },
  {
    imageUrl: icon5, // Replace with the actual path to your image
    text: 'Private Slack Channel',
  },
];

const handleButtonClick = () =>{
  window.open('https://cal.com/pureform/20min','_blank') 
}
// PricingCard Component
 /*margin bottom to be removed when testemonial is unhidden */
const PricingCard: React.FC = () => {
  return (
    <div className="flex flex-col items-center mt-[64px] md:mt-[96px] px-4 ">
      {/* Header Section */}
      <div className="text-center mb-8 lg:w-[612px]">
        <h2 className=" font-bold text-black">Simplified pricing 
        <span className='text-gray-400'> No contracts or hidden surprises.</span></h2>
      </div>

      {/* Pricing Card */}
      <div className="max-w-lg bg-white border-4 border-[#9f9e9e] rounded-lg  overflow-hidden">
        {/* Card Header */}
        <div className="border-b border-gray-400 p-[16px] pb-[10px] sm:p-[24px] sm:pb-[14px]  flex justify-between items-center">
            <div className='flex gap-2'>
            <img
                src={spiralIcon}
                alt="icon"
                className="h-[16px] w-[16px] md:h-[24px] md:w-[24px]"
              />
              <h5 className=" font-semibold">Design with Pureform</h5>
              
            </div>
            <h5 className="">● 3 spots left</h5>
        </div>

        {/* Card Body */}
        <div className="p-[16px] sm:p-[24px]">
          <h5 className="">
                Ideal for launching MVPs, elevating products, or maintaining design excellence
          </h5>
          {/* Action Buttons */}
          <div className="mt-[24px] flex items-center justify-left gap-[24px]">
            <button className="text-[12px] md:text-[18px] flex items-center bg-[#F2F2F2] hover:bg-black hover:text-gray-100 text-gray-800 font-normal p-[3px] md:p-[5px] pr-[16px] md:pr-[20px] rounded-full transition duration-200 "
                    onClick={handleButtonClick}
            >
              <img
                src={profile}
                alt="User"
                className="w-[28px] h-[28px] sm:w-[40px] sm:h-[40px] rounded-full mr-2"
              />
              Schedule an intro
            </button>
            <h5 className="text-[#131415]/40 font-normal items-center transition duration-200">
              Cancel anytime
            </h5>
          </div>
        </div>

        {/* Features List */}
        <div className="rounded-[4px] bg-[#F2F2F2] p-[16px] sm:p-[24px] grid grid-cols-2 gap-y-[16px] sm:gap-y-[24px]">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center space-x-2 ]">
              <img
                src={feature.imageUrl}
                alt={`Feature ${index + 1}`}
                className="h-[14px] w-[14px] md:h-[24px] md:w-[24px] "
              />
              <h5 className=" primary-100">{feature.text}</h5>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
