import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";

import PortfolioItem from "./PortfolioItem";
import SectionSubtitle from "./SectionSubtitle";

import classes from "../../styles/portfolio.module.css";

const Portfolio = ({ dataPortfolio }) => {
  const [filter, setFilter] = useState("Web");
  const [data, setData] = useState();

  useEffect(() => {
    if (filter === "Mobile App") {
      const filteredData = dataPortfolio?.filter(
        (item) => item.category === filter
      );

      setData(filteredData);
    }

    if (filter === "Web") {
      const filteredData = dataPortfolio?.filter(
        (item) => item.category === filter
      );

      setData(filteredData);
    }
  }, [filter, dataPortfolio]);

  const active = `${classes.tab__btn__active}`;

  return (
    <section id="portfolio">
      <Container>
        <Row>
          <Col lg="6" md="6" className="mb-5">
            <SectionSubtitle subtitle=" My portfolio" />
          </Col>

          <Col lg="6" md="6">
            <div className={`${classes.tab__btns} text-end`}>
              <button
                className={`${
                  filter === "Web" ? active : ""
                } secondary__btn text-white`}
                onClick={() => setFilter("Web")}
              >
                Web Development
              </button>
              <button
                className={` ${
                  filter === "Mobile App" ? active : ""
                } secondary__btn text-white`}
                onClick={() => setFilter("Mobile App")}
              >
                App Development
              </button>
            </div>
          </Col>

          {data?.map((item) => (
            <Col lg="4" md="4" sm="6" key={item.id}>
              <PortfolioItem {...item} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Portfolio;
