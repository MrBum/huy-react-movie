import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import {CardActionArea} from "@mui/material";
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";

function PopularCast() {
  const [castState, setPopularState] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/person/popular?api_key=131f3dc4657440aa2ed80c0a22a7d1f9&language=en-US&page=1"
    )
      .then((res) => res.json())
      .then((res) => {
        setPopularState(res);
      })
      .catch((err) => {});
  }, []);

  return (
    <div>
      <div className="grid grid-cols-6 gap-4 mt-10">
        <div className="col-start-1 ">
          <h1 className="md:text-4xl text-lg font-semibold  ">Popular</h1>
        </div>
      </div>
      <div className="mt-8 mb-12  md:flex md:overflow-x-scroll md:overflow-y-hidden overflow-y-scroll overflow-x-hidden">
        {(castState.results || []).map(
          (value, key) =>
            key < 20 && (
              <Card
                key={key}
                className="ml-4 static transition ease-in-out delay-250 hover:-translate-y-1 hover:scale-95  duration-300  md:min-w-[260px]"
              >
                <Link to={`/cast/${value.id}`}>
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
                        {value.known_for_department}
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

export default PopularCast;
