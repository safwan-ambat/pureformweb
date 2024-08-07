import React from 'react';
import bgImg from '@/assets/toggleBg.webp';

interface ToggleOption {
  id: string;
  label: string;
}

interface ToggleButtonProps {
  options: ToggleOption[];
  activeOption: string;
  onToggle: (selectedId: string) => void;
}

const ToggleButton: React.FC<ToggleButtonProps> = ({ options, activeOption, onToggle }) => {
  const handleToggle = () => {
    const newActiveId = activeOption === options[0].id ? options[1].id : options[0].id;
    onToggle(newActiveId);
  };

  return (
    <div className="flex justify-center items-center mt-8 sm:mt-12 md:mt-[88px]">
      <div className="bg-black rounded-full p-0.5">
        <button
          onClick={handleToggle}
          className="relative flex items-center bg-black rounded-full h-[104px] sm:h-[104px] md:h-[200px] w-[281px] sm:w-[281px] md:w-[540px] overflow-hidden"
          role="switch"
          aria-checked={activeOption === options[1].id}
        >
          <div
            className="absolute h-full rounded-full transition-all duration-500 ease-in-out"
            style={{
              width: `calc(50% - 0.25px)`,
              backgroundImage: `url(${bgImg})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              transform: `translateX(${activeOption === options[0].id ? '0' : '100%'})`,
            }}
          />
          {options.map((option, index) => (
            <span
              key={option.id}
              className={`flex-1 h-full text-[14px] md:text-[24px] font-semibold z-10 transition-colors duration-300 flex items-center justify-center ${
                activeOption === option.id ? 'text-black' : 'text-white'
              }`}
            >
              {option.label}
            </span>
          ))}
        </button>
      </div>
    </div>
  );
};

export default ToggleButton;