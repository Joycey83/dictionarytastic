import styles from "../components/Meaning.module.css";
import Synonyms from "./Synonyms";
const Meaning = (props) => {
  if (props.meaning) {
    return (
      <div className="Meaning">
        <h3>{props.meaning.partOfSpeech}</h3>
        <p>{props.meaning.definition}</p>
        <em>{props.meaning.example}</em>
        <Synonyms synonyms={props.meaning.synonyms} />
      </div>
    );
  } else {
    return null;
  }
};
export default Meaning;
