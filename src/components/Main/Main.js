import React, { Component } from "react";
import taco from "./images/thumbnail-taco.jpg";
import filmsy from "./images/thumbnail-filmsy.png";
import mud from "./images/thumbnail-mud.png";
import notes from "./images/thumbnail-notes.png";
import posed from "react-pose";
import SplitText from "react-pose-text";
import "./Main.css";

const Img = posed.img({
  hoverable: true,
  pressable: true,
  init: {
    scale: 1,
    boxShadow: "0px 0px 0px rgba(0,0,0,0)"
  },
  hover: {
    scale: 1.1,
    boxShadow: "0px 5px 10px rgba(0,0,0,0.2)",
    zIndex: 10
  },
  press: {
    scale: 1.2,
    boxShadow: "0px 2px 5px rgba(0,0,0,0.1)"
  }
});

const charPoses = {
  exit: { y: 20, opacity: 0 },
  enter: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 700,
      ease: "linear"
    }
  }
};

const Icon = posed.div({
  hoverable: true,
  pressable: true,
  init: {
    scale: 1
  },
  hover: {
    scale: 1.1
  },
  press: {
    scale: 1.2
  }
});

class Main extends Component {
  render() {
    return (
      <div className="main-container">
        <div className="banner">
          <div className="banner-text">
            <h1>
              <SplitText initialPose="exit" pose="enter" charPoses={charPoses}>
                Full Stack Web Developer
              </SplitText>
            </h1>
            <h3>
              <SplitText initialPose="exit" pose="enter" charPoses={charPoses}>
                There's nothing else I'd rather be doing.
              </SplitText>
            </h3>
          </div>
        </div>
        <div className="summary">
          <div className="summary-text">
            <h2>Good morning, afternoon, or evening. I'm Benny.</h2>
            <p>
              My love for tech began in my youth but my passion for web
              development began with the first bootcamp I completed at my
              college. After a lot of thought I decided to join a fulltime Full
              Stack Web Development course at Lambda School. This is where my
              passion grew immensely as I got to see and work with both the
              front-end and back-end portions of web applications. I had the
              opportunity to develop projects with others and on my own.
            </p>
          </div>
        </div>
        <div className="skills">
          <div className="skills-wrapper">
            <div
              className="skill"
              data-aos="fade-right"
              data-aos-anchor-placement="center-bottom"
            >
              <div className="skill-text">
                <i class="fa fa-code fa-3x" aria-hidden="true" />
                <h3>Front-end</h3>
                <h4>I like to be able to animate my ideas into the browser</h4>
                <p>
                  Tools:
                  <br />
                  HTML <br />
                  CSS <br />
                  JavaScript <br />
                  React <br />
                  Redux <br />
                  LESS <br />
                </p>
              </div>
            </div>
            <div
              className="skill"
              data-aos="fade-left"
              data-aos-anchor-placement="center-bottom"
              data-aos-delay="200"
            >
              <div className="skill-text">
                <i class="fa fa-server fa-3x" aria-hidden="true" />
                <h3>Back-end</h3>
                <h4>Every good front-end needs a good back-end</h4>
                <p>
                  Tools:
                  <br />
                  Node.js <br />
                  Express.js <br />
                  Knex <br />
                  SQL <br />
                  Python <br />
                  Django <br />
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="projects">
          <div className="projects-title">
            <h1 data-aos="fade-up">Recent Work</h1>
          </div>
          <div className="projects-wrapper">
            <div className="project" data-aos="zoom-in" data-aos-delay="200">
              <a href="https://taco-run-c453f.firebaseapp.com/" target="_blank">
                <Img src={taco} />
              </a>
            </div>
            <div className="project" data-aos="zoom-in">
              <a href="https://filmsy.netlify.com/" target="_blank">
                <Img src={filmsy} />
              </a>
            </div>
          </div>
        </div>
        <div className="footer">
          <div className="footer-text">
            <h4>
              Make sure to take a quick look at my github for more projects and
              source code. I am constantly thinking of new ideas so expect more
              additions.
            </h4>
            <div classname="footer-icons">
              <a href="https://github.com/bennyo27" target="_blank">
                <Icon class="fab fa-github fa-2x" aria-hidden="true" />
              </a>
              <a href="https://angel.co/benny-oseguera" target="_blank">
                <Icon class="fab fa-angellist fa-2x" aria-hidden="true" />
              </a>
              <a
                href="https://www.linkedin.com/in/benny-oseguera-1625b5165/"
                target="_blank"
              >
                <Icon class="fab fa-linkedin fa-2x" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
