import { useState } from "react";
import { HiMenu } from "react-icons/hi";
import { TbZoomCancel } from "react-icons/tb";

const Navbar = ({ headerHomePageState }) => {
  const [mobileNav, setMobileNav] = useState(false);

  const handleNav = () => {
    setMobileNav(!mobileNav);
  };

  return (
    <header
      className={`${
        headerHomePageState ? "bg-[#333333e2]" : "bg-[#222222]"
      } px-[1rem] py-[0.9rem] flex justify-between items-center md:px-[2rem] w-screen h-[60px] z-10 absolute top-0 right-0`}
    >
      <a href="/" className="text-[21px] font-[600] text-DGold">
        Valley<span className="font-[400] text-white">Kingdom</span>
      </a>
      <nav>
        <ul className="hidden justify-between items-center gap-6 md:flex">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/gallery">Gallery</a>
          </li>
          <li>
            <a href="/newz">News</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Contact Us</a>
          </li>
        </ul>
      </nav>
      <div className="flex cursor-pointer md:hidden" onClick={handleNav}>
        {mobileNav ? (
          <TbZoomCancel className="icon" />
        ) : (
          <HiMenu className="icon" />
        )}
      </div>

      {mobileNav && (
        <nav className="absolute top-16 left-5 bg-black z-10 w-[70%] max-h-screen px-5 py-3 md:hidden rounded-3xl smGoldShadow">
          <ul className="w-full h-full flex flex-col justify-between items-start gap-6">
            <li className="w-full h-[20%] border-b-[1px] flex items-center border-b-DGold">
              <a href="/" className="w-full h-full flex items-center">
                Home
              </a>
            </li>
            <li className="w-full h-[20%] border-b-[1px] flex items-center border-b-DGold">
              <a href="/gallery" className="w-full h-full flex items-center">
                Gallery
              </a>
            </li>
            <li className="w-full h-[20%] border-b-[1px] flex items-center border-b-DGold">
              <a href="/newz" className="w-full h-full flex items-center">
                News
              </a>
            </li>
            <li className="w-full h-[20%] border-b-[1px] flex items-center border-b-DGold">
              <a href="/about" className="w-full h-full flex items-center">
                About
              </a>
            </li>
            <li className="w-full h-[20%]">
              <a href="/contact">Contact Us</a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
