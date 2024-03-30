import { Outlet } from "react-router-dom";

import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div className="max-w-[2000px] mx-auto overflow-hidden">
      <header>
        <Navbar />
      </header>

      <main className="md:px-8 lg:px-16 xl:px-24 2xl:px-48">
        <Outlet />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
