import React from "react";

import classes from "../../styles/article.module.css";

const Article = ({ title, company, text, initialYear, endYear }) => {
  const textLines = text?.split("\n");
  return (
    <article className={`${classes.timeline_item}`}>
      <p className={`${classes.tl_duration}`}>
        {initialYear}-{endYear}
      </p>
      <h5>
        {title}
        <span> {company}</span>
      </h5>
      {textLines.map((line, index) => (
        <p key={index}>{line}</p>
      ))}
    </article>
  );
};

export default Article;
