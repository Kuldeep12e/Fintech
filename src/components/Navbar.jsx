import { useState } from "react";
import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
  const [active, setActive] = useState("Payment");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex py-2 px-2 md:px-8 justify-between items-center navbar">
      
     
      <img
        src={logo}
        alt="fintech"
        className="w-[140px] sm:w-[160px] object-contain"
      />

     
      <ul className="hidden md:flex flex-1 justify-center items-center gap-10">
        {navLinks.map((nav) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${
              active === nav.title ? "text-secondary" : "text-gray-600"
            }`}
            onClick={() => setActive(nav.title)}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

      {/* Desktop Buttons */}
      <div className="hidden md:flex items-center gap-4">
        <button className="font-poppins text-[16px] font-medium text-secondary">
          Login
        </button>
        <button className="font-poppins text-[16px] font-medium bg-secondary text-white px-5 py-2 rounded-lg hover:opacity-90 transition">
          Sign up
        </button>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden flex justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain brightness-0"
          onClick={() => setToggle(!toggle)}
        />

        {/* Mobile Menu */}
        <div
          className={`${
            toggle ? "flex" : "hidden"
          } flex-col p-6 bg-white shadow-xl absolute top-16 right-4 w-[200px] rounded-xl`}
        >
          <ul className="flex flex-col gap-4 mb-4">
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className={`font-poppins text-[16px] cursor-pointer ${
                  active === nav.title ? "text-secondary" : "text-gray-600"
                }`}
                onClick={() => {
                  setActive(nav.title);
                  setToggle(false);
                }}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>

          <button className="w-full font-poppins text-[14px] bg-secondary text-white py-2 rounded-lg hover:opacity-90 transition">
            Login
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
