import Button from "../Button";

import HeroImg from "../../assets/illustration-working.svg";

import classes from "./index.module.css";

const Hero = () => {
  return (
    <section className={classes.hero}>
      <div>
        <h1>More than just shorter links</h1>
        <p>
          Build your brand's recognition and get detailed insights on how your
          links are performing
        </p>
        <Button>Get Started</Button>
      </div>
      
      <div className={classes.imgContainer}>
        <img src={HeroImg} alt="hero" />
      </div>
    </section>
  );
};

export default Hero;
