import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import BlogCard from "./BlogsCards";
import Particle from "../Particle";

import covid from "../../Assets/Projects/covid.png";
import emotion from "../../Assets/Projects/emotion.jpeg";
import gym from "../../Assets/Projects/gym.png";
import videov from "../../Assets/Projects/videov.png";
import fire from "../../Assets/Projects/fire.png";

import plant from "../../Assets/Projects/plant.jpeg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={videov}
              isBlog={false}
              title="Video Vaarta"
              description="Personal Videochat App through which two persons can do videochat, made with the use of React. Here,i have used the socket.io (webrtc) for making a live video call. "
              link="https://github.com/Harshad-droid/Video-Vaarta"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={covid}
              isBlog={false}
              title="COVID 19 Live Tracker"
              description="This is a web-app which shows the count of daily corona cases, daily recovered cases, daily deaths, daily vaccinations and total counts of corona cases ,recovered patients and total deaths of every country worldwide live and you can see the countrywise data through the map ."
              link="https://github.com/Harshad-droid/Covid19-Live-Tracker"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gym}
              isBlog={false}
              title="GYM Website"
              description="This was my freelancing project, we can say, This is a simple gym site made with the use of TailwindCSS framework and base is completely html with beautiful animations and effects. "
              link="https://github.com/Harshad-droid/GYM-Website"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fire}
              isBlog={false}
              title="Wildlife Fire Detection"
              description="It detects the Fire in the forest with live Camera on Drone. It was published
              in IEEE Newsletter also.Successfully presented it in IEEE Humanitarian
              Project Competition and later received appreciation."
              link="https://github.com/Harshad-droid/Fire_detection"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Other WebDev and OpenCV projects."
              description="Here are the web dev and openCV projects from basics to intermediate. I have made some animation pages using css and js and some of the projects using React, and made face detection and mask detection project.
              And still working on some of the projects using opencv libraries."
              link="https://github.com/Harshad-droid/OpenCV-Projects"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
