import React, { Suspense } from "react";
import "./hero.css";
import Speech from "./Speech";
import { motion } from "motion/react";
import Shape from "./Shape";

const awardVariants = {
  initial: {
    opacity: 0,
    x: -100,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.2,
    },
  },
};
const followVariants = {
  initial: {
    opacity: 0,
    y: -100,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.2,
    },
  },
};

const Hero = () => {
  return (
    <section id='home'>
      <div className='hero'>
        <div className='hSection left'>
          <motion.h1
            animate={{ y: [-100, 0], opacity: [0, 1] }}
            transition={{ duration: 1 }}
            className='hTitle'
          >
            Hi There, <br /> <span>I'm Seif 👋</span>
          </motion.h1>
          <motion.div
            variants={awardVariants}
            initial='initial'
            animate='animate'
            className='awards'
          >
            <motion.h2 variants={awardVariants}>Top Rated Developer</motion.h2>
            <motion.p variants={awardVariants}>
              Dedicated to crafting seamless and intuitive user experiences
              through innovative front-end development.
            </motion.p>
            <motion.div variants={awardVariants} className='awardList'>
              <motion.img
                variants={awardVariants}
                variant={awardVariants}
                src='/award1.png'
                alt='award1'
              />
              <motion.img
                variants={awardVariants}
                src='/award2.png'
                alt='award2'
              />
              <motion.img
                variants={awardVariants}
                src='/award3.png'
                alt='award3'
              />
            </motion.div>
          </motion.div>
          <motion.a
            animate={{
              y: [0, 5],
              opacity: [0, 1, 0],
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            href='#services'
            className='scroll'
          >
            <svg
              width='50px'
              height='50px'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M5 9C5 5.13401 8.13401 2 12 2C15.866 2 19 5.13401 19 9V15C19 18.866 15.866 22 12 22C8.13401 22 5 18.866 5 15V9Z'
                stroke='white'
                strokeWidth='1'
              />
              <motion.path
                animate={{
                  y: [5, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                d='M12 5V8'
                stroke='white'
                strokeWidth='1'
                strokeLinecap='round'
              />
            </svg>
          </motion.a>
        </div>
        <div className='hSection right'>
          {/* Follow */}
          <motion.div
            variants={followVariants}
            initial='initial'
            animate='animate'
            className='follow'
          >
            <motion.a variants={followVariants} href='/'>
              <img src='/instagram.png' alt='' />
            </motion.a>
            <motion.a variants={followVariants} href='/'>
              <img src='/facebook.png' alt='' />
            </motion.a>
            <motion.a variants={followVariants} href='/'>
              <img src='/youtube.png' alt='' />
            </motion.a>
            <motion.div
              variants={followVariants}
              className='followTextCaontainer'
            >
              <div className='followText'>Follow Me</div>
            </motion.div>
          </motion.div>
          {/* Bubble */}
          <Speech />
          {/* Certificate */}
          <motion.div
            className='certificate'
            animate={{ opacity: [0, 1], transition: { duration: 1 } }}
          >
            <img src='/certificate.png' alt='' />
            LMA CERTIFICED
            <br />
            PROFESSIONAL
            <br />
            UI DESIGNER
          </motion.div>
          {/* Contact Button */}
          <motion.a
            animate={{
              x: [200, 0],
              opacity: [0, 1],
              transition: { duration: 2 },
            }}
            href='#contact'
            className='contactLink'
          >
            <motion.div
              animate={{
                rotate: [0, 360],
                transition: {
                  duration: 10,
                  repeat: Infinity,
                  ease: "linear",
                },
              }}
              className='contactButton'
            >
              <svg viewBox='0 0 200 200' width='150' height='150'>
                <circle cx='100' cy='100' r='90' fill='pink' />
                <path
                  id='innerCirclePath'
                  fill='none'
                  d='M 100,100 m -60,0 a 60,60 0 1,1 120,0 a 60,60 0 1,1 -120,0'
                />
                <text className='circleText'>
                  <textPath href='#innerCirclePath'>Hire Now •</textPath>
                </text>
                <text className='circleText'>
                  <textPath href='#innerCirclePath' startOffset={"45%"}>
                    Contact Me •
                  </textPath>
                </text>
              </svg>
              <div className='arrow'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 24 24'
                  width='50'
                  height='50'
                  fill='none'
                  stroke='black'
                  strokeWidth='2'
                >
                  <line x1='6' y1='18' x2='18' y2='6' />
                  <polyline points='9 6 18 6 18 15' />
                </svg>
              </div>
            </motion.div>
          </motion.a>
        </div>
        <div className='bg'>
          <Suspense fallback={"Loading..."}>
            <Shape />
          </Suspense>
          <div className='hImg'>
            <img src='/hero.png' alt='' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
