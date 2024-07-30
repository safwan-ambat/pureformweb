import React from 'react';

// Define the type for feature data
type Feature = {
  imageUrl: string;
  text: string;
};

// Array of feature objects
const features: Feature[] = [
  {
    imageUrl: '/path/to/image1.png', // Replace with the actual path to your image
    text: 'Experienced Designer',
  },
  {
    imageUrl: '/path/to/image2.png', // Replace with the actual path to your image
    text: 'No contracts',
  },
  {
    imageUrl: '/path/to/image3.png', // Replace with the actual path to your image
    text: '2+ Updates per week',
  },
  {
    imageUrl: '/path/to/image4.png', // Replace with the actual path to your image
    text: 'Cancel anytime',
  },
  {
    imageUrl: '/path/to/image5.png', // Replace with the actual path to your image
    text: 'Private Slack Channel',
  },
];

// PricingCard Component
const PricingCard: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center py-12 px-4">
      {/* Header Section */}
      <div className="text-center mb-8 lg:w-[612px]">
        <h2 className=" font-bold text-black">Simplified pricing 
        <span className='text-gray-400'> No contracts or hidden surprises.</span></h2>
      </div>

      {/* Pricing Card */}
      <div className="max-w-md w-full bg-white border-4 border-gray-400 rounded-lg  overflow-hidden">
        {/* Card Header */}
        <div className="border-b border-gray-400 p-4 flex justify-between items-center">
          <div>
            <span className="text-lg font-medium text-gray-400">Design with Pureform</span>
            <span className="text-lg text-gray-500"> $3000/mo</span>
          </div>
          <span className="text-sm text-gray-600">● 3 spots left</span>
        </div>

        {/* Card Body */}
        <div className="p-4">
          <p className="text-gray-700 text-sm">
            Perfect if you're looking to build an MVP, improve your product or need ongoing design support.
          </p>
          {/* Action Buttons */}
          <div className="mt-4 flex items-center justify-left gap-[24px]">
            <button className="flex items-center bg-gray-200 hover:bg-gray-200 text-gray-800 font-medium py-2 px-4 rounded-full transition duration-200">
              <img
                src="https://via.placeholder.com/24"
                alt="User"
                className="w-6 h-6 rounded-full mr-2"
              />
              Schedule an intro
            </button>
            <button className="text-gray-400 hover:text-gray-700 font-medium items-center transition duration-200">
              Cancel anytime
            </button>
          </div>
        </div>

        {/* Features List */}
        <div className="border-t border-gray-200 p-4 grid grid-cols-2 gap-y-2">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center space-x-2">
              <img
                src={feature.imageUrl}
                alt={`Feature ${index + 1}`}
                className="h-6 w-6"
              />
              <span className="text-sm text-gray-700">{feature.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
