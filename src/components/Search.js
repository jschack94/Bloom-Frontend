import React from "react";
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";
import IconButton from "@material-ui/core/IconButton";

const Search = (props) => {
  return (
    <div className="ui huge fluid icon input">
      <IconButton color="inherit">
        <SearchRoundedIcon />
      </IconButton>
      <input
        type="text"
        placeholder={"Search By Job"}
        onChange={props.handleChange}
      />
      <i className="circular search link icon"></i>
    </div>
  );
};

export default Search;
