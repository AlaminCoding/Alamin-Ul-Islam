import { FiSun, FiMoon } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import {
  activateLightTheme,
  activateDarkTheme,
} from "@/store/theme/themeSlice";
import styled from "styled-components";
import { InnerContainer } from "@/styles/GlobalStyle";
import { useEffect, useState } from "react";

const Navbar = () => {
  const light = useSelector((state) => state.theme.value);
  const dispatch = useDispatch();
  const [menuOpen, setMenuOpen] = useState(false);
  const [navShow, setNavShow] = useState(true);
  const [oldScroll, setOldScroll] = useState(0);
  const handleTheme = () => {
    if (light) {
      dispatch(activateDarkTheme());
    } else {
      dispatch(activateLightTheme());
    }
  };

  useEffect(() => {
    scrollShowHideFunc();
  });

  const scrollShowHideFunc = () => {
    window.addEventListener("scroll", () => {
      let newScroll = window.scrollY;
      if (newScroll > oldScroll) {
        setNavShow(false);
      } else {
        setNavShow(true);
      }
      setOldScroll(newScroll);
    });
  };

  const handleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <MainNav navShow={navShow} scrollValue={oldScroll}>
      <InnerContainer>
        <Nav menuOpen={menuOpen}>
          <ul>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
          <div className="toggle" onClick={() => handleMenu()}>
            <div className="bar bar1"></div>
            <div className="bar bar2"></div>
            <div className="bar bar3"></div>
          </div>
          <button onClick={handleTheme}>
            {light ? <FiMoon /> : <FiSun />}
          </button>
        </Nav>
      </InnerContainer>
    </MainNav>
  );
};

export default Navbar;

const MainNav = styled.div`
  background-color: ${(props) => props.theme.bgColor};
  position: fixed;
  top: ${(props) => (props.navShow ? 0 : "-150px")};
  left: 0;
  width: 100%;
  transition: background-color 0.3s, top 0.5s;
  box-shadow: ${(props) =>
    props.scrollValue < 10 ? "none" : "0px 4px 10px rgba(0, 0, 0, 0.2)"};
  z-index: 9999;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 120px;
  ul {
    display: flex;
    align-items: center;
    li {
      margin-right: 40px;
      a {
        text-transform: uppercase;
        font-size: 20px;
      }
    }
    @media screen and (max-width: 480px) {
      position: fixed;
      height: 100%;
      width: 100%;
      top: 80px;
      left: ${(props) => (props.menuOpen ? 0 : "-100%")};
      background-color: ${(props) => props.theme.bgColor};
      flex-direction: column;
      align-items: flex-start;
      padding-left: 20px;
      transition: background-color 0.3s, left 0.5s;
      li {
        margin-top: 30px;
      }
    }
  }
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px;
    border-radius: 3px;
    cursor: pointer;
    svg {
      font-size: 28px;
    }
  }
  .toggle {
    width: 36px;
    height: 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    cursor: pointer;
    .bar {
      border-radius: 2px;
      height: 4px;
      width: 100%;
      background-color: ${(props) => props.theme.txtColor};
      transition: 0.3s;
    }
    .bar1 {
      transform-origin: left;
      transform: ${(props) => (props.menuOpen ? "rotate(45deg)" : 0)};
    }
    .bar2 {
      opacity: ${(props) => (props.menuOpen ? 0 : 1)};
    }
    .bar3 {
      transform-origin: left;
      transform: ${(props) => (props.menuOpen ? "rotate(-45deg)" : 0)};
    }
    @media screen and (min-width: 480px) {
      display: none;
    }
  }
  @media screen and (max-width: 576px) {
    height: 80px;
  }
`;
