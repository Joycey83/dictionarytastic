import Meaning from "./Meaning";
import Phonetic from "./Phonetic";
import styles from "../components/SearchResult.module.css";

const SearchResult = (props) => {
  if (props.definition) {
    return (
      <div className={styles["search--research"]}>
        <section className={styles["results--container"]}>
          <h1>{props.definition.word}</h1>

          {props.definition.phonetics.map((phonetic, index) => {
            return (
              <div key={index}>
                <Phonetic phonetic={phonetic} />
              </div>
            );
          })}
        </section>

        {props.definition.meanings.map(function (meaning, index) {
          return (
            <section key={index} className={styles["definition--section"]}>
              <Meaning meaning={meaning} />
            </section>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
};
export default SearchResult;
