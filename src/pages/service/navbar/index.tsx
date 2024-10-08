
import Logo from "@/assets/logo.webp";

const Navbar: React.FC = () => {
  return (
    <nav className="flex justify-center mt-[28px] bg-white w-[130px] sm:w-[180px] mx-auto  ">
      <div ><img src={Logo} alt="Logo" /></div>
    </nav>
  );
};

export default Navbar;

