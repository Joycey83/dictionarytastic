import styles from "../components/Meaning.module.css";
const Meaning = (props) => {
  if (props.meaning) {
    return (
      <div className="Meaning">
        <h3>{props.meaning.partOfSpeech}</h3>
        <p>{props.meaning.definition}</p>
        <em>{props.meaning.example}</em>
      </div>
    );
  } else {
    return null;
  }
};
export default Meaning;
