import React from "react";
import "./services.css";
import { ComputerModel } from "./computer/ComputerModel";
import { Ps5Model } from "./ps5/Ps5Model";
import { MugModel } from "./mug/MugModel";

const Services = () => {
  return (
    <section id='services'>
      <div className='services'>
        <div className='sSection left'></div>
        <div className='sSection right'>
          {/* <ComputerModel /> */}
          {/* <Ps5Model /> */}
          <MugModel />
        </div>
      </div>
    </section>
  );
};

export default Services;
