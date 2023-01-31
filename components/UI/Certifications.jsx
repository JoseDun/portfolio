import React from "react";
import { Container, Row, Col } from "reactstrap";

import SectionSubtitle from "./SectionSubtitle";

import Slider from "react-slick";

import Certs from "./Certs";
import { certsData } from "../data/certs";

const Certifications = () => {
  const settings = {
    dots: false,
    autoplay: true,
    speed: 1500,
    autoplaySpeed: 1500,
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
              {certsData.map(({ img, id }) => (
                <Certs img={img} key={id} />
              ))}
            </Slider>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Certifications;
