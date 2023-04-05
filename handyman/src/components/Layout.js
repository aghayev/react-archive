import Header from "./Header";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <Header />
         <Navbar />
        <div className="content">
          <Outlet />
        </div>
    </div>
  );
};

export default Layout;
