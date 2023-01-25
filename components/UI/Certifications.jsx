import React from "react";
import { Container, Row, Col } from "reactstrap";

import SectionSubtitle from "./SectionSubtitle";

import cert from "../../public/images/certs/diploma-react-practico_page-0001.jpg";
import cert1 from "../../public/images/certs/diploma-frontend-developer_page-0001.jpg";
import Slider from "react-slick";

import Certs from "./Certs";

const Certifications = () => {
  const settings = {
    dots: false,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 1200,
    infinite: true,
    swipeToSlide: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <section id="Certifications">
      <Container>
        <Row>
          <Col lg="12" md="12">
            <SectionSubtitle subtitle="Certifications" />
            <Slider {...settings}>
              <Certs img={cert} />
              <Certs img={cert1} />
            </Slider>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Certifications;
