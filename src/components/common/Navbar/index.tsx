import { TfiMenu } from "react-icons/tfi";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <div className="w-full bg-white font-Poppins py-5 px-5">
        <div className="w-full md:max-w-[1200px] mx-auto flex flex-row justify-between items-center">
          <Link to="/">
            <img src="/cinf_icon.png" className="h-12" alt="cinf_icon" />{" "}
          </Link>
          <div className="gap-8 items-center hidden md:flex">
            <Link to="#" className="text-black text-xl">
              TES
            </Link>
            <Link to="#" className="text-black text-xl">
              Gallery
            </Link>
            <Link to="#" className="text-black text-xl">
              Our Impact
            </Link>
            <Link to="#" className="text-black text-xl">
              Contact Us
            </Link>
          </div>
          <TfiMenu
            className="md:hidden cursor-pointe text-2xl text-primary-blue"
            onClick={() => setNav(true)}
          />
        </div>
        <div
          className={
            nav
              ? "w-full h-full z-50 fixed left-0 top-0 bg-gray-900/70 text-white md:hidden backdrop-blur"
              : ""
          }
        >
          <div
            className={
              nav
                ? "fixed w-full text-left bg-background bg-[#fff] left-0 top-0 bottom-0 text-primary-blue h-full px-5 py-10 ease-in duration-500"
                : "fixed p-10 w-full left-[-100%] z-50 top-0 duration-1000 h-full ease-in"
            }
          >
            <div className="w-full flex justify-between items-center mb-[5rem]">
              <div className="cursor-pointer p-0" onClick={() => setNav(false)}>
                <Link to="/">
                  <img src="/ebs_logo.png" alt="ebs_logo" />
                </Link>
              </div>
              <div className="cursor-pointer" onClick={() => setNav(false)}>
                <FaTimes size={30} />
              </div>
            </div>
            <div className="flex flex-col gap-8 text-primary-blue justify-between h-fit mb-[50px]">
              <Link to="#" className="text-black text-xl">
                TES
              </Link>
              <Link to="#" className="text-black text-xl">
                Gallery
              </Link>
              <Link to="#" className="text-black text-xl">
                Our Impact
              </Link>
              <Link to="#" className="text-black text-xl">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
