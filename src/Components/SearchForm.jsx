import React from "react";
import { useState } from "react";
import "../Style/form.css";

const SearchForm = ({ handleSubmit, clearSearch }) => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className="search-form">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(value);
          setValue("");
        }}
      >
        <input
          type="text"
          className="search-input"
          value={value}
          onChange={handleChange}
        />
        <input type="submit" className="submit-input" value="Search movie" />
      </form>
      <div className="clear-search">
        <span onClick={clearSearch}>clear search</span>
      </div>
    </div>
  );
};

export default SearchForm;
