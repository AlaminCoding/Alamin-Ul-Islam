import gsap from "gsap";
import { useEffect, useRef } from "react";
import styled from "styled-components";
const Popup = ({ children }) => {
  const wrapperRef = useRef();
  useEffect(() => {
    gsap.fromTo(
      wrapperRef.current,
      { y: 40, opacity: 0 },
      { duration: 1, y: 0, opacity: 1, ease: "power4.in" }
    );
  });
  return <Wrapper ref={wrapperRef}>{children}</Wrapper>;
};

export default Popup;

const Wrapper = styled.div`
  opacity: 0;
  transform: translateY(40px);
`;
