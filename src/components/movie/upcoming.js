import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import {CardActionArea} from "@mui/material";

import {useEffect, useState} from "react";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import {useParams, Link} from "react-router-dom";

function UpComing() {
  const [upcomingState, setUpcoming] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/upcoming?api_key=131f3dc4657440aa2ed80c0a22a7d1f9&language=en-US&page=1"
    )
      .then((res) => res.json())
      .then((res) => {
        setUpcoming(res);
      })
      .catch((err) => {});
  }, []);

  return (
    <div>
      <div className="grid grid-cols-6 gap-4">
        <div className="col-start-1 ">
          <h1 className="text-4xl font-semibold ">What's UpComing</h1>
        </div>
        <div className="col-end-9 col-span-2 mr-auto">
          <Link to="/popular">
            <a className="ml-4 transition ease-in-out delay-150 bg-teal-600 hover:-translate-y-1 hover:scale-110 hover:bg-teal-600 duration-300 inline-block text-center  border border-transparent rounded-md py-3 px-8 font-medium text-white ">
              VIEW MORE
            </a>
          </Link>
        </div>
      </div>
      <div className="mt-8 mb-12 flex overflow-x-scroll overflow-y-hidden ">
        {(upcomingState.results || []).map(
          (value, key) =>
            key < 20 && (
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
            )
        )}
      </div>
    </div>
  );
}

export default UpComing;
