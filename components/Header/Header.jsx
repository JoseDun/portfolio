import React, { useRef, useEffect } from "react";

import Link from "next/link";
import { Container } from "reactstrap";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import classes from "../../styles/header.module.css";

const NAV__LINK = [
  {
    path: "/",
    display: "Home",
  },
  {
    path: "#portfolio",
    display: "Portfolio",
  },
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

const Header = () => {
  const headerRef = useRef(null);

  const menuRef = useRef(null);

  const headerFunc = () => {
    if (
      document.body.scrollTop > 80 ||
      document.documentElement.scrollTop > 80
    ) {
      headerRef.current.classList.add(`${classes.header__shrink}`);
    } else {
      headerRef.current.classList.remove(`${classes.header__shrink}`);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", headerFunc);

    return () => window.removeEventListener("scroll", headerFunc);
  }, []);

  const toggleMenu = () =>
    menuRef.current.classList.toggle(`${classes.menu__active}`);

  return (
    <header className={`${classes.header}`} ref={headerRef}>
      <ToastContainer
        position="top-right"
        autoClose={800}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        draggable
        className="toast-transparent"
      />
      <Container>
        <nav className={`${classes.nav__wrapper}`}>
          <div className={`${classes.logo}`}>
            <h2>
              <span>JD</span>
            </h2>
          </div>

          <div
            className={`${classes.navigation}`}
            ref={menuRef}
            onClick={toggleMenu}
          >
            <div className={`${classes.nav__menu}`}>
              {NAV__LINK.map((item, index) => (
                <Link href={item.path} key={index}>
                  {item.display}
                </Link>
              ))}

              <div className={`${classes.nav__right}`}>
                <p className=" d-flex align-items-center gap-2 mb-0 h6">
                  <i className="ri-phone-line"></i>+598 94 143 080 <br /> +58
                  412 45 27 328
                </p>
              </div>
            </div>
          </div>

          <span className={`${classes.mobile__menu}`}>
            <i className="ri-menu-line" onClick={toggleMenu}></i>
          </span>
        </nav>
      </Container>
    </header>
  );
};

export default Header;
