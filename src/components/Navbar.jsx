import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { Link } from "react-scroll";

export const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleClick = () => setNav(!nav);

  return (
    <>
      <div className="fixed w-full h-[80px] flex justify-between items-center px-2 bg-[#0a192f] text-gray-400">
        {/* Logo or NS Symbol (Aligned to the Left) */}
        <div>
          <p className="text-pink-600 font-bold text-3xl border outline border-pink-500 cursor-pointer mx-6 my-6">
            <Link to="home" smooth={true} duration={500}>
              NS
            </Link>
          </p>
        </div>

        {/* Desktop Menu (Centered) */}
        <ul className="hidden md:flex justify-center flex-1">
          {["home", "about", "skills", "work"].map((item) => (
            <li
              key={item}
              className="text-2xl mx-4 hover:text-white transition duration-300"
            >
              <Link to={item} smooth={true} duration={500}>
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Link>
            </li>
          ))}
        </ul>

        {/* Hamburger Menu (Aligned to the Right) */}
        <button
          onClick={handleClick}
          className="md:hidden z-10"
          aria-label="Toggle Menu"
        >
          {!nav ? <FaBars size={30} /> : <FaTimes size={30} />}
        </button>

        {/* Mobile Menu (Full Screen) */}
        <ul
          className={
            !nav
              ? "hidden"
              : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
          }
        >
          {["home", "about", "skills", "work"].map((item) => (
            <li
              key={item}
              className="text-3xl py-3 hover:text-pink-600 transition duration-300"
            >
              <Link
                onClick={handleClick}
                to={item}
                smooth={true}
                duration={500}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Link>
            </li>
          ))}
        </ul>

        {/* Social Icons (Fixed on the Left) */}
        <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
          <ul>
            {[
              {
                icon: <FaLinkedin size={30} />,
                color: "bg-blue-500",
                href: "https://www.linkedin.com/in/nikesh-man-shrestha-28a119268/",
                label: "LinkedIn",
              },
              {
                icon: <FaGithub size={30} />,
                color: "bg-gray-700",
                href: "https://github.com/NikeshMan16",
                label: "Github",
              },
              {
                icon: <HiOutlineMail size={30} />,
                color: "bg-orange-600",
                href: "mailto:nikeshmanshrestha@gmail.com",
                label: "Mail",
              },
              {
                icon: <BsFillPersonLinesFill size={30} />,
                color: "bg-green-800",
                href: "/CV-NikeshManShrestha.pdf",
                label: "Resume",
                download: true,
              },
            ].map((social, index) => (
              <li
                key={index}
                className={`nav-link w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[2px] duration-300 ${social.color} border rounded-sm`}
              >
                <a
                  className="flex justify-between items-center w-full text-gray-300"
                  href={social.href}
                  target={social.download ? "_self" : "_blank"}
                  download={social.download ? "CV-NikeshManShrestha.pdf" : undefined}
                  rel="noopener noreferrer"
                >
                  {social.label} {social.icon}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};
