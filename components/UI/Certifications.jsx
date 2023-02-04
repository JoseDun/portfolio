import React from "react";
import { Container, Row, Col } from "reactstrap";
import Slider from "react-slick";

import SectionSubtitle from "./SectionSubtitle";
import Certs from "./Certs";

const Certifications = ({ data }) => {
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
              {data.map(({ img, id }) => (
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
