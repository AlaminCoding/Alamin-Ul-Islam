import { InnerContainer } from "@/styles/GlobalStyle";
import {
  TbBrandHtml5,
  TbBrandCss3,
  TbBrandJavascript,
  TbBrandBootstrap,
  TbBrandVue,
  TbBrandReactNative,
  TbBrandFigma,
  TbBrandTailwind,
  TbBrandNextjs,
  TbBrandNuxt,
} from "react-icons/tb";
import styled from "styled-components";
import Popup from "./Animation/Popup";
import PopupScrollTimeline from "./Animation/PopupScrollTimeline";

const Skills = () => {
  return (
    <InnerContainer padding={true} id="skills">
      <Popup>
        <h1 className="title">SKILLS</h1>
      </Popup>
      <PopupScrollTimeline>
        <LogoList>
          <div className="logo-box">
            <TbBrandHtml5 />
            <p>HTML</p>
          </div>
          <div className="logo-box">
            <TbBrandCss3 />
            <p>CSS</p>
          </div>
          <div className="logo-box">
            <TbBrandJavascript />
            <p>
              <strong>JavaScript</strong>
            </p>
          </div>
          <div className="logo-box">
            <TbBrandBootstrap />
            <p>Bootstrap</p>
          </div>
          <div className="logo-box">
            <TbBrandTailwind />
            <p>Tailwind</p>
          </div>
          <div className="logo-box">
            <TbBrandVue />
            <p>
              <strong>Vue</strong>
            </p>
          </div>
          <div className="logo-box">
            <TbBrandReactNative />
            <p>
              <strong>React</strong>
            </p>
          </div>
          <div className="logo-box">
            <TbBrandNextjs />
            <p>
              <strong>Next</strong>
            </p>
          </div>
          <div className="logo-box">
            <TbBrandNuxt />
            <p>
              <strong>Nuxt</strong>
            </p>
          </div>
          <div className="logo-box">
            <TbBrandFigma />
            <p>Figma</p>
          </div>
        </LogoList>
      </PopupScrollTimeline>
    </InnerContainer>
  );
};

export default Skills;

const LogoList = styled.div`
  display: flex;
  justify-content: space-between;
  .logo-box {
    margin-top: 30px;
    text-align: center;
    svg {
      font-size: calc(45px + (80 - 45) * ((100vw - 360px) / (1920 - 360)));
    }
    p {
      margin-top: 10px;
      font-size: 20px;
    }
  }

  @media screen and (max-width: 800px) {
    justify-content: flex-start;
    flex-wrap: wrap;
    .logo-box {
      margin-right: 40px;
      margin-top: 20px;
    }
  }
  @media screen and (max-width: 490px) {
    display: grid;
    grid-template-columns: auto auto auto;
    justify-content: space-between;
    .logo-box {
      margin-right: 0;
    }
  }
`;
