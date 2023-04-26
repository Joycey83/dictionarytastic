const Synonyms = (props) => {
  if (props.synonyms) {
    return (
      <div className="Synonyms">
        <strong>Similar:</strong>

        <ul>
          {props.synonyms.map(function (synonym, index) {
            return <li key={index}>{synonym}</li>;
          })}
        </ul>
      </div>
    );
  } else {
    return null;
  }
};
export default Synonyms;
