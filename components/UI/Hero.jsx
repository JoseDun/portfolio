import React from "react";

import SectionSubtitle from "./SectionSubtitle";
import { Container, Row, Col } from "reactstrap";
import Image from "next/image";

import heroImg from "../../public/images/profile.jpg";
import classes from "../../styles/hero.module.css";
import classesContact from "../../styles/contact.module.css";

import ServicesItem from "./ServicesItem";
import Link from "next/link";

const Hero = () => {
  return (
    <section className={`${classes.hero}`}>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <aside className={`${classes.hero__content}`}>
              <div>
                <SectionSubtitle subtitle="Welcome" />
                <div className={`${classesContact.social__links}`}>
                  <div className={`${classesContact.contact_icon}`}>
                    <Link href="https://github.com/JoseDun">
                      <a target="_blank" aria-label="link to github">
                        <i className="ri-github-line" />
                      </a>
                    </Link>
                  </div>

                  <div className={`${classesContact.contact_icon}`}>
                    <Link href="https://www.linkedin.com/in/josedunsh/">
                      <a target="_blank" aria-label="link to linkedin">
                        <i className="ri-linkedin-line" />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>

              <h1 className="mt-3 mb-3">I&apos;m José Dun</h1>
              <h5 className="mb-4">Full-Stack Developer</h5>

              <p>
                Nearly 3 years of experience working on web applications remotely using the agile methodology with JavaScript, React.js, Next.js, Node.js, Express.js, TypeScript and React Native.
                <br />
                During this time, I have honed my skills in agile development,
                effective communication, and problem-solving to deliver
                high-quality projects on time.
              </p>
            </aside>

            <div className={`${classes.hero__container}`}>
              <ServicesItem title="Web Development" icon="ri-computer-line" />
              <ServicesItem title="App Development" icon="ri-apps-line" />
            </div>
          </Col>

          <Col lg="6" md="6">
            <aside className={`${classes.hero__img} text-end`}>
              <Image
                alt="hero-image"
                src={heroImg}
                width="400"
                height="400"
                priority={true}
                placeholder="blur"
              >
                {/* <h5 className="mt-3 mb-3">Telecommunication engineer</h5> */}
              </Image>
            </aside>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
