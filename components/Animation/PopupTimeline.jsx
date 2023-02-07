import styled from "styled-components";
import { useRef, useEffect } from "react";
import gsap from "gsap";
const PopupTimeline = (props) => {
  const wrapperRef = useRef();
  useEffect(() => {
    const childrens = wrapperRef.current.children[0].children;
    const tl = gsap.timeline();
    tl.fromTo(
      childrens,
      { y: 40, opacity: 0 },
      { duration: 1, y: 0, opacity: 1, stagger: 0.2, ease: "power4.out" }
    );
  }, []);
  return (
    <Wrapper ref={wrapperRef} heightAuto={props.heightAuto}>
      {props.children}
    </Wrapper>
  );
};

export default PopupTimeline;
const Wrapper = styled.div`
  height: ${(props) => (props.heightAuto ? "auto" : "100%")};
`;
