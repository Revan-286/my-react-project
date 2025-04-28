import React from "react";
import "./Header.css";
import logo from "./Frame 9.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className={"header"}>
      <div className={"logo"}>
        <Link to="/positivus">
         <img className={"logo-one"} src={logo}></img>
        </Link>
       
      </div>
      <div className={"contacts"}>
        <Link to="/about" className={'header-contacts'} href="">About us</Link>
        <Link to="/services" className={'header-contacts'} href="">Services</Link>
        <Link to="/usecases" className={'header-contacts'} href="">Use Cases</Link>
        <Link to="/pricing" className={'header-contacts'} href="">Pricing</Link>
        <Link to="/blog" className={'header-contacts'} href="">Blog</Link>
        <div className={"request"}>
        <p>Request a quote</p>
      </div>
      </div>
      
    </div>
  );
};

export default Header;
