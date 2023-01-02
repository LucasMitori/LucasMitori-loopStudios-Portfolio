import styled, { keyframes } from "styled-components";

/****************************************

    Author: Lucas Mitori Oliveira Okumura
    contact: lucas.mitori@hotmail.com
    cel: +55 (11) 9-7749-2121
    Name: Portfolio Project - Loop Studios
    Description: Using styled-components to improve Project.
    ~ *   Our Creations Space Styles   * ~

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

export const Footer = styled.main`
  width: 100%;
  height: 70vh;
  background-color: var(--color-navigation);
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-evenly;
  align-items: center;

  & > img {
  }

  & > ul {
    width: 90%;
    margin: 0 auto;
    height: 40%;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
    align-items: center;
  }

  & > ul > li {
    font-family: var(--font-secondary-inter);
    font-size: var(--font-text-14);
    font-weight: var(--font-weight-600);
    color: var(--color-grey-0);
    letter-spacing: 1px;
  }

  & > div {
    width: 90%;
    margin: 0 auto;
    height: 10%;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-evenly;
    align-items: center;
  }

  & > h3 {
    font-family: var(--font-primary-nunito);
    font-size: var(--font-text-14);
    color: var(--color-grey-0);
    font-weight: var(--font-weight-300);
  }
`;
