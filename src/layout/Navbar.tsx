import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex items-center px-32 py-4">
      <img
        className="mr-auto w-28"
        src="/assets/images/nav-logo.png"
        alt="Logo"
      />

      <ul className="flex items-center mr-[10%] space-x-10 text-xl uppercase tracking-widest">
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
            to="/gallery"
          >
            <span className="absolute top-0 left-0 w-[100%] h-[0.05em] bg-black scale-0 origin-center duration-300 group-hover:scale-100"></span>
            Gallery
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

        <li>Certifications</li>

        <li>Contacts</li>
      </ul>
    </nav>
  );
};

export default Navbar;
