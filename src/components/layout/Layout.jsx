import { Outlet } from "react-router-dom";
import Navigation from "../navBar/Navigation";
import Footer from "../footer/Footer";

const Layout = () => {
  return (
    <>
        <Navigation />
        <Outlet />
        <Footer />
    </>
  )
}
export default Layout