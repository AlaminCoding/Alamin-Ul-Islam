import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html,body{
        background-color: ${(props) => props.theme.bgColor};
        color: ${(props) => props.theme.txtColor};
        transition: background-color 0.3s, color 0.3s;
    }
    button{
        background-color: ${(props) => props.theme.txtColor};
        color: ${(props) => props.theme.bgColor};
        border: none;
    }
    .main-btn{
      background-color: ${(props) => props.theme.txtColor};
      color: ${(props) => props.theme.bgColor};
      border: 2px solid ${(props) => props.theme.txtColor};
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 20px;
      text-transform: uppercase;
      padding: 5px 20px;
      border-radius: 3px;
      transition: 0.3s;
      &:hover{
        background-color: ${(props) => props.theme.bgColor};
        color: ${(props) => props.theme.txtColor};
      }
    }
    a{
      color: ${(props) => props.theme.txtColor};
    }
    .title {
      text-transform: uppercase;
      font-size: calc(32px + (48 - 32) * ((100vw - 360px) / (1920 - 360)));
      margin-bottom: 50px;
      padding-bottom: 10px;
      @media screen and (max-width: 768px) {
        margin-bottom: 20px;
        border-bottom: 2px solid ${(props) => props.theme.txtColor};
      }
    }
`;

export const InnerContainer = styled.div`
  max-width: 1386px;
  margin: 0 auto;
  padding: ${(props) => (props.padding ? "100px 20px 0px 20px" : "0px 20px")};
  @media screen and (max-width: 768px) {
    padding: ${(props) => (props.padding ? "50px 20px 0px 20px" : "0px 20px")};
  }
`;

export const lightTheme = {
  bgColor: "#F0FFFA",
  txtColor: "#303030",
};

export const darkTheme = {
  bgColor: "#303030",
  txtColor: "#F0FFFA",
};
