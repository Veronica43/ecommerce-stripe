import React from "react";

import { urlFor } from "../lib/client";

const HeroBanner = ({ heroBanner }) => {
  return (
    <div className="hero-banner-container">
      <div>
        <p className="small-text">{heroBanner.smallText}</p>

        <h3>{heroBanner.largeText1}</h3>
        <h1>{heroBanner.largeText2}</h1>
        <img
          src={urlFor(heroBanner.image)}
          alt="Bruce Springsteen"
          className="hero-banner-image"
        />

        <div>
          <div className="desc">
            <p>{heroBanner.desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
