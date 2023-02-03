import { useSelector } from "react-redux";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { GlobalStyle, lightTheme, darkTheme } from "@/styles/GlobalStyle";
import { ThemeProvider } from "styled-components";

const Layout = ({ children }) => {
  const light = useSelector((state) => state.theme.value);

  return (
    <ThemeProvider theme={light ? lightTheme : darkTheme}>
      <GlobalStyle />
      <Navbar />
      {children}
      <Footer />
    </ThemeProvider>
  );
};

export default Layout;
