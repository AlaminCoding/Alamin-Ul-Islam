import { InnerContainer } from "@/styles/GlobalStyle";
import ProjectData from "@/data/projects";
import { Col, Row } from "react-bootstrap";
import styled from "styled-components";
import Image from "next/image";
const Projects = () => {
  return (
    <InnerContainer padding={true} id="projects">
      <h1 className="title">Projects</h1>
      <Row>
        {ProjectData.map((data, index) => (
          <Col xl={3} lg={4} md={6} key={"project-" + index}>
            <ProjectBox href={data.url} target="_blank">
              <Image src={data.image} alt="project image" />
              <h1>{data.name}</h1>
              <ul className="tech-list">
                {data.tech.map((list, idx) => (
                  <li key={"list-" + idx}>{list}</li>
                ))}
              </ul>
            </ProjectBox>
          </Col>
        ))}
      </Row>
      <ExLink
        href="https://github.com/AlaminCoding"
        className="main-btn"
        target="_blank"
      >
        More in github
      </ExLink>
    </InnerContainer>
  );
};

export default Projects;

const ProjectBox = styled.a`
  display: block;
  margin-top: 30px;
  height: 250px;
  width: 100%;
  border: 1px solid black;
  position: relative;
  border-radius: 5px;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    object-fit: cover;
    object-position: top left;
    filter: grayscale(1);
    transition: 0.3s;
  }
  &:hover {
    img {
      transform: scale(1.2);
      filter: grayscale(0);
    }
  }
  &:after {
    content: "";
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    background-image: linear-gradient(transparent, black);
  }
  h1 {
    position: absolute;
    color: white;
    bottom: 10px;
    left: 50%;
    transform: translate(-50%);
    font-size: 24px;
    text-transform: uppercase;
    z-index: 9;
  }
  .tech-list {
    position: absolute;
    display: flex;
    justify-content: center;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 9;
    li {
      background-color: white;
      color: #353232;
      padding: 3px 15px;
      text-transform: uppercase;
      margin: 0px 10px;
      border-radius: 5px;
      font-weight: bold;
      border: 1px solid black;
    }
  }
  @media screen and (max-width: 800px) {
    margin-top: 20px;
  }
`;

const ExLink = styled.a`
  width: 194px;
  margin-top: 40px;
`;
