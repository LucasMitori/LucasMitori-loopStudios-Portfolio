import styled, { keyframes } from "styled-components";
import DeepEarthImg from "../../assets/img/mobile/image-deep-earth.jpg";
import NightArcadeImg from "../../assets/img/mobile/image-night-arcade.jpg";
import SoccerImg from "../../assets/img/mobile/image-soccer-team.jpg";
import GridImg from "../../assets/img/mobile/image-grid.jpg";
import FromAboveImg from "../../assets/img/mobile/image-from-above.jpg";
import PocketImg from "../../assets/img/mobile/image-pocket-borealis.jpg";
import CuriosityImg from "../../assets/img/mobile/image-curiosity.jpg";
import fishEyeImg from "../../assets/img/mobile/image-fisheye.jpg";

import DeepEarthDImg from "../../assets/img/desktop/image-deep-earth.jpg";
import NightArcadeDImg from "../../assets/img/desktop/image-night-arcade.jpg";
import SoccerDImg from "../../assets/img/desktop/image-soccer-team.jpg";
import GridDImg from "../../assets/img/desktop/image-grid.jpg";
import FromAboveDImg from "../../assets/img/desktop/image-from-above.jpg";
import PocketDImg from "../../assets/img/desktop/image-pocket-borealis.jpg";
import CuriosityDImg from "../../assets/img/desktop/image-curiosity.jpg";
import fishEyeDImg from "../../assets/img/desktop/image-fisheye.jpg";

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

const shadowbox = keyframes`
0% {
    -webkit-box-shadow: 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e;
            box-shadow: 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e;
    -webkit-transform: translateX(0) translateY(0);
            transform: translateX(0) translateY(0);
  }
  100% {
    -webkit-box-shadow: 1px -1px #3e3e3e, 2px -2px #3e3e3e, 3px -3px #3e3e3e, 4px -4px #3e3e3e, 5px -5px #3e3e3e, 6px -6px #3e3e3e, 7px -7px #3e3e3e, 8px -8px #3e3e3e;
            box-shadow: 1px -1px #3e3e3e, 2px -2px #3e3e3e, 3px -3px #3e3e3e, 4px -4px #3e3e3e, 5px -5px #3e3e3e, 6px -6px #3e3e3e, 7px -7px #3e3e3e, 8px -8px #3e3e3e;
    -webkit-transform: translateX(-8px) translateY(8px);
            transform: translateX(-8px) translateY(8px);
  }

`;

const rotate = keyframes`
 0% {
    -webkit-transform: rotateX(0);
            transform: rotateX(0);
  }
  100% {
    -webkit-transform: rotateX(360deg);
            transform: rotateX(360deg);
  }

 `;

/*-----------------------
~*  Main Space *~
-------------------------*/

export const OurCreations = styled.main`
  width: 100%;
  height: 220vh;
  display: flex;
  flex-flow: column nowrap;
  background-color: var(--color-grey-0);
  justify-content: space-evenly;
  align-items: center;

  & > h1 {
    font-family: var(--font-primary-nunito);
    text-transform: uppercase;
    font-size: var(--font-subtitle-36);
    font-weight: var(--font-weight-300);
  }

  & > ul {
    width: 90%;
    height: 80%;
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    align-items: center;
  }

  & > ul > li {
    margin-bottom: 30px;
  }

  & > ul > li > img {
    width: 100%;
    height: 100%;
  }

  & > ul > li > h1 {
    position: relative;
    top: 100px;
    left: 0;
    color: var(--color-grey-0);
    z-index: 1001;
    padding-left: 30px;
    text-transform: uppercase;
    font-family: var(--font-secondary-inter);
    font-size: var(--font-subtitle-20);
    font-weight: var(--font-weight-300);
    line-break: strict;
  }

  & > ul > li:hover {
    animation-name: ${rotate};
    animation-duration: 2s;
  }

  & > div {
  }

  & > div > a {
    display: block;
    width: 200px;
    height: 40px;
    line-height: 40px;
    font-size: 18px;
    font-family: sans-serif;
    text-decoration: none;
    color: #333;
    border: 2px solid #333;
    letter-spacing: 2px;
    text-align: center;
    position: relative;
    transition: all 0.35s;
  }

  & > div > a > span {
    position: relative;
    z-index: 2;
  }

  & > div > a:after {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    background: #ff003b;
    transition: all 0.35s;
  }

  & > div > a:hover {
    color: var(--color-white-mode);
  }

  & > div > a:hover:after {
    width: 100%;
  }

  @media screen and (min-width: 480px) {
    & > ul {
      overflow: auto;
    }
  }
  @media screen and (min-width: 600px) {
  }
  @media screen and (min-width: 768px) {
    height: 150vh;
    & > ul {
      display: flex;
      flex-flow: row wrap;
      justify-content: space-evenly;
    }

    & > ul > li > h1 {
      position: relative;
      top: 300px;
      left: -10px;
      color: var(--color-grey-0);
      z-index: 1001;
      padding-left: 30px;
      text-transform: uppercase;
      font-family: var(--font-secondary-inter);
      font-size: var(--font-subtitle-20);
      font-weight: var(--font-weight-300);
    }

    & > ul > li:hover {
      animation-name: ${shadowbox};
      animation-duration: 1s;
    }
  }
  @media screen and (min-width: 1024px) {
  }
  @media screen and (min-width: 1200px) {
  }
  @media screen and (max-width: 1920px) {
  }
`;

export const DeepEarth = styled.li`
  background-image: url(${DeepEarthImg});
  background-size: cover;
  background-position: center;
  width: 350px;
  height: 150px;

  @media screen and (min-width: 768px) {
    background-image: url(${DeepEarthDImg});
    background-size: cover;
    background-position: center;
    height: 400px;
    width: 200px;
  }
`;
export const NightArcade = styled.li`
  background-image: url(${NightArcadeImg});
  background-size: cover;
  background-position: center;
  width: 350px;
  height: 150px;

  @media screen and (min-width: 768px) {
    background-image: url(${NightArcadeDImg});
    background-size: cover;
    background-position: center;
    height: 400px;
    width: 200px;
  }
`;
export const Soccer = styled.li`
  background-image: url(${SoccerImg});
  background-size: cover;
  background-position: center;
  width: 350px;
  height: 150px;

  @media screen and (min-width: 768px) {
    background-image: url(${SoccerDImg});
    background-size: cover;
    background-position: center;
    height: 400px;
    width: 200px;
  }
`;
export const Grid = styled.li`
  background-image: url(${GridImg});
  background-size: cover;
  background-position: center;
  width: 350px;
  height: 150px;

  @media screen and (min-width: 768px) {
    background-image: url(${GridDImg});
    background-size: cover;
    background-position: center;
    height: 400px;
    width: 200px;
  }
`;
export const FromAbove = styled.li`
  background-image: url(${FromAboveImg});
  background-size: cover;
  background-position: center;
  width: 350px;
  height: 150px;

  @media screen and (min-width: 768px) {
    background-image: url(${FromAboveDImg});
    background-size: cover;
    background-position: center;
    height: 400px;
    width: 200px;
  }
`;
export const Pocket = styled.li`
  background-image: url(${PocketImg});
  background-size: cover;
  background-position: center;
  width: 350px;
  height: 150px;

  @media screen and (min-width: 768px) {
    background-image: url(${PocketDImg});
    background-size: cover;
    background-position: center;
    height: 400px;
    width: 200px;
  }
`;
export const Curiosity = styled.li`
  background-image: url(${CuriosityImg});
  background-size: cover;
  background-position: center;
  width: 350px;
  height: 150px;

  @media screen and (min-width: 768px) {
    background-image: url(${CuriosityDImg});
    background-size: cover;
    background-position: center;
    height: 400px;
    width: 200px;
  }
`;
export const FishEye = styled.li`
  background-image: url(${fishEyeImg});
  background-size: cover;
  background-position: center;
  width: 350px;
  height: 150px;

  @media screen and (min-width: 768px) {
    background-image: url(${fishEyeDImg});
    background-size: cover;
    background-position: center;
    height: 400px;
    width: 200px;
  }
`;
