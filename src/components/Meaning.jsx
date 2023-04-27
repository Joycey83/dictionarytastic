import styles from "../components/Meaning.module.css";
import Synonyms from "./Synonyms";

const Meaning = (props) => {
  // console.log(props.meaning);
  if (props.meaning) {
    return (
      <>
        <div className={styles.meaning}>
          <h4>
            <strong>{props.meaning.partOfSpeech}</strong>
          </h4>
          {props.meaning.definitions.map((definition, index) => {
            return (
              <div key={index}>
                {definition.definition}
                <br />

                <em>{definition.example}</em>
              </div>
            );
          })}

          <Synonyms synonyms={props.meaning.synonyms} />
        </div>
      </>
    );
  } else {
    return null;
  }
};
export default Meaning;
