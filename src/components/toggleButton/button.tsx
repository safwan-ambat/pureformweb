// ToggleButton.tsx
import React from 'react';

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
  return (
    <div className="flex justify-center items-center mt-[88px]">
      <div className="bg-black rounded-full p-0.5  ">
        <div className="relative flex items-center bg-black rounded-full h-[200px] w-[540px] ">
          <div
            className={`absolute h-full rounded-full transition-all duration-300  ${
              activeOption === options[0].id ? 'left-100%' : 'left-1/2 '
            }`}
            style={{
              width: `calc(50% - 0.5px)`,
              background: 'radial-gradient(circle at top left, #ffffff, #d1d1d1)',
            }}
          />
          {options.map((option) => (
            <button
              key={option.id}
              onClick={() => onToggle(option.id)}
              className={`flex-1 h-full text-sm sm:text-base font-medium z-10 transition-colors duration-300 flex items-center justify-center rounded-full ${
                activeOption === option.id ? 'text-black' : 'text-white hover:text-gray-200'
              }`}
              aria-pressed={activeOption === option.id}
              role="tab"
              aria-selected={activeOption === option.id}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ToggleButton;