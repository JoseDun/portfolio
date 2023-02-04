import React from "react";
import Image from "next/image";

const Certs = ({ img }) => {
  return (
    <article className="d-flex justify-content-center">
      <Image
        alt="client-img"
        src={img}
        width="550"
        height="450"
        className="rounded-2"
        objectFit="contain"
      />
    </article>
  );
};

export default Certs;
