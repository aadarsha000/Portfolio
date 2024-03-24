"use client";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
    if (open) {
      document.body.style.overflow = "auto";
    } else {
      document.body.style.overflow = "hidden";
    }
  };
  return (
    <div className="mt-[40px]">
      <div className="hidden items-center justify-between rounded-lg border border-[#2b2b2b] bg-[#2b2b2b] px-[16px] py-[24px] md:flex">
        <div>
          <a className="text-[32px] font-[600] text-[#fff]" href="">
            Aadarsha<span className="text-[#9747ff]">K</span>
          </a>
        </div>
        <ul className="flex">
          <li className="mr-[40px]">
            <a
              className="text-[18px] font-[500] text-[#fff] hover:text-[#9747ff]"
              href=""
            >
              Home
            </a>
          </li>
          <li className="mr-[40px]">
            <a
              className="text-[18px] font-[500] text-[#fff] hover:text-[#9747ff]"
              href=""
            >
              About
            </a>
          </li>
          <li className="mr-[40px]">
            <a
              className="text-[18px] font-[500] text-[#fff] hover:text-[#9747ff]"
              href=""
            >
              Blog
            </a>
          </li>
          <li>
            <a
              className="text-[18px] font-[500] text-[#fff] hover:text-[#9747ff]"
              href=""
            >
              Contact
            </a>
          </li>
        </ul>
        <a
          className="rounded-full bg-[#9747ff] px-[24px] py-[16px] text-[16px] font-[500] text-[#fff]"
          href=""
        >
          Let&apos;s Talk
        </a>
      </div>
      {/* mobile navbar */}
      <div className="flex items-center justify-between rounded-lg border bg-[#2b2b2b] px-[16px] py-[24px] border-[#2b2b2b] md:hidden">
        <div onClick={handleClick} className="h-full cursor-pointer px-[10px]">
          <div className="flex h-[24px] w-[34px] flex-col justify-between">
            <div className="h-[2px] w-full bg-white" />
            <div className="h-[2px] w-full bg-white" />
            <div className="h-[2px] w-full bg-white" />
          </div>
        </div>
        <a
          className="rounded-full bg-[#9747ff] px-[24px] py-[16px] text-[16px] font-[500] text-[#fff]"
          href=""
        >
          Let&apos;s Talk
        </a>
      </div>
      {/* overlay */}
      <div
        onClick={handleClick}
        className={`fixed left-0 top-0 h-[100vh] w-full bg-black z-10 opacity-50 ${
          open ? "block" : "hidden"
        }`}
      />
      {/* navitem */}
      <div
        className={`fixed left-0 top-0 h-[100vh] w-[250px] z-10 bg-[#2b2b2b] text-center ${
          open ? "block" : "hidden"
        }`}
      >
        <div className="mt-[32px]">
          <a className="text-[32px] font-[600] text-[#fff]" href="">
            Aadarsha<span className="text-[#9747ff]">K</span>
          </a>
        </div>
        <ul className="flex h-[80%] flex-col justify-around">
          <li className="hover:text-[#9747ff]">
            <a
              className="text-[18px] font-[500] text-[#fff] hover:text-[#9747ff]"
              href=""
            >
              Home
            </a>
          </li>
          <li className="hover:text-[#9747ff]">
            <a
              className="text-[18px] font-[500] text-[#fff] hover:text-[#9747ff]"
              href=""
            >
              About
            </a>
          </li>
          <li className="hover:text-[#9747ff]">
            <a
              className="text-[18px] font-[500] text-[#fff] hover:text-[#9747ff]"
              href=""
            >
              Blog
            </a>
          </li>
          <li className="hover:text-[#9747ff]">
            <a
              className="text-[18px] font-[500] text-[#fff] hover:text-[#9747ff]"
              href=""
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
