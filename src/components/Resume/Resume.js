import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
import axios from "axios";
import pdf from "../../Assets/Harshad_Resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";

function Resume() {
  const uri = "";
  const [spojRank, upadteSpojRank] = useState(0);
  const [hackerrank, upadteHackerank] = useState(0);
  const [sem, upadateSem] = useState(0);
  const [cgpa, upadteCgpa] = useState(0);

  useEffect(() => {
    axios
      .get(uri)
      .then((res) => {
        upadteSpojRank(res.data.message[0].spojRank);
        upadteHackerank(res.data.message[1].hackerrank);
        upadteCgpa(res.data.message[2].cgpa);
        upadateSem(res.data.message[3].sem);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
        <Row className="resume">
          <Col md={6} className="resume-left">
            <h3 className="resume-title">Experience</h3>
            <Resumecontent
              title="Research Volunteer at AddIt Labs"
              date="Feb 2020 - April 2020"
              content={[
                "Recorded environmental data which affect crops with the help of Arduino and Matlab.Made a Smart Device to help farmers make efficient decisions for crop growth and development.",
                "Made a Matlab application for storing and processing the information.",
              ]}
            />
            <Resumecontent
              title="Zonal Coordinator during Expanse 2019"
              date="June 2020 - August 2020"
              content={[
                " Worked as the Zonal Coordinator of IITR Techfest ”COGNIZANCE” in South Zone (Bangalore).Managed the events and workshops conducted by the Cognizance in Colleges.",
                "Served as Campus Ambassador of IEEE Xtreme 14.0",
              ]}
            />
            <Resumecontent
              title="Secretary"
              date="Feb 2020 – Feb-2021"
              content={[
                "Worked with the Webmaster Team in designing and making IEEE SB website.Managed the working reports and conducted ideathons and technical event at campus.Worked as a Webinar Co-ordinator in IEEE Computer Society BMSIT and volunteered in so many events conduct by IEEE SB.",
                " Utilized the data to find the issues using Topic Modelling and Building models using LSTM, BERT to predict the sentiments of the youth.",
              ]}
            />
            <Resumecontent
              title="Student Coordinator"
              date="Sept 2019 – Feb 2020"
              content={[
                "Managed the events conducted and reviewed students projects, quizzes, codes.Also Participated in some events.",
                " As being student coordinator,i handled the conduction of the events conducted by Institute Innovation Council ",
              ]}
            />
            <h3 className="resume-title">Extracurricular Activities</h3>
            <Resumecontent
              title="Best Student Partners Of Cognizance 2019 by Cognizance IIT Roorkie."
              content={[
                "",
              ]}
            />
            <Resumecontent
              title="Best Volunteer by IEEE BMSIT Student Branch."
              content={[
                "",
              ]}
            />
            <Resumecontent
              title="Won Best Domain Name Prize in HackInOut 7.0"
              content={[
                "",
              ]}
            />
            <Resumecontent
              title="Participated in RowdyHacks 2021 and Local Hack Day at MLH."
              content={[
                "",
              ]}
            />
          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Education</h3>
            <Resumecontent
              title="B.E. Electronics and Communication [BMSIT , Bangalore] "
              date="2018 - Present"
              content={[`CGPA: 8.6 (Till 5th Sem)`]}
            />
            <Resumecontent
              title="12TH BOARD [Theosophical Inter College,Uttar Pradesh]"
              date="2015 - 2017"
              content={["Precentage: 88.2%"]}
            />
            <Resumecontent
              title="10TH BOARD [Theosophical Inter College,Uttar Pradesh] "
              date="2005 - 2015"
              content={["Precentage: 87.8%"]}
            />
            <h3 className="resume-title">Ranks and Achivements</h3>
            <Resumecontent
              title=""
              content={[
                // `Current rank in Spoj ${spojRank}`,
                `Current score in GeeksforGeeks  440+`,
                "Stars on CODECHEF 3⭐",
                "Stars on HackerRank in C++ and Problem Solving 4⭐",
                "Project Idea Featured in IEEE Bangalore NewsLetter",
              ]}
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
          <AiOutlineDownload />&nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;
