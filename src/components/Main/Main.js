import React, { Component } from "react";
import filmsy from "./images/thumbnail-filmsy.png";
import "./Main.css";

class Main extends Component {
  render() {
    return (
      <div className="main-container">
        <div className="banner">
          <div className="banner-text">
            <h1>Full Stack Web Developer</h1>
            <h3>There's nothing else I'd rather be doing.</h3>
          </div>
        </div>
        <div className="summary">
          <div className="summary-text">
            <h2>Good morning, afternoon, or evening. I'm Benny.</h2>
            <p>
              Although, my love for tech began in my youth, my passion for web
              development began with the first bootcamp I completed at my
              college. After a lot of thought I decided to join a fulltime Full
              Stack Web Development course at another bootcamp. This is where my
              passion grew immensely as I got to see and work with both the
              front-end and back-end sides of web applications. I developed
              projects and even some that I am proud to say I created on my own.
            </p>
          </div>
        </div>
        <div className="skills">
          <div className="skills-wrapper">
            <div className="skill">
              <div className="skill-text">
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
            <div className="skill">
              <div className="skill-text">
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
          <div className="projects-wrapper">
            <div className="project">
              <img src={filmsy} />
            </div>
            <div className="project">
              <img src={filmsy} />
            </div>
            <div className="project">
              <img src={filmsy} />
            </div>
            <div className="project">
              <img src={filmsy} />
            </div>
          </div>
        </div>
        <div className="footer" />
      </div>
    );
  }
}

export default Main;
