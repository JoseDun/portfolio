import React from "react";
import { Container, Row, Col } from "reactstrap";

import SectionSubtitle from "./SectionSubtitle";
import Article from "./Article";

import classes from "../../styles/about.module.css";

const About = () => {
  return (
    <section id="about">
      <Container className={`${classes.about__container}`} >
        <Row>
          <Col lg="6" className={`${classes.about__content}`} >
            <aside>
              <SectionSubtitle subtitle="About me" />
              {/* <h3 className="mt-4">Experiences,</h3>
              <h3 className="mb-4">and a little more about me.</h3> */}
              <p>
                {/* I&apos;m José Dun, I&apos;m 29 years old. <br /> Nearly 3 years
                of experience as a frontend developer. */}
                I&apos;ve been interested in technology since my
                childhood and I studied telecommunications engineering but my
                passion for programming grew over time, leading me to transition
                to software development after graduating.
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
                    Search a Lot
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
            </aside>
          </Col>

          <Col>
            <aside className={`${classes.timeline}`}>
              <Article
                text={`
                1. A Back Office was developed where the sambilonline.com store is managed.
                2. Creating API REST in node using express.
                3. Integration with backend through API REST.
                4. Implementation of new features.
                5. Work with SCRUM methodology.
                6. Use of libraries such as: express, redux, MUI, axios, i18next, react router`}
                company="LogosCorp"
                initialYear="April. 2023"
                endYear="Act."
                title="Full-Stack Developer"
              />
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
                endYear="march. 2023"
                title="Frontend Developer"
              />
              <Article
                company="freelancer"
                endYear="sept. 2022"
                initialYear="sept. 2021"
                text={`RESPONSIBILITIES

                1. Carrying out outsourced work for a couple of companies that are dedicated to the retail sector, which consisted of developing new functionalities in their platform under ReactJS.
                2. Develop new features in a couple of projects using ReactJS, Tailwind CSS, and sass.
                3. Develop Responsive web design.
               
               KEY ACCOMPLISHMENTS
               
                1. Implement responsive design to the web page.
                2. Change server calls to modern code.
                3. Interface changes in the purchase section.
                4. Create new catalog section.
                5. Adopted a SCRUM methodology for project management and collaborated effectively with cross functional teams to deliver high-quality and well-designed products within tight deadlines.`}
                title="Frontend Developer"
              />
            </aside>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
