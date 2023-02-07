import styled from "styled-components";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useRef, useEffect } from "react";
const PopupScrollTimeline = ({ children }) => {
  const wrapperRef = useRef();
  useEffect(() => {
    const childrens = wrapperRef.current.children[0].children;
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: wrapperRef.current,
        start: "top 80%",
        end: "bottom bottom",
        toggleActions: "play none none reverse",
      },
    });
    tl.fromTo(
      childrens,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.08,
        ease: "power4.out",
      }
    );
  }, []);
  return <Wrapper ref={wrapperRef}>{children}</Wrapper>;
};

export default PopupScrollTimeline;
const Wrapper = styled.div``;
