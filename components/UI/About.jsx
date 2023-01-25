import React from "react";
import { Container, Row, Col } from "reactstrap";

import SectionSubtitle from "./SectionSubtitle";

import classes from "../../styles/about.module.css";
import Article from "./Article";

const About = () => {
  return (
    <section id="about">
      <Container>
        <Row>
          <Col lg="6" className={`${classes.about__content}`}>
            <SectionSubtitle subtitle="About me" />
            <h3 className="mt-4">Experiences,</h3>
            <h3 className="mb-4">and a little more about me.</h3>
            <p>
              I&apos;m Jose Dun, I&apos;m 27 years old. <br /> I have +1 year of
              experience as a frontend developer.
              <br /> I&apos;ve been interested in technology since my childhood
              and I studied telecommunications engineering but my passion for
              programming grew over time, leading me to transition to software
              development.
            </p>

            <div className="d-flex align-items-center gap-5">
              <div>
                <h6 className="d-flex align-items-center gap-2 mt-3 fw-normal">
                  <span className={`${classes.about__icon}`}>
                    <i className="ri-checkbox-circle-line"></i>
                  </span>
                  Problem Solving
                </h6>

                <h6 className="d-flex align-items-center gap-2 mt-3 fw-normal">
                  <span className={`${classes.about__icon}`}>
                    <i className="ri-checkbox-circle-line"></i>
                  </span>
                  Search A Lot
                </h6>
              </div>

              <div>
                <h6 className="d-flex align-items-center gap-2 mt-3 fw-normal">
                  <span className={`${classes.about__icon}`}>
                    <i className="ri-checkbox-circle-line"></i>
                  </span>
                  Creative Idea
                </h6>

                <h6 className="d-flex align-items-center gap-2 mt-3 fw-normal">
                  <span className={`${classes.about__icon}`}>
                    <i className="ri-checkbox-circle-line"></i>
                  </span>
                  High Quality
                </h6>
              </div>
            </div>
          </Col>
          <Col>
            <section className={`${classes.timeline}`}>
              <Article
                text={`Development of a new fintech mobile application in react native.
                1. Implementation of new features.
                2. Integration with backend through API REST.
                3. Work with SCRUM methodology.
                Development of the Back Office in which the mobile app will be administered.
                1. Integration with backend through API REST.
                2. Use of libraries such as: react query, Bootstrap, axios, i18next, react router`}
                company="md-develop"
                initialYear="sept. 2022"
                endYear="Present"
                title="Frontend Developer"
              />
              <Article
                company="freelancer"
                endYear="sept. 2022"
                initialYear="ene. 2022"
                text={`Develop new features in a couple of projects using React.js, work with Tailwind CSS,  sass , Responsive Web Design, Material-UI ,Bootstrap, and work with SCRUM.`}
                title="Frontend Developer"
              />
              <Article
                text={`Carrying out outsourced work for a couple of companies that are dedicated to the retail sector in Venezuela, which consisted of developing new functionalities in their platform under react js.
                1. Implement responsive design to the web page.
                2. Change server calls to modern code.
                3. Interface changes in the purchase section.
                4. Create new catalog section.`}
                company="freelancer"
                initialYear="sept. 2021"
                endYear="dic. 2021"
                title="Frontend Developer"
              />
            </section>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
