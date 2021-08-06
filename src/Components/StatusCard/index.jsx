import React from "react";
import styles from "./styles.module.css";

const StatusCard = ({ message }) => {
  return <span className={styles.statusText}>{message}</span>;
};

export default StatusCard;
