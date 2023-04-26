const Phonetic = (props) => {
  console.log(props.phonetic);
  return (
    <div className="phonetic">
      <a href={props.phonetic.audio} rel="noopener" target="_blank">
        Listen
      </a>
      <br />
      {props.phonetic.text}
    </div>
  );
};
export default Phonetic;
