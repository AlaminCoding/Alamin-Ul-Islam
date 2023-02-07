import { InnerContainer } from "@/styles/GlobalStyle";
import { Col, Row } from "react-bootstrap";
import styled from "styled-components";
import Image from "next/image";
import port from "@/public/port.jpg";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import Popup from "@/components/Animation/Popup";
import PopupTimeline from "@/components/Animation/PopupTimeline";
const Hero = () => {
  return (
    <InnerContainer padding={false}>
      <Wrapper>
        <div className="hero-box">
          <Row>
            <Col lg={{ span: 4, offset: 1 }} md={6}>
              <Popup>
                <div className="hero-img">
                  <Image src={port} alt="Picture of Alamin" priority />
                </div>
              </Popup>
            </Col>
            <Col lg={{ span: 5, offset: 1 }}>
              <PopupTimeline heightAuto={false}>
                <div className="hero-text">
                  <h1>Hi,</h1>
                  <p>
                    My name is <strong>Alamin Ul Islam,</strong> and I'm a
                    front-end developer dedicated to building engaging and
                    functional websites that meet user needs and business
                    objectives.
                  </p>
                  <div className="icon-box">
                    <div className="resume-box">
                      <a
                        href="/Alamin_Resume.pdf"
                        target="_blank"
                        className="main-btn"
                        rel="noopener noreferrer"
                      >
                        See My Resume
                      </a>
                    </div>
                    <div className="link-box">
                      <a href="https://github.com/AlaminCoding" target="_blank">
                        <FaGithubSquare />
                      </a>
                      <a
                        href="https://www.linkedin.com/in/alamin-ul-islam/"
                        target="_blank"
                      >
                        <FaLinkedin />
                      </a>
                    </div>
                  </div>
                </div>
              </PopupTimeline>
            </Col>
          </Row>
        </div>
      </Wrapper>
    </InnerContainer>
  );
};

export default Hero;

const Wrapper = styled.div`
  padding: 7px 0px;
  .hero-box {
    width: 100%;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
    padding: 78px 0px;
    @media screen and (max-width: 992px) {
      padding: 30px;
    }
    @media screen and (max-width: 576px) {
      padding: 10px;
    }
    .hero-img {
      overflow: hidden;
      img {
        width: 100%;
        height: auto;
        border-radius: 5px;
        transition: 0.5s;
      }
      &:hover {
        img {
          transform: scale(1.1);
        }
      }
    }
    .hero-text {
      display: flex;
      flex-direction: column;
      justify-content: center;
      height: 100%;
      h1 {
        opacity: 0;
        font-size: calc(38px + (48 - 38) * ((100vw - 360px) / (1920 - 360)));
      }
      p {
        opacity: 0;
        font-size: 24px;
        font-size: calc(20px + (24 - 20) * ((100vw - 360px) / (1920 - 360)));
        line-height: calc(30px + (38 - 30) * ((100vw - 360px) / (1920 - 360)));
        margin-top: 24px;
        margin-bottom: 34px;
      }
      .icon-box {
        opacity: 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .link-box {
          display: flex;
          a {
            display: block;
            margin-left: 20px;
            svg {
              font-size: 50px;
            }
          }
        }
        @media screen and (max-width: 410px) {
          flex-direction: column;
          align-items: flex-start;
          .link-box {
            margin-top: 20px;
            a {
              margin-right: 20px;
              margin-left: 0px;
            }
          }
        }
      }
      @media screen and (max-width: 992px) {
        h1 {
          margin-top: 30px;
        }
        p {
          margin-top: 10px;
          margin-bottom: 25px;
        }
      }
    }
  }
`;
