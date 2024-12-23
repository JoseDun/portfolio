import React from "react";

import Link from "next/link";
import { Container, Row, Col } from "reactstrap";

import classes from "../../styles/footer.module.css";

const NAV__LINK = [
  {
    path: "/",
    display: "Home",
  },
/*   {
    path: "#portfolio",
    display: "Portfolio",
  }, */
  {
    path: "#about",
    display: "About",
  },
  {
    path: "#Certifications",
    display: "Certifications",
  },
  {
    path: "#contact",
    display: "Contact",
  },
];

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer>
      <Container>
        <Row>
          <Col lg="6" className={`${classes.footer__top}`}>
            <div className={`${classes.nav__menu}`}>
              {NAV__LINK.map((item, index) => (
                <Link href={item.path} key={index}>
                  {item.display}
                </Link>
              ))}
            </div>
          </Col>

          <Col lg="12">
            <div className={`${classes.footer__copyright}`}>
              <p>&copy; {year} - Developed by José Dun.</p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
