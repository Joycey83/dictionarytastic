import styles from "../components/Synonyms.module.css";
const Synonyms = (props) => {
  if (props.synonyms) {
    return (
      <div className={styles.Synonyms}>
        <ul>
          {props.synonyms.map(function (synonym, index) {
            return (
              <li key={index} className={styles.hightlight}>
                {synonym}
              </li>
            );
          })}
        </ul>
      </div>
    );
  } else {
    return null;
  }
};
export default Synonyms;
