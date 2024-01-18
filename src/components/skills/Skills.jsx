import React from "react";
import "./skills.css";

const Skills = () => {
  return (
    <section className="skills container section" id="skills">
      <h2 className="section-title skill-section-title">
        - Skills & Certifications
      </h2>
      <div className="skill-certification skill-container">
        <div className="container-big">
          <div className="skill-list">
            <p className="skills-title">Languages:</p>
            <p clssName="skill-item">HTML, CSS, JavaScript, Java, Sass</p>
          </div>

          <div className="skill-list">
            <p className="skills-title">JavaScript Libraries:</p>
            <p clssName="skill-item">React, jQuery</p>
          </div>

          <div className="skill-list">
            <p className="skills-title">Framework:</p>
            <p clssName="skill-item">Bootstrap, React Native</p>
          </div>

          <div className="skill-list">
            <p className="skills-title">Databases:</p>
            <p clssName="skill-item">MySQL, MongoDB</p>
          </div>

          <div className="skill-list">
            <p className="skills-title">Softwares:</p>
            <p clssName="skill-item">
              Jira, Confluence, MS Office, Figma, Trello
            </p>
          </div>

          <div className="skill-list">
            <p className="skills-title">Systems:</p>
            <p clssName="skill-item">Windows, Mac OS X, Android, IOS</p>
          </div>

          <div className="skill-list">
            <p className="skills-title">Google:</p>
            <p clssName="skill-item">Google Analytics, Google Search Console</p>
          </div>

          <div className="skill-list">
            <p className="skills-title">CMS:</p>
            <p clssName="skill-item">
              WordPress, Wix, Webflow, Shopify, Salesforce
            </p>
          </div>
        </div>
        <div className="certification">
          <a href="https://freecodecamp.org/certification/luuuuuxi_/responsive-web-design">
            <p className="certi-title">- Responsive Web Design</p>
            <p className="certi-desc">
              <i className="fa-brands fa-free-code-camp"></i> freeCodeCamp
            </p>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Skills;
