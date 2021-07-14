import React from "react";
import "./Menu.scss";
import logo from "../../../images/logo.png";
import LanguageSelector from "../../Common/LanguageSector";
import CountrySelector from "../../Common/CountySelector";
import { Container } from "@material-ui/core";

const CustomMenu = () => {
  return (
    <div className="Menu__wrapper">
      <Container>
        <div className="menu__list">
          <div>
            <img src={logo} alt="logo" loading="lazy" />
          </div>
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
          <div className="selector__wrapper">
            <div style={{ marginRight: "5px" }}>
              <CountrySelector />
            </div>
            <LanguageSelector />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CustomMenu;
