import styled, { keyframes } from "styled-components";

/****************************************

    Author: Lucas Mitori Oliveira Okumura
    contact: lucas.mitori@hotmail.com
    cel: +55 (11) 9-7749-2121
    Name: Portfolio Project - Loop Studios
    Description: Using styled-components to improve Project.
    ~ *   Main Space Styles   * ~

            Version: 1.0

****************************************/

/*-----------------------
~*  Keyframes *~
-------------------------*/

const MoveLeft = keyframes`
0% {
  transform: translateX(-10rem);

}

100% {
  transform: translateX(0);
}
`;

/*-----------------------
~*  Main Space *~
-------------------------*/

export const MainSpace = styled.main`
  width: 100%;
  height: 80vh;
  background-color: var(--color-grey-0);
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;

  & > div {
    width: 90%;
    margin: 0 auto;
  }

  & > div > img {
    width: 100%;
    height: 100%;
    animation-name: ${MoveLeft};
    animation-duration: 2s;
  }

  @media screen and (min-width: 480px) {
  }
  @media screen and (min-width: 600px) {
    justify-content: flex-start;
    padding-left: 30px;
    flex-flow: row nowrap;

    & > div {
      z-index: 0;
      position: absolute;
      width: 70%;
    }
  }
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1024px) {
  }
  @media screen and (min-width: 1200px) {
    & > div {
      width: 50%;
      height: 50%;
    }
  }
  @media screen and (max-width: 1920px) {
  }
`;

export const IntroTextSpace = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;

  & > h1 {
    font-family: var(--font-primary-nunito);
    text-transform: uppercase;
    font-size: var(--font-subtitle-36);
    text-align: center;
    font-weight: var(--font-weight-300);
    font-style: normal;
    margin: 40px 0px 20px 0px;
  }

  & > p {
    font-family: var(--font-primary-nunito);
    font-size: var(--font-text-16);
    text-align: center;
    line-height: 25px;
    padding: 0 20px;
    font-weight: var(--font-weight-700);
    color: var(--color-grey-5);
  }

  @media screen and (min-width: 480px) {
  }
  @media screen and (min-width: 600px) {
    background-color: var(--color-grey-0);
    z-index: 1001;
    position: relative;
    top: 130%;
    left: 30%;
  }
  @media screen and (min-width: 768px) {
    height: 35%;
  }
  @media screen and (min-width: 1024px) {
    height: 40%;
  }
  @media screen and (min-width: 1200px) {
  }
  @media screen and (max-width: 1920px) {
  }
`;
