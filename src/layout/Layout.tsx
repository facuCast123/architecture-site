import { Outlet } from "react-router-dom";

import Navbar from "./Navbar";

const Layout = () => {
  return (
    <div className="max-w-[2000px] mx-auto">
      <header>
        <Navbar />
      </header>

      <main className="px-48">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
