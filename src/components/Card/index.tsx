import classes from "./index.module.css";

type StatType = {
  icon: string;
  name: string;
  desc: string;
};

type StatProps = {
  stat: StatType;
};

const Card = ({ stat }: StatProps) => {
  return (
    <div className={classes.container}>
      <img src={stat.icon} alt={stat.name} />
      <h4>{stat.name}</h4>
      <p>{stat.desc}</p>
    </div>
  );
};

export default Card;
