import { m } from "framer-motion";

import Card from "../Card";

import { stats } from "../../lib/utils";
import { statsTextVariants } from "../../lib/animations";

import classes from "./index.module.css";

const Stats = () => {
  return (
    <div className={classes.container}>
      <m.h2
        variants={statsTextVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        Advanced Statistics
      </m.h2>
      <m.p
        variants={statsTextVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        Track how your links are performing across the web with our advanced
        statistics dashboard
      </m.p>

      <div className={classes.cardContainer}>
        {stats.map((stat, index) => (
          <Card key={index} stat={stat} />
        ))}
      </div>
    </div>
  );
};

export default Stats;
