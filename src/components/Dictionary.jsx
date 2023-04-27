import { useState } from "react";
import axios from "axios";
import styles from "../components/Dictionary.module.css";
import SearchResult from "./SearchResult";
import Photos from "./Photos";

const Dictionary = () => {
  const [keyword, setKeyword] = useState("");
  const [definition, setDefinition] = useState(null);
  const [photos, setPhotos] = useState(null);

  const inputKeywordHandle = (event) => {
    setKeyword(event.target.value);
  };

  const handleDictionaryResponse = (response) => {
    // console.log(response.data[0]);
    setDefinition(response.data[0]);
  };

  const showPhotos = (response) => {
    console.log(response.data);
    setPhotos(response.data.photos);
  };

  const searchWord = (event) => {
    event.preventDefault();

    // Free dictionary API
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleDictionaryResponse);

    // Shecodes Image API
    let photoApiKey = "a3a5bbeff1t6546488o90285fa5b0853";
    let photoApiUrl = `https://api.shecodes.io/images/v1/search?query=${keyword}&key=${photoApiKey}`;
    axios.get(photoApiUrl).then(showPhotos);
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
              className="form-control search-input mt-3"
              onChange={inputKeywordHandle}
            />
          </form>
        </section>
        <SearchResult definition={definition} />
        <Photos photos={photos} />
      </div>
    </>
  );
};
export default Dictionary;
