import React from "react";

import SectionSubtitle from "./SectionSubtitle";
import { Container, Row, Col } from "reactstrap";
import Image from "next/image";

import heroImg from "../../public/images/profile.png";
import classes from "../../styles/hero.module.css";

import ServicesItem from "./ServicesItem";

const Hero = () => {
  return (
    <section className={`${classes.hero}`}>
      <Container>
        <Row>
          {/* ========== hero content ============= */}

          <Col lg="6" md="6">
            <div className={`${classes.hero__content}`}>
              <SectionSubtitle subtitle="Welcome" />

              <h2 className="mt-3 mb-3">I&apos;m José Dun</h2>
              <h5 className="mb-4">Frontend Developer</h5>

              <p>
                +1 year experience working on web applications remotely for
                clients in Colombia using the scrum methodology with React and
                React Native.
                <br />
                During this time, I have honed my skills in Agile development,
                effective communication, and problem-solving to deliver
                high-quality projects on time
              </p>
            </div>

            <div className={`${classes.hero__container}`}>
              <ServicesItem title="Web Development" icon="ri-computer-line" />
              <ServicesItem title="App Development" icon="ri-apps-line" />
            </div>
            <div>
              <i className="ri-javascript-line"></i>
            </div>
          </Col>

          {/* ========== hero img ============= */}
          <Col lg="6" md="6">
            <div className={`${classes.hero__img} text-end`}>
              <Image
                alt="hero-image"
                src={heroImg}
                width="400"
                height="400"
                priority={true}
                placeholder="blur"
              />
              <h5 className="mt-3 mb-3">Telecommunication engineer</h5>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
