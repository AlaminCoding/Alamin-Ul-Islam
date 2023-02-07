import { InnerContainer } from "@/styles/GlobalStyle";
import { Col, Row } from "react-bootstrap";
import styled from "styled-components";
import { FaPhoneSquareAlt, FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { MdMail } from "react-icons/md";
import Image from "next/image";
import connect from "@/public/connect.jpg";
import PopupScroll from "./Animation/PopupScroll";
import PopupScrollTimeline from "./Animation/PopupScrollTimeline";
// import ContactForm from "./ContactForm";
const Contact = () => {
  return (
    <InnerContainer padding={true} id="contact">
      <PopupScroll>
        <ContactBox>
          <Row>
            <Col lg={{ span: 4, offset: 1 }} md={6}>
              <div className="contact-text">
                {/* <h1>
                Let’s <br /> Work Together
              </h1> */}
                <PopupScroll>
                  <p>Send me a message</p>
                </PopupScroll>
                <PopupScrollTimeline>
                  <ul>
                    <li>
                      <FaPhoneSquareAlt />
                      <span>+8801959557707</span>
                    </li>
                    <li>
                      {/* <FaEnvelope /> */}
                      <MdMail />
                      <span>alamin.coding@gmail.com</span>
                    </li>
                    <li>
                      <FaGithubSquare />
                      <a href="https://github.com/AlaminCoding" target="_blank">
                        <span>github.com/AlaminCoding</span>
                      </a>
                    </li>
                    <li>
                      <FaLinkedin />
                      <a
                        href="https://www.linkedin.com/in/alamin-ul-islam/"
                        target="_blank"
                      >
                        <span>linkedin.com/in/alamin-ul-islam</span>
                      </a>
                    </li>
                  </ul>
                </PopupScrollTimeline>
              </div>
            </Col>
            <Col lg={{ span: 5, offset: 1 }} md={6}>
              {/* <ContactForm /> */}
              <PopupScroll>
                <div className="contact-img">
                  <h1>
                    Let’s <br /> Work Together
                  </h1>
                  <Image src={connect} alt="Connect Pic" />
                </div>
              </PopupScroll>
            </Col>
          </Row>
        </ContactBox>
      </PopupScroll>
    </InnerContainer>
  );
};

export default Contact;

const ContactBox = styled.div`
  padding: 70px 0px;
  width: 100%;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
  @media screen and (max-width: 992px) {
    padding: 30px;
  }
  @media screen and (max-width: 576px) {
    padding: 10px;
  }
  .contact-text {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    h1 {
      font-size: calc(38px + (48 - 38) * ((100vw - 360px) / (1920 - 360)));
    }
    p {
      /* font-size: 24px; */
      font-size: calc(38px + (48 - 38) * ((100vw - 360px) / (1920 - 360)));
      line-height: calc(38px + (58 - 38) * ((100vw - 360px) / (1920 - 360)));
      font-weight: 600;
      margin-top: 30px;
      margin-bottom: 40px;
    }
    ul {
      li {
        display: flex;
        align-items: center;
        margin-bottom: 20px;
        &:nth-last-child(1) {
          margin-bottom: 0;
        }
        svg {
          font-size: 24px;
          margin-right: 10px;
        }
        span {
          font-size: 20px;
        }
      }
    }
    @media screen and (max-width: 576px) {
      p {
        margin-top: 10px;
        margin-bottom: 20px;
      }
    }
  }
  .contact-img {
    height: 600px;
    position: relative;
    border-radius: 5px;

    &:after {
      content: "";
      position: absolute;
      height: 100%;
      width: 100%;
      background-color: rgba(0, 0, 0, 0.7);
      top: 0;
      left: 0;
      border-radius: 5px;
    }
    img {
      width: 100%;
      height: 100%;
      border-radius: 5px;
      position: absolute;
      top: 0;
      left: 0;
      object-fit: cover;
      z-index: 0;
    }
    h1 {
      font-size: calc(38px + (48 - 38) * ((100vw - 360px) / (1920 - 360)));
      color: white;
      z-index: 1;
      position: absolute;
      top: 50%;
      left: 100px;
      transform: translateY(-50%);
    }
    @media screen and (max-width: 768px) {
      margin-top: 40px;
      height: 400px;
      h1 {
        left: 30px;
      }
    }
  }
`;
