import React from "react";
import classes from "../../styles/subtitle.module.css";

const SectionSubtitle = ({ subtitle }) => {
  return <h5 className={`${classes.section__subtitle}`}>{subtitle}</h5>;
};

export default SectionSubtitle;
