import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import {CardActionArea} from "@mui/material";
import MovieSearch from "../components/movie/SearchMovie";
import TextField from "@mui/material/TextField";
import {useEffect, useState} from "react";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import {useParams, Link} from "react-router-dom";
import Pagination from "@mui/material/Pagination";

function Search() {
  const {query} = useParams();
  const [searchState, setSearch] = useState([]);
  const [page, setPage] = React.useState(1);
  const [loading, setLoading] = useState(true);

  const handleChange = (event, value) => {
    setPage(value);
    setTimeout(() => {
      window.scrollTo({top: 0, left: 0, behavior: "smooth"});
    }, 1000);
  };
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=131f3dc4657440aa2ed80c0a22a7d1f9&language=en-US&page=${page}&include_adult=false&query=${query}`
    )
      .then((res) => res.json())
      .then((res) => {
        setSearch(res);
        setLoading(false);
      })
      .catch((err) => {});
  }, [page]);

  return (
    <div className="bg-gradient-to-t from-white to-gray-800">
      <div>
        <h1 id="upComing" className="text-4xl text-center text-white font-bold">
          {query}
        </h1>
      </div>
      <div className=" mx-32 mt-12  mr-48 mb-12 grid grid-cols-5 gap-4   overflow-y-hidden ">
        {(searchState.results || []).map((value, key) =>
          loading === false ? (
            <Card
              key={key}
              className="ml-4 static transition ease-in-out delay-250 hover:-translate-y-1 hover:scale-110  duration-300"
              sx={{minWidth: 260}}
            >
              <Link to={`/movie/${value.id}`}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={
                      "https://www.themoviedb.org/t/p/w600_and_h900_bestv2" +
                      value.poster_path
                    }
                    alt="green iguana"
                  />

                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {value.original_title}
                    </Typography>
                    <Stack spacing={1}>
                      <Rating
                        name="half-rating-read"
                        defaultValue={value.vote_average / 2}
                        precision={0.5}
                        readOnly
                        size="medium"
                      />
                    </Stack>
                    <Typography
                      className="font-semibold "
                      variant="body2"
                      color="text.secondary"
                    >
                      {value.release_date}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Link>
            </Card>
          ) : (
            <div>
              <div class="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
                <div class="animate-pulse flex space-x-4">
                  <div class="rounded-full bg-slate-700 h-10 w-10"></div>
                  <div class="flex-1 space-y-6 py-1">
                    <div class="h-2 bg-slate-700 rounded"></div>
                    <div class="space-y-3">
                      <div class="grid grid-cols-3 gap-4">
                        <div class="h-2 bg-slate-700 rounded col-span-2"></div>
                        <div class="h-2 bg-slate-700 rounded col-span-1"></div>
                      </div>
                      <div class="h-2 bg-slate-700 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        )}
      </div>
      <div className="mb-5">
        <Stack spacing={2}>
          <Pagination
            color="secondary"
            className="self-center"
            count={5}
            onChange={handleChange}
            page={page}
          />
        </Stack>
      </div>
    </div>
  );
}

export default Search;
