import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import {CardActionArea} from "@mui/material";

import {useEffect, useState} from "react";

import {useParams, Link} from "react-router-dom";

function Cast() {
  const [castState, setCast] = useState([]);
  const {id} = useParams();

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}/credits?api_key=131f3dc4657440aa2ed80c0a22a7d1f9&language=en-US`
    )
      .then((res) => res.json())
      .then((res) => {
        setCast(res);
      })
      .catch((err) => {});
  }, [id]);
  const CastMovie = castState.cast;

  return (
    <div>
      <div>
        <h1 className="text-3xl font-semibold">Series Cast</h1>
      </div>
      <div className="mt-8 mb-12 flex overflow-x-scroll overflow-y-hidden ">
        {(CastMovie || []).map(
          (value, key) =>
            key < 10 && (
              <Card
                key={key}
                className="ml-4 static transition ease-in-out delay-250 hover:-translate-y-1 hover:scale-110  duration-300"
                sx={{minWidth: 260}}
              >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={
                      "https://www.themoviedb.org/t/p/w600_and_h900_bestv2" +
                      value.profile_path
                    }
                    alt="green iguana"
                  />

                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {value.name}
                    </Typography>

                    <Typography
                      className="font-semibold "
                      variant="body2"
                      color="text.secondary"
                    >
                      {value.character}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            )
        )}
      </div>
    </div>
  );
}

export default Cast;
