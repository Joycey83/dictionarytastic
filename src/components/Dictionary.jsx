import { useState } from "react";
import axios from "axios";
import styles from "../components/Dictionary.module.css";

const Dictionary = () => {
  return (
    <>
      <div className={styles["dictionary--container"]}>
        <h2>My dictionary</h2>
      </div>
    </>
  );
};
export default Dictionary;
