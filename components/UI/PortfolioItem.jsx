import React from "react";
import Image from "next/image";
import Link from "next/link";

import classes from "../../styles/portfolio-item.module.css";

const PortfolioItem = ({ title, img, liveUrl, keyword }) => {
  return (
    <div className={`${classes.portfolio__item}`}>
      <div className="bg-transparent">
        <h6>{title}</h6>

        <div className={`${classes.portfolio__box}`}>
          {keyword.map((item, index) => (
            <span className={`${classes.portfolio__keyword}`} key={index}>
              {item}
            </span>
          ))}
        </div>
      </div>

      <div className={`${classes.portfolio__img}`}>
        <Image
          alt="portfolio-img"
          src={img}
          width="500"
          height="250"
          layout="responsive"
          objectFit="contain"
        />
      </div>

      <div className={`${classes.portfolio__live} bg-transparent`}>
        <button className="primary__btn">
          <Link href={liveUrl}>
            <a target="_blank">Go</a>
          </Link>
        </button>
      </div>
    </div>
  );
};

export default PortfolioItem;
