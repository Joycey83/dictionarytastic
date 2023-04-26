import { useState } from "react";
import axios from "axios";
import styles from "../components/Dictionary.module.css";

const Dictionary = () => {
  return (
    <>
      <div className={styles["dictionary--container"]}>
        <section>
          <form>
            <input
              type="search"
              placeholder="Search for a word"
              autoFocus={true}
              className="form-control search-input"
              onChange={inputKeywordHandle}
            />
          </form>
        </section>
      </div>
    </>
  );
};
export default Dictionary;
