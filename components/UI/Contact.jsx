import React from "react";
import { Container, Row, Col } from "reactstrap";
import Link from "next/link";
import SectionSubtitle from "./SectionSubtitle";

import classes from "../../styles/contact.module.css";

import Form from "./Form";

const Contact = () => {
  return (
    <section id="contact" className={`${classes.contact}`}>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <SectionSubtitle subtitle="Contact me" />
           {/*  <h3 className="mt-4 mb-4">Contact with me</h3> */}
            <p>
              Get in touch with me to discuss your job opening and how my skills
              and experience align with your company&apos;s needs. I am excited
              to learn more about the opportunity and how I can contribute to
              your team&apos;s success. Please feel free to contact me via email
              or phone to schedule an interview. Thank you for considering me
              for this position.
            </p>

            <ul className={`${classes.contact__info__list}`}>
              <li className={`${classes.info__item}`}>
                <span>
                  <i className="ri-map-pin-line"></i>
                </span>
                <p>Venezuela</p>
              </li>
              <li className={`${classes.info__item}`}>
                <span>
                  <i className="ri-mail-line"></i>
                </span>
                <p>josedunsh@gmail.com</p>
              </li>
              <li className={`${classes.info__item}`}>
                <span>
                  <i className="ri-phone-line"></i>
                </span>
                <p>+58 412 45 27 328</p>
              </li>
            </ul>

            <div className={`${classes.social__links}`}>
              <div className={`${classes.contact_icon}`}>
                <Link href="https://github.com/JoseDun">
                  <a target="_blank" aria-label="link to github">
                    <i className="ri-github-line" />
                  </a>
                </Link>
              </div>

              <div className={`${classes.contact_icon}`}>
                <Link href="https://www.linkedin.com/in/josedunsh/">
                  <a target="_blank" aria-label="link to linkedin">
                    <i className="ri-linkedin-line" />
                  </a>
                </Link>
              </div>
            </div>
          </Col>

          <Col lg="6" md="6">
            <Form />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
