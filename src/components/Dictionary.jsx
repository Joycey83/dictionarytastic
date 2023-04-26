import { useState } from "react";
import axios from "axios";
import styles from "../components/Dictionary.module.css";

const Dictionary = () => {
  const [keyword, setKeyword] = useState("");
  const [definition, setDefinition] = useState(null);

  const inputKeywordHandle = (event) => {
    setKeyword(event.target.value);
  };

  const handleDictionaryResponse = (response) => {
    // console.log(response.data[0]);
    setDefinition(response.data[0]);
  };

  const searchWord = (event) => {
    event.preventDefault();

    // Free dictionary API
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleDictionaryResponse);
  };
  return (
    <>
      <div className={styles["dictionary--container"]}>
        <section>
          <form onSubmit={searchWord}>
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
