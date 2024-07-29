import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer 
      className="bg-black text-white py-3 bg-cover bg-center relative mt-[88px]"
      style={{ backgroundImage: "url('src/assets/footerBg.png')" }}
    >
      {/* Overlay to ensure text visibility */}
      <div className="absolute inset-0 bg-black opacity-50"></div>
      
      {/* Content */}
      <div className="container mx-auto text-center relative z-10">
        <p className="text-sm">
          Formed with <span className="text-red-500">❤</span> and dedication!
        </p>
      </div>
    </footer>
  );
};

export default Footer;