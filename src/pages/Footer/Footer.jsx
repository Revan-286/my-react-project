import React from "react";
import "./Footer.css";
import PositivusLogo from "./Logo (1).png";
import Linkedin from "./Social icon (2).png";
import Facebook from "./Social icon.png";
import Twitter from "./Social icon (1).png";
import Line from "./Line 17.png";


const Footer = () => {
  return (
    <div className={"footer"}>
      <div className={"footer-one-display"}>

        <div>
          <img className={"positivus"} src={PositivusLogo}></img>
        </div>

        <div className={"footer-one-contacts"}>

          <a className={'footer-contacts'} href="">About us</a>
          <a className={'footer-contacts'} href="">Services</a>
          <a className={'footer-contacts'} href="">Use Cases</a>
          <a className={'footer-contacts'} href="">Pricing</a>
          <a className={'footer-contacts'} href="">Blog</a>

          <div className={"social"}>
            <img className={'linkedin'} src={Linkedin} ></img>
            <img className={'facebook'} src={Facebook} ></img>
            <img className={'twitter'} src={Twitter} ></img>
          </div>

        </div>

      </div>



      <div className={'footer-email-subscribe'}>
        <div className={'information-footer'}>
          <p className={'contact-us'}>Contact us:</p>
          <p className={'email-com email-top'}>Email: info@positivus.com</p>
          <p className={'email-com'}>Phone: 555-567-8901</p>
          <p className={'email-com'}>Address: 1234 Main St <br /> Moonstone City, Stardust State 12345</p>
        </div>


        <div className={'subscribe-and-email'}>
          <div className={'email-div'}>
            <p>Email</p>
          </div>

          <div className={'subscribe-div'}>
            <p>Subscribe to news</p>
          </div>
        </div>
      </div>



      <div>
        <img className={'line-footer'} src={Line}></img>
      </div>

      <div className={'all-rights-reserved'}>
        <p>© 2023 Positivus. All Rights Reserved.</p>
       {/* <a className={'privacy-policy'}>Privacy Policy</a>  */}
       <a href="">Privacy Policy</a>
      </div>

    </div>
  );
};

export default Footer;
