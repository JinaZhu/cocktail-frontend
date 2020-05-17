import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faSearch } from "@fortawesome/free-solid-svg-icons";

const Homepage = () => {
  return (
    <div>
      <form>
        <input type="text" placeholder="enter ingredient"></input>
        <button type="submit">
          <FontAwesomeIcon icon={faPlus} />
        </button>
        <button type="submit">
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </form>
    </div>
  );
};

export default Homepage;
