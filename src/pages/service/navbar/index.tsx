
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "@/assets/logo.svg";

const Navbar: React.FC = () => {
  return (
    <nav className="w-full flex justify-center mt-[28px] bg-white ">
      <div ><img src={Logo} alt="Logo" /></div>
    </nav>
  );
};

export default Navbar;

