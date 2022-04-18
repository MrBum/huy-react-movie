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

function RecommendMovie() {
  const {id} = useParams();
  const [recommendState, setRecommendState] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=131f3dc4657440aa2ed80c0a22a7d1f9&language=en-US&page=1`
    )
      .then((res) => res.json())
      .then((res) => {
        setRecommendState(res);
      })
      .catch((err) => {});
  }, [id]);

  return (
    <div>
      <div className="mt-10">
        <h1 className="text-3xl font-semibold">Recommendations</h1>
      </div>
      <div className="mt-4 mb-12 flex overflow-x-scroll overflow-y-hidden ">
        {(recommendState.results || []).map((value, key) =>
          recommendState ? (
            <Card
              key={key}
              className="ml-4 static transition ease-in-out delay-250 hover:-translate-y-1 hover:scale-110  duration-300 rounded-full"
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
            <div></div>
          )
        )}
      </div>
    </div>
  );
}

export default RecommendMovie;
