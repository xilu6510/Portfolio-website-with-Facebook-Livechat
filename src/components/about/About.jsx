import React from "react";
import "./about.css";

const About = () => {
  return (
    <section className="about container section" id="about">
      <h2 className="section-title">- About Me</h2>
      {/* <p className="des">(let me introduce myself to you (ﾟ▽ﾟ)/)</p> */}
      <div class="letter-container">
        <p className="cover-letter">Hi,</p>
        <p className="cover-letter">
          I am writing to express my strong interest in the Front-end Developer
          position. With a Master of Information Technology in Computer Science
          from the University of Sydney, I bring a solid educational foundation
          and around 3 years of experience in front-end web development.
          Throughout my career, with a strong foundation in WordPress development
          and recent experience utilizing React, APIs, and Firebase in three 
          significant projects (you can find on my github account),I am eager 
          to bring my skills and passion for front-end development.
        </p>
        <p className="cover-letter">
          Over the past two years, I have honed my skills as a WordPress developer, 
          successfully creating full-stack websites that not only meet but exceed 
          client expectations. My experience in WordPress development has equipped 
          me with a deep understanding of web development principles, including 
          HTML, CSS, JavaScript, and PHP.
        </p>
        <p className="cover-letter">
          What sets me apart is my agile mindset, quick learning ability, and
          self-motivation. I take great pride in ownership of my work and am
          known for my creative problem-solving skills. I am passionate about
          software development and am dedicated to crafting exceptional mobile
          and web applications that delight users.
        </p>
        <p className="cover-letter">
          I am comfortable working independently and have a proven ability to
          conduct in-depth research to solve complex technical problems.
          Moreover, I am a team player with excellent collaboration skills, and
          I thrive in fast-paced, culturally diverse, and globally distributed
          team environments.
        </p>
        <p className="cover-letter">
          Thank you for your valuable time and attention in reviewing this
          letter thus far.
        </p>
        <p>Kind Regards,</p>
        <p>Lucy</p>
      </div>
    </section>
  );
};

export default About;
