import { stats } from "../../lib/utils";
import Card from "../Card";
import classes from "./index.module.css";

const Stats = () => {
  return (
    <div className={classes.container}>
      <h2>Advanced Statistics</h2>
      <p>
        Track how your links are performing across the web with our advanced
        statistics dashboard
      </p>

      <div className={classes.cardContainer}>
        {stats.map((stat, index) => (
          <Card key={index} stat={stat} />
        ))}
      </div>
    </div>
  );
};

export default Stats;
