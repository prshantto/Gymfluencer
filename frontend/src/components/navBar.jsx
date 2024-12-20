/* eslint-disable no-unused-vars */
import React from "react";
import { Link as LinkScroll } from "react-scroll";

const NavBar = () => {
  return (
    <>
      <div className=" h-full w-full flex items-center justify-center">
        <div className="bg-[#121312] h-16 w-9/12 rounded-full border border-gray-700 text-gray-600 text-sm font-bold flex justify-between items-center px-5 py-2 gap-1 fixed z-10 top-6">
          <img
            className="h-10 cursor pointer"
            src="https://framerusercontent.com/images/btsz5FjA3AvNFXvmH9iWv1xJd8.svg"
            alt="logo"
          />
          <LinkScroll
            className="hover:text-red-600 cursor-pointer"
            to="home"
            smooth
            duration={500}
          >
            Home
          </LinkScroll>
          <LinkScroll
            className="hover:text-red-600 cursor-pointer"
            to="about"
            smooth
            duration={500}
          >
            About
          </LinkScroll>
          <LinkScroll
            className="hover:text-red-600 cursor-pointer"
            to="services"
            smooth
            duration={500}
          >
            Our Services
          </LinkScroll>
          <LinkScroll
            className="hover:text-red-600 cursor-pointer"
            to="benifits"
            smooth
            duration={500}
          >
            Benifits
          </LinkScroll>
          <LinkScroll
            className="hover:text-red-600 cursor-pointer"
            to="blogs"
            smooth
            duration={500}
          >
            Blogs
          </LinkScroll>
          <LinkScroll
            className="hover:text-red-600 cursor-pointer"
            to="contact"
            smooth
            duration={500}
          >
            Contact
          </LinkScroll>

          <button className="bg-customRed text-white px-5 py-2 rounded-full">
            Join Us
          </button>
        </div>
      </div>
    </>
  );
};

export default NavBar;
