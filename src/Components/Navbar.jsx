import React, { useState } from "react";

import pic2 from "../../public/Images/Pic2.jpg";
import { MdMenuOpen } from "react-icons/md";
import { IoCloseCircleOutline } from "react-icons/io5";

import { Link } from "react-scroll";

export default function Navbar() {
  const [menu, setMenu] = useState(false);
  const navItems = [
    {
      id: 1,
      text: "Home",
    },
    {
      id: 2,
      text: "About",
    },
    {
      id: 3,
      text: "Works",
    },
    {
      id: 4,
      text: "Language Known",
    },
    {
      id: 5,
      text: "Contact",
    },
  ];

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto px-4 h-16 md:px-20 shadow-md font-bold fixed top-0 left-0 right-0 z-50 bg-white ">
        <div className="flex justify-around items-center h-16">
          <div className="flex space-x-2">
            <img src={pic2} className="h-14 w-14 rounded-full" alt="My Image" />
            <div>
              <h1 className="font-semibold text-xl cursor-pointer">
                Rupa<span className="text-green-500 text-2xl">m</span>
              </h1>
              <p className="text-sm">Web Developer</p>
            </div>
          </div>
          {/* Desktop NavBar */}
          <div>
            <ul className="hidden md:flex space-x-8 cursor-pointer">
              {navItems.map(({ id, text }) => (
                <li key={id}>
                  <Link to={text} smooth={true} duration={500} offset={-70} activeClass="active">
                  {text}
                  </Link>
                  </li>

              ))}
            </ul>
            <div
              onClick={() => {
                setMenu(!menu);
              }}
              className="md:hidden"
            >
              {menu ? (
                <IoCloseCircleOutline size={25} />
              ) : (
                < MdMenuOpen size={25}/>
              )}
            </div>
          </div>
        </div>
        {/* Mobile NavBar */}
        {menu && (
          <div className="bg-white">
            <ul className="md:hidden flex flex-col h-screen items-center justify-center space-y-4 cursor-pointer">
              {navItems.map(({ id, text }) => (
                <li key={id}><Link onClick={() => {
                  setMenu(!menu);
                }}
                to={text} smooth={true} duration={500} offset={-70} activeClass="active">
                {text} 
                </Link></li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
}
