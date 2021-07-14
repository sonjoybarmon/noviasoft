import React from "react";
import { Helmet } from "react-helmet";
import CustomFooter from "./Footer/Footer";
import CustomMenu from "./Menu/Menu";

const Layout = ({ children, title }) => {
  return (
    <div>
      <CustomMenu />
      <Helmet>
        <title>{title}</title>
      </Helmet>
      {children}
      <CustomFooter />
    </div>
  );
};

export default Layout;
