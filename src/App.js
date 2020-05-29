import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import logo from "./assets/images/logo.svg";
import atoi from "./assets/images/atoi.png";
import noshucksgiven from "./assets/images/noshucksgiven.png";
import bottle from "./assets/images/bottle.png";
import glass from "./assets/images/glass.png";
import shuck from "./assets/images/shuck.png";
import work from "./assets/images/work.png";
import mainLogo from "./assets/images/mainLogo.png";

const GlobalStyle = createGlobalStyle`
  *,*::after, *::before {
    margin:0;
    padding: 0;
    box-sizing: inherit;
  }

  html {
    font-size: 62.5%; /* 1rem = 1.0rem  */

    @media (max-width: 70em) {
    font-size: 50%; 
      
    }
    box-sizing: border-box;


  }

  body {
    font-family: 'PT Serif', serif;
  }
`;

const StyledApp = styled.div`
  height: 71.9rem;
  background-image: linear-gradient(
    to right,
    #d8b429 0%,
    #d8b429 30%,
    #e2b29a 30%,
    #e2b29a 53%,
    #f8d8c4 53%,
    #f8d8c4 100%
  );
`;

const Header = styled.header`
  position: relative;
  height: 11.1rem;

  border-bottom: 0.1rem solid #ffffff;
`;

const Logo = styled.div`
  position: absolute;
  top: 3.3rem;
  left: 3%;
  margin-right: 3rem;
`;

const MainContent = styled.div`
  height: 60.8rem;
  position: relative;

  & > img {
    position: absolute;
  }

  .mainLogo {
    top: 20.4rem;
    left: 13.26%;
    width: 73%;
  }

  .glass {
    left: 20.34%;
    bottom: 24.5rem;
    width: 4.7916%;
  }

  .bottle {
    top: 8.5rem;
    right: 40%;
    width: 4.7916%;
  }

  .noshucksgiven {
    left: 28%;
    top: 13.7rem;
    width: 14%;
    height: 3.7rem;
  }
  .shuck {
    right: 20%;
    bottom: 17.7rem;
    width: 6.1%;
  }

  .work {
    right: 31%;
    bottom: 20.7rem;
    width: 4.7%;
    height: 8rem;
  }
`;

const Nav = styled.nav`
  width: 51%;
  height: 4.9rem;
  margin-left: 19.4rem;
  font-weight: bold;
  font-size: 1.8rem;
  line-height: 2.4rem;
  color: #ffffff;
  padding-top: 3.9rem;
  position: relative;

  ul {
    display: flex;
    align-items: center;
    justify-content: space-between;
    list-style: none;

    li {
      a {
        display: inline-block;
        color: inherit;
        text-decoration: none;
        cursor: pointer;
      }
    }
  }

  .atoiIcon {
    position: absolute;
    top: 2.8rem;
    right: -10rem;
  }
`;
const App = () => {
  return (
    <StyledApp>
      <GlobalStyle />
      <Header>
        <Logo>
          <img src={logo} alt="logo" />
        </Logo>

        <Nav>
          <ul>
            <li>
              <a href="#">about</a>
            </li>
            <li>
              <a href="#">reservations</a>
            </li>
            <li>
              <a href="#">book your event</a>
            </li>
            <li>
              <a href="#">gift cards</a>
            </li>
            <li>
              <a href="#">events calendar</a>
            </li>
          </ul>
          <div className="atoiIcon">
            <img src={atoi} alt="atoi" />
          </div>
        </Nav>
      </Header>

      <MainContent>
        <img className="bottle" src={bottle} alt="bottle" />
        <img className="glass" src={glass} alt="glass" />
        <img className="mainLogo" src={mainLogo} alt="mainLogo" />
        <img
          className="noshucksgiven"
          src={noshucksgiven}
          alt="noshucksgiven"
        />
        <img className="shuck" src={shuck} alt="shuck" />
        <img className="work" src={work} alt="work" />
      </MainContent>
    </StyledApp>
  );
};

export default App;
