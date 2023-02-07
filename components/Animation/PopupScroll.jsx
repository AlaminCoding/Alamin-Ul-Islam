import styled from "styled-components";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
const PopupScroll = ({ children }) => {
  const wrapperRef = useRef();
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.fromTo(
      wrapperRef.current,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: wrapperRef.current,
          start: "top 80%",
          end: "bottom bottom",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);
  return <Wrapper ref={wrapperRef}>{children}</Wrapper>;
};

export default PopupScroll;
const Wrapper = styled.div``;
