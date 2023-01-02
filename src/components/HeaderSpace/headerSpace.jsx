import {
  HeaderSyles,
  Menu,
  NavBarMenuButton,
  NavbarStyles,
  PhraseSpace,
} from "./styles";
import logoImage from "../../assets/logo/logo.svg";
import { IconContext } from "react-icons";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { GeneralContext } from "../../contexts/GeneralContext";
import { useContext } from "react";

const HeaderSpace = () => {
  const { show, setShow } = useContext(GeneralContext);

  function openMenu() {
    setShow((current) => !current);
  }

  return (
    <>
      <HeaderSyles>
        <NavbarStyles>
          <img src={logoImage} alt="Logo" />
          <NavBarMenuButton onClick={() => openMenu()}>
            <IconContext.Provider
              value={{
                color: "var(--color-grey-0)",
                size: "2rem",
              }}
            >
              <GiHamburgerMenu />
            </IconContext.Provider>
          </NavBarMenuButton>

          <Menu show={show}>
            <div>
              <img src={logoImage} alt="Logo" />
              <NavBarMenuButton onClick={() => openMenu()}>
                <IconContext.Provider
                  value={{
                    color: "var(--color-grey-0)",
                    size: "2rem",
                  }}
                >
                  <AiOutlineClose />
                </IconContext.Provider>
              </NavBarMenuButton>
            </div>

            <ul>
              <li>About</li>
              <li>Carrers</li>
              <li>Events</li>
              <li>Products</li>
              <li>Support</li>
            </ul>
          </Menu>
        </NavbarStyles>

        <PhraseSpace>
          <h1>Immersive experiences that deliver</h1>
        </PhraseSpace>
      </HeaderSyles>
    </>
  );
};

export default HeaderSpace;
