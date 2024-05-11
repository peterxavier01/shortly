import { m } from "framer-motion";

import Button from "../Button";

import HeroImg from "../../assets/illustration-working.svg";

import { heroImgVariants, heroTextVariants } from "../../lib/animations";

import classes from "./index.module.css";

const Hero = () => {
  return (
    <section className={classes.hero}>
      <m.div variants={heroTextVariants} initial="hidden" animate="visible">
        <h1>More than just shorter links</h1>
        <p>
          Build your brand's recognition and get detailed insights on how your
          links are performing
        </p>
        <Button>Get Started</Button>
      </m.div>

      <m.div
        variants={heroImgVariants}
        initial="hidden"
        animate="visible"
        className={classes.imgContainer}
      >
        <img src={HeroImg} alt="hero" />
      </m.div>
    </section>
  );
};

export default Hero;
