import { Suspense } from "react";
import { Outlet } from "react-router-dom";

import Navbar from "./Navbar";
import Footer from "./Footer";
import Loading from "./Loading";

import ScrollToTop from "../data/ScrollToTop";

const Layout = () => {
  return (
    <div className="max-w-[2000px] mx-auto overflow-hidden">
      <ScrollToTop />

      <header>
        <Navbar />
      </header>

      <main className="md:px-8 lg:px-16 xl:px-24 2xl:px-48 bg-gradient-to-b from-white to-gray-100">
        <Suspense fallback={<Loading />}>
          <Outlet />
        </Suspense>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
