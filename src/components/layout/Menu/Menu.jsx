import React from "react";
import "./Menu.scss";
import logo from "../../../images/logo.png";
import LanguageSelector from "../../Common/LanguageSector";
import CountrySelector from "../../Common/CountySelector";
import { Container, Hidden } from "@material-ui/core";
import MenuDrawer from "./MenuDrawer";
import { NavLink } from "react-router-dom";

const CustomMenu = () => {
  const DrawerMenu = (
    <>
      <NavLink activeClassName="LinkActive" className="MenuLink" to="/">
        <pre> - Home</pre>
      </NavLink>
      <NavLink activeClassName="LinkActive" className="MenuLink" to="/products">
        <pre> - Products</pre>
      </NavLink>
      <NavLink activeClassName="LinkActive" className="MenuLink" to="/industry">
        <pre> - Industry</pre>
      </NavLink>
      <NavLink activeClassName="LinkActive" className="MenuLink" to="/service">
        <pre> - Service</pre>
      </NavLink>
      <NavLink activeClassName="LinkActive" className="MenuLink" to="/training">
        <pre> - Training</pre>
      </NavLink>
      <NavLink
        activeClassName="LinkActive"
        className="MenuLink"
        to="/community"
      >
        <pre> - Community</pre>
      </NavLink>
      <NavLink activeClassName="LinkActive" className="MenuLink" to="/carrier">
        <pre> - Carrier</pre>
      </NavLink>
    </>
  );

  return (
    <div className="Menu__wrapper">
      <Container>
        <div className="menu__list">
          <div>
            <img src={logo} alt="logo" loading="lazy" />
          </div>

          <Hidden xlUp smDown>
            <div className="menu_wrapper">
              <ul>
                <li>Products</li>
                <li>Industry</li>
                <li>Service</li>
                <li>Training</li>
                <li>Community</li>
                <li>Carrier</li>
              </ul>
            </div>
          </Hidden>
          <Hidden xlUp smDown>
            <div className="selector__wrapper">
              <div style={{ marginRight: "5px" }}>
                <CountrySelector />
              </div>
              <LanguageSelector />
            </div>
          </Hidden>

          {/* <Hidden smDown lgUp>
            <div className="menu_wrapper">
              <ul>
                <li>Products</li>
                <li>Industry</li>
                <li>Service</li>
                <li>Training</li>
                <li>Community</li>
                <li>Carrier</li>
              </ul>
            </div>
          </Hidden>
          <Hidden smDown lgUp>
            <div className="selector__wrapper">
              <div style={{ marginRight: "5px" }}>
                <CountrySelector />
              </div>
              <LanguageSelector />
            </div>
          </Hidden> */}

          <Hidden mdUp>
            <MenuDrawer>
              <div>{DrawerMenu}</div>
            </MenuDrawer>
          </Hidden>
        </div>
      </Container>
    </div>
  );
};

export default CustomMenu;
