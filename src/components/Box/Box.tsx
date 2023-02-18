import React from "react";
import TBoxProps from "./Box.type";
import styles from "./BoxStyles.module.scss";

const Box = ({ status = "empty", children }: TBoxProps) => {
  return <div className={styles["box"]}>{children}</div>;
};

export default Box;
