import { useState } from "react";
import toast from "react-hot-toast";
import isURL from "validator/lib/isURL";
import { m } from "framer-motion";

import Button from "../Button";

import { Data, shortenUrl } from "../../lib/api";
import { copyToClipBoard } from "../../lib/utils";
import { formContainerVariants } from "../../lib/animations";

import classes from "./index.module.css";

interface ICopyState {
  [key: number]: string;
}

const FormContainer = () => {
  const [value, setValue] = useState<string>("");
  const [copyState, setCopyState] = useState<ICopyState>({});
  const [data, setData] = useState<Data[]>([]);

  const handleCopy = (str: string, index: number) => {
    try {
      copyToClipBoard(str);
      toast.success("URL copied to clipboard");

      setCopyState((prevState) => ({
        ...prevState,
        [index]: "Copied",
      }));

      // Reset the copy state after a delay
      setTimeout(() => {
        setCopyState((prevState) => ({
          ...prevState,
          [index]: "Copy",
        }));
      }, 1000);
    } catch (error) {
      alert((error as Error)?.message);
      toast.error("Failed to copy URL to clipboard");
    }
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!isURL(value)) {
      toast.error("Not a valid URL");
      return;
    } else {
      console.log("Valid URL");
      const result = await shortenUrl(value);
      if (result !== undefined) {
        setData((prevData) => [...prevData, { ...result }]);
      }
    }
  };

  return (
    <>
      <m.section
        variants={formContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className={classes.container}
      >
        <form onSubmit={onSubmit}>
          <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Shorten a link here..."
          />
          <Button type="submit">Shorten it!</Button>
        </form>
      </m.section>

      <div className={classes.resultContainer}>
        {data.length > 0
          ? data.map((item, index) => (
              <div key={item?.hash} className={classes.resultItem}>
                <div>
                  <p>{item?.long_url}</p>
                </div>
                <div className={classes.btnContainer}>
                  <p>{item?.short_url}</p>
                  <Button onClick={() => handleCopy(item?.short_url, index)}>
                    {copyState[index] || "Copy"}
                  </Button>
                </div>
              </div>
            ))
          : null}
      </div>
    </>
  );
};

export default FormContainer;
