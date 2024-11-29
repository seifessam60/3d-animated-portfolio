import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "motion/react";

const Speech = () => {
  return (
    <motion.div
      className='bubbleContainer'
      animate={{ opacity: [0, 1], transition: { duration: 1 } }}
    >
      <div className='bubble'>
        <TypeAnimation
          sequence={[
            // Same substring at the start will only be typed once, initially
            1000,
            "Front-end wizard with a knack for making pixels dance.",
            1000,
            "I debug code faster than a speeding bullet.",
            1000,
            "I write clean code and even cleaner jokes.",
            1000,
            "My code is so clean, it could pass a white-glove test.",
            1000,
          ]}
          deletionSpeed={60}
          repeat={Infinity}
        />
      </div>
      <img src='/man.png' alt='' />
    </motion.div>
  );
};

export default Speech;
