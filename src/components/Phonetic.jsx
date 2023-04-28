import React from "react";
import ReactAudioPlayer from "react-audio-player";
import styles from "../components/Phonetic.module.css";
const Phonetic = (props) => {
  console.log(props.phonetic);
  if (props.phonetic.audio && props.phonetic.text) {
    return (
      <div className={styles.phonetic}>
        <h2 className={styles["phonetic--text"]}> {props.phonetic.text}</h2>
        <div className={styles["audio--player"]}>
          <ReactAudioPlayer src={props.phonetic.audio} autoPlay controls />{" "}
        </div>
      </div>
    );
  } else {
    return null;
  }
};
export default Phonetic;
