import Logo from "../../../public/images/logo.png";
import Image from "next/image";

const NavBar = () => {
  return (
    <nav className="navbar flex items-center justify-between px-8">
      <div className="navbar__logo-container w-36">
        <Image src={Logo} className="navbar__logo w-full" alt='organization logo'/>
      </div>
      <ul data-show-menu='false' className="navbar__links navbar__primary-navigation gap-6 flex flex-col md:flex-row h-auto">
        <li className="navbar__link capitalize">Home</li>
        <li className="navbar__link capitalize">Search</li>
        <li className="navbar__link capitalize">About Us</li>
        <li className="navbar__link capitalize">Contact</li>
        <li className="navbar__link capitalize">Blog</li>
      </ul>
      <button className="navbar__signup-btn">
        <span className="lowercase">sign up</span>
      </button>
    </nav>
  );
};

export default NavBar;
