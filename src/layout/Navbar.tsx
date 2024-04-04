import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

import { IoMenuSharp, IoClose } from "react-icons/io5";

const Navbar = () => {
  // Menu toggle logic
  const [displayMenu, setDisplayMenu] = useState(false);

  const toggleMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    setDisplayMenu((prev) => !prev);
  };

  const location = useLocation();

  useEffect(() => {
    setDisplayMenu(false);
  }, [location]);

  return (
    <nav className="relative flex items-center py-4 px-8 lg:px-32 2xl:px-32">
      <img
        className="mr-auto w-20 z-20 2xl:w-28"
        src="/assets/images/nav-logo.png"
        alt="Logo"
      />

      <ul className="hidden sm:flex items-center text-sm uppercase tracking-widest sm:space-x-4 md:text-base 2xl:space-x-10 2xl:text-xl 2xl:mr-[10%]">
        <li>
          <NavLink
            className="relative py-1 group"
            style={({ isActive }) => {
              return isActive
                ? {
                    boxShadow: "inset 0 1px 0 #000, inset 0 -1px 0 #000",
                  }
                : {};
            }}
            to="/"
          >
            <span className="absolute top-0 left-0 w-[100%] h-[0.05em] bg-black scale-0 origin-center duration-300 group-hover:scale-100"></span>
            Main
            <span className="absolute bottom-0 left-0 w-[100%] h-[0.05em] bg-black scale-0 origin-center duration-300 group-hover:scale-100"></span>
          </NavLink>
        </li>

        <li>
          <NavLink
            className="relative py-1 group"
            style={({ isActive }) => {
              return isActive
                ? {
                    boxShadow: "inset 0 1px 0 #000, inset 0 -1px 0 #000",
                  }
                : {};
            }}
            to="/projects"
          >
            <span className="absolute top-0 left-0 w-[100%] h-[0.05em] bg-black scale-0 origin-center duration-300 group-hover:scale-100"></span>
            Projects
            <span className="absolute bottom-0 left-0 w-[100%] h-[0.05em] bg-black scale-0 origin-center duration-300 group-hover:scale-100"></span>
          </NavLink>
        </li>

        <li>
          <NavLink
            className="relative py-1 group"
            style={({ isActive }) => {
              return isActive
                ? {
                    boxShadow: "inset 0 1px 0 #000, inset 0 -1px 0 #000",
                  }
                : {};
            }}
            to="/certifications"
          >
            <span className="absolute top-0 left-0 w-[100%] h-[0.05em] bg-black scale-0 origin-center duration-300 group-hover:scale-100"></span>
            Certifications
            <span className="absolute bottom-0 left-0 w-[100%] h-[0.05em] bg-black scale-0 origin-center duration-300 group-hover:scale-100"></span>
          </NavLink>
        </li>

        <li>
          <NavLink
            className="relative py-1 group"
            style={({ isActive }) => {
              return isActive
                ? {
                    boxShadow: "inset 0 1px 0 #000, inset 0 -1px 0 #000",
                  }
                : {};
            }}
            to="/contacts"
          >
            <span className="absolute top-0 left-0 w-[100%] h-[0.05em] bg-black scale-0 origin-center duration-300 group-hover:scale-100"></span>
            Contacts
            <span className="absolute bottom-0 left-0 w-[100%] h-[0.05em] bg-black scale-0 origin-center duration-300 group-hover:scale-100"></span>
          </NavLink>
        </li>
      </ul>

      <button className="text-5xl sm:hidden" onClick={toggleMenu}>
        {displayMenu ? <IoClose /> : <IoMenuSharp />}
      </button>

      {displayMenu && (
        <div className="absolute w-full top-[80px] left-0 bg-white flex flex-col gap-y-4 px-8 py-4 text-2xl border-b border-black z-10 animate-slide-down md:hidden [&>*]:py-4 [&>*]:border-t">
          <Link to="/">Main</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/certifications">Certifications</Link>
          <Link to="/contacts">Contacts</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
