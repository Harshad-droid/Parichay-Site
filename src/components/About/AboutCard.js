import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hey Peeps, I am <span className="purple">Harshad Bhatt </span>
            from <span className="purple"> Karnataka, India.</span>
            <br />I am a junior pursuing Bachelors of Engineering in Electronics and Communication in BMSIT
            Bangalore.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Travelling 
            </li>
            <li className="about-activity">
              <ImPointRight /> Read about International Realations
            </li>
            <li className="about-activity">
              <ImPointRight /> Perform Mimicry
            </li>
          </ul>

          <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            "Believe in yourself & you will be unstoppable !"{" "}
          </p>
          <footer className="blockquote-footer">Harshad</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
