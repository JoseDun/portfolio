import React from "react";
import Image from "next/image";

const Certs = ({ img }) => {
  return (
    <div className="d-flex justify-content-center">
      <Image
        alt="client-img"
        src={img}
        width="550"
        height="450"
        className="rounded-2"
        objectFit="contain"
      />
    </div>
  );
};

export default Certs;
