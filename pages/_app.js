import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/globals.scss";
import Layout from "@/components/Layout";
import { store } from "@/store";
import { Provider } from "react-redux";
import styled from "styled-components";

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout>
        <Main>
          <Component {...pageProps} />
        </Main>
      </Layout>
    </Provider>
  );
}

const Main = styled.main`
  padding-top: 120px;
  @media screen and (max-width: 576px) {
    padding-top: 80px;
  }
`;
