
import Logo from "@/assets/logo.webp";

const Navbar: React.FC = () => {
  return (
    <nav className="w-full flex justify-center mt-[28px] bg-white ">
      <div ><img src={Logo} alt="Logo" /></div>
    </nav>
  );
};

export default Navbar;

