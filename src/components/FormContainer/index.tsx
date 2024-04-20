import { useState } from "react";

import Button from "../Button";

import { shortenUrl } from "../../lib/utils";

import classes from "./index.module.css";

const FormContainer = () => {
  const [value, setValue] = useState("");
  const [data, setData] = useState("");

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const data = await shortenUrl(value);
    setData(data);
  };

  data && console.log(data);
  return (
    <section className={classes.container}>
      <form onSubmit={(e) => onSubmit(e)}>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Shorten a link here..."
        />
        <Button type="submit">Shorten it!</Button>
      </form>
    </section>
  );
};

export default FormContainer;
