import {useState, useEffect} from "react";
import {useParams} from "react-router-dom";

function MovieVideo() {
  const [movieState, setMovie] = useState([]);
  const {id} = useParams();

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?api_key=131f3dc4657440aa2ed80c0a22a7d1f9`
    )
      .then((res) => res.json())
      .then((res) => {
        setMovie(res);
      })
      .catch((err) => {});
  }, [id]);

  const movieResource = movieState.results;

  return (
    <div>
      {(movieResource || [])
        .filter((value) => {
          return value.type === "Trailer";
        })
        .map(
          (value, key) =>
            key < 1 && (
              <div className="grid grid-columns-2">
                <div className="">
                  <h1 className="text-3xl font-semibold">{value.name}</h1>
                </div>
                <iframe
                  className="rounded-3xl mt-5 ml-4"
                  src={`https://www.youtube.com/embed/${value.key}`}
                  width="100%"
                  height="700px"
                  title="video"
                ></iframe>
              </div>
            )
        )}
    </div>
  );
}

export default MovieVideo;
