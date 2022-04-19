import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import {CardActionArea} from "@mui/material";
import {useStore} from "../../store";
import {Link} from "react-router-dom";
import {useEffect} from "react";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import {
  GET_API_REQUEST,
  GET_API_SUCCESS,
  GET_API_ERROR,
} from "../../store/constant";

function Popular({data}) {
  const [state, dispatch] = useStore();

  useEffect(() => {
    dispatch({
      type: GET_API_REQUEST,
    });
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=131f3dc4657440aa2ed80c0a22a7d1f9"
    )
      .then((res) => res.json())
      .then((res) => {
        dispatch({
          type: GET_API_SUCCESS,
          data: res,
        });
      })
      .catch((err) => {
        dispatch({
          type: GET_API_ERROR,
        });
      });
  }, []);

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-6 gap-4 mt-10">
        <div className="col-start-1 ">
          <h1 className="md:text-4xl text-xl font-semibold  ">
            What's Popular
          </h1>
        </div>
        <div className="col-end-9 col-span-2 mr-auto">
          <Link to="/popular">
            <a className="ml-4 transition ease-in-out delay-150 bg-teal-600 hover:-translate-y-1 hover:scale-110 hover:bg-teal-600 duration-300 inline-block text-center  border border-transparent rounded-md py-3 px-8 font-medium text-white ">
              MORE
            </a>
          </Link>
        </div>
      </div>

      <div className=" mt-8 mb-12 md:flex md:overflow-x-scroll md:overflow-y-hidden overflow-y-scroll md:overflow-x-hidden scoller_fade">
        {(state.data.results || []).map((value, key) =>
          state.loading === false ? (
            <Card
              key={key}
              className="ml-4 static transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105  duration-300 "
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
          )
        )}
      </div>
    </div>
  );
}

export default Popular;
