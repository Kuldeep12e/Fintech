import { useState } from "react";
import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
  const [active, setActive] = useState("Payment");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex py-3 px-4 md:px-8 justify-between items-center navbar">

      <img
        src={logo}
        alt="fintech"
        className="w-[130px] sm:w-[150px] object-contain"
      />

     
      <ul className="hidden md:flex flex-1 justify-center items-center gap-10">
        {navLinks.map((nav) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${
              active === nav.title ? "text-secondary" : "text-gray-700"
            }`}
            onClick={() => setActive(nav.title)}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

     
      <div className="hidden md:flex items-center gap-4">
        <button className="font-poppins text-[16px] font-medium text-secondary">
          Login
        </button>
        <button className="font-poppins text-[16px] font-medium bg-secondary text-white px-5 py-2 rounded-lg hover:opacity-90 transition">
          Sign up
        </button>
      </div>

     
      <div className="flex md:hidden items-center gap-4">

      
        <button className="font-poppins text-[14px] font-medium text-secondary border border-secondary px-3 py-1 rounded-md">
          Login
        </button>

      
        <img
        src={toggle ? close : menu}
        alt="menu"
        className="w-[28px] h-[28px] object-contain cursor-pointer invert z-30"
        onClick={() => setToggle(!toggle)}
      />

      </div>

     
      <div
        className={`${
          toggle ? "flex" : "hidden"
        } flex-col p-6  shadow-xl absolute top-14 bg-slate-600 right-4 w-[220px] rounded-xl z-20`}
      >
        <ul className="flex flex-col gap-4">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`text-[16px] cursor-pointer font-medium ${
                active === nav.title ? "text-secondary" : "text-white"
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
      </div>
    </nav>
  );
};

export default Navbar;
