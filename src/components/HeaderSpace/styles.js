import styled, { keyframes } from "styled-components";
import headerImage from "../../assets/img/mobile/image-hero.jpg";
import desktopHeaderImage from "../../assets/img/desktop/image-hero.jpg";

/****************************************

    Author: Lucas Mitori Oliveira Okumura
    contact: lucas.mitori@hotmail.com
    cel: +55 (11) 9-7749-2121
    Name: Portfolio Project - Loop Studios
    Description: Using styled-components to improve Header Space.
    ~ *   Header Styles   * ~

            Version: 1.0

****************************************/

/*-----------------------
~*  Keyframes *~
-------------------------*/

const Rotate = keyframes`
0% {
    -webkit-transform: scale(1) rotateZ(0);
            transform: scale(1) rotateZ(0);
  }
  50% {
    -webkit-transform: scale(1.4) rotateZ(180deg);
            transform: scale(1.4) rotateZ(180deg);
  }
  100% {
    -webkit-transform: scale(1) rotateZ(360deg);
            transform: scale(1) rotateZ(360deg);
  }

`;

/*-----------------------
~*  HeaderSpace *~
-------------------------*/

export const HeaderSyles = styled.header`
  width: 100%;
  height: 90vh;
  background-image: url(${headerImage});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
  padding-top: 4rem;

  @media screen and (min-width: 480px) {
  }
  @media screen and (min-width: 600px) {
  }
  @media screen and (min-width: 768px) {
    background-image: url(${desktopHeaderImage});
    align-items: flex-start;
  }
  @media screen and (min-width: 1024px) {
  }
  @media screen and (min-width: 1200px) {
  }
  @media screen and (max-width: 1920px) {
  }
`;

/*-----------------------
~*  NavBar Space *~
-------------------------*/

export const NavbarStyles = styled.nav`
  width: 100%;
  height: 5rem;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  padding: 0rem 2rem;
`;

export const NavBarMenuButton = styled.button`
  width: 70px;
  height: 50px;
  cursor: pointer;
  border-radius: var(--radius-8);
  background-color: transparent;

  & > svg {
    transform: scale(1.2);
  }

  @media screen and (min-width: 480px) {
  }
  @media screen and (min-width: 768px) {
    display: none;
  }
  @media screen and (min-width: 1024px) {
  }
  @media screen and (min-width: 1200px) {
  }
  @media screen and (max-width: 1920px) {
  }
`;

/*-----------------------
~*  Phrase Space *~
-------------------------*/

export const PhraseSpace = styled.div`
  width: 85%;
  margin-top: 80px;
  height: auto;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  border: 2px solid var(--color-grey-ex-1);
  padding: 20px;

  & > h1 {
    font-family: var(--font-primary-nunito);
    font-size: var(--font-title-42);
    font-weight: var(--font-weight-300);
    text-transform: uppercase;
    letter-spacing: 3px;
    line-height: 50px;
    color: var(--color-grey-ex-1);
  }

  @media screen and (min-width: 480px) {
  }
  @media screen and (min-width: 768px) {
    width: 50%;
    height: 50%;
    margin-left: 50px;
    justify-content: space-evenly;

    & > h1 {
      font-size: var(--font-title-40);
      line-height: 100px;
    }
  }
  @media screen and (min-width: 1024px) {
  }
  @media screen and (min-width: 1200px) {
    width: 40%;
    height: 50%;
    margin-left: 100px;
    justify-content: space-evenly;

    & > h1 {
      font-size: var(--font-grand-60);
      line-height: 100px;
    }
  }
  @media screen and (max-width: 1920px) {
  }
`;

/*-----------------------
~*  Menu Space *~
-------------------------*/

export const Menu = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: var(--color-navigation);
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  padding: 40px 0px 0px 20px;
  align-items: center;
  z-index: 1001;
  transform: ${({ show }) => (show ? "translateX(0)" : "translateX(-100%)")};
  transition: 0.7s ease-in-out;

  & > div {
    width: 90%;
    margin: 0 auto;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
  }

  & > ul {
    width: 90%;
    margin: 0 auto;
    height: 50%;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-evenly;
    align-items: flex-start;
  }

  & > ul > li {
    font-family: var(--font-primary-nunito);
    font-size: var(--font-subtitle-30);
    color: var(--color-grey-0);
  }

  & > ul > li:hover {
    animation-name: ${Rotate};
    animation-duration: 1s;
  }

  @media screen and (min-width: 480px) {
  }
  @media screen and (min-width: 768px) {
    position: relative;
    width: 80%;
    height: 80px;
    transform: none;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: center;
    margin: 0;
    padding: 0;
    background-color: transparent;

    & > div {
      display: none;
    }

    & > ul {
      display: flex;
      flex-flow: row nowrap;
      justify-content: space-evenly;
      align-items: center;
      margin: 0px;
      padding: 0px;
    }

    & > ul > li {
      font-size: var(--font-subtitle-20);
    }
  }
  @media screen and (min-width: 1024px) {
    & > ul {
      width: 80%;
    }
  }
  @media screen and (min-width: 1200px) {
    justify-content: flex-end;
    padding-right: 50px;
    & > ul {
      width: 400px;
    }
  }
  @media screen and (max-width: 1920px) {
  }
`;
