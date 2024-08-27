import Image from "next/image";
import React from "react";

const navLinks = [
  {
    text: "Blog",
    href: "/blog",
  },
  {
    text: "Features",
    href: "/features",
  },
  {
    text: "Pricing",
    href: "/pricing",
  },
  {
    text: "Contact",
    href: "/contact",
  },
  {
    text: "Signup",
    href: "/signup",
  },
];

const Navbar = () => {
  return (
    <nav className="lg:px-16 px-6 bg-slate-900 shadow-md flex flex-wrap items-center lg:py-0 py-2">
      <div className="flex-1 flex justify-between items-center">
        <a href="/" className="flex text-lg font-semibold">
          <Image
            src="https://dev.rz-codes.com/static/logo-275e932fd817cc84d99d91f7519a9a22.svg"
            width="50"
            height="50"
            className="p-2"
            alt="Rz Codes Logo"
            quality={100}
          />
          <div className="mt-3 text-blue-600">Rz Codes</div>
        </a>
      </div>
      <label htmlFor="menu-toggle" className="cursor-pointer lg:hidden block">
        <svg
          className="fill-current text-gray-100"
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
        >
          <title>menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
        </svg>
      </label>
      <input className="hidden peer" type="checkbox" id="menu-toggle" />
      <div
        className="h-0 overflow-hidden lg:flex lg:items-center lg:h-full lg:overflow-auto lg:w-auto w-full peer-checked:h-screen trans peer-checked:overflow-auto transition-all duration-200 ease-in-out"
        id="menu"
      >
        <nav>
          <ul className="text-xl text-center items-center gap-x-5 pt-4 md:gap-x-4 lg:text-lg lg:flex lg:pt-0">
            {navLinks.map(({ text, href }) => (
              <li key={text} className="py-2 lg:py-0">
                <a
                  className="text-blue-600 hover:pb-4 hover:border-b-4 hover:border-yellow-400"
                  href={href}
                >
                  {text}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </nav>
  );
};

export default Navbar;
