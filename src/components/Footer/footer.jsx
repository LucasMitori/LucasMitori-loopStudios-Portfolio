import { Footer } from "./styles";
import logo from "../../assets/logo/logo.svg";
import facebookIcon from "../../assets/icons/icon-facebook.svg";
import twitterIcon from "../../assets/icons/icon-twitter.svg";
import pinterestIcon from "../../assets/icons/icon-pinterest.svg";
import instagramIcon from "../../assets/icons/icon-instagram.svg";

const FooterSpace = () => {
  return (
    <>
      <Footer>
        <img src={logo} alt="Logo" />

        <ul>
          <li>About</li>
          <li>Careers</li>
          <li>Events</li>
          <li>Products</li>
          <li>Support</li>
        </ul>
        <div>
          <img src={facebookIcon} alt="facebook icon" />
          <img src={twitterIcon} alt="twitter icon" />
          <img src={pinterestIcon} alt="pinterest icon" />
          <img src={instagramIcon} alt="instagram icon" />
        </div>
        <h3>@2023 | Loopstudios. All rights reserved</h3>
        <h3>Designed by loopstudios | developed by Lucas Mitori</h3>
      </Footer>
    </>
  );
};

export default FooterSpace;
