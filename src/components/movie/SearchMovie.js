import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import {useState, useEffect} from "react";
import {Link} from "react-router-dom";
function MovieSearch() {
  const [searchState, setSearch] = useState([]);

  return (
    <div className="flex flex-row">
      <TextField
        className=""
        sx={{width: 340}}
        value={searchState}
        onChange={(e) => setSearch(e.target.value)}
        label="Movie"
        placeholder="Search for a movie "
      />

      <Link to={`/search/${searchState}`}>
        <a className="ml-4 transition ease-in-out delay-150 bg-teal-600 hover:-translate-y-1 hover:scale-110 hover:bg-teal-600 duration-300 inline-block text-center  border border-transparent rounded-md py-3 px-8 font-medium text-white ">
          SEARCH
        </a>
      </Link>
    </div>
  );
}

export default MovieSearch;

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
