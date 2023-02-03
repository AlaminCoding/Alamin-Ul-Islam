import styled from "styled-components";
import { FaCopyright } from "react-icons/fa";
const Footer = () => {
  return (
    <CopyRight>
      <p>
        <FaCopyright />
        2023 Alamin Ul Islam | All Rights Reserved
      </p>
    </CopyRight>
  );
};

export default Footer;

const CopyRight = styled.footer`
  height: 80px;
  box-shadow: 0px -2px 10px rgba(0, 0, 0, 0.15);
  margin-top: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  p {
    margin: 0;
    display: flex;
    align-items: center;
    svg {
      margin-right: 5px;
    }
  }
`;
