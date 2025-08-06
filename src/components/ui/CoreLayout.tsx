import { Outlet } from "react-router";
import Footer from "../sections/Footer";
import Navbar from "../sections/Navbar";

const CoreLayout = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default CoreLayout;
