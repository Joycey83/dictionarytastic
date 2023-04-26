const Phonetic = (props) => {
  console.log(props.phonetic);
  if (props.phonetic.audio && props.phonetic.text) {
    return (
      <div className="Phonetics">
        <a
          href={props.phonetic.audio}
          target="_blank"
          rel="noopener noreferrer"
        >
          Listen
          {/* <i class="fa-solid fa-volume-high ms-1"></i> */}
        </a>
        <span className="text">{props.phonetic.text} </span>
      </div>
    );
  } else {
    return null;
  }
};
export default Phonetic;
