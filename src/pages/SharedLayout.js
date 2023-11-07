import Navbar from "../components/navbar";
import { Outlet } from "react-router";
import Footer from "../components/footer";

const SharedLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};
export default SharedLayout;
