import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import RecommendMovie from "./recommend";
import MovieVideo from "./MovieVideo";
import Cast from "./cast";

function MovieDetail({data}) {
  const {id} = useParams();
  const [detail, setDetail] = useState({});

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=131f3dc4657440aa2ed80c0a22a7d1f9&language=en-US`
    )
      .then((res) => res.json())
      .then((res) => {
        setDetail(res);
        window.scrollTo({top: 0, left: 0, behavior: "smooth"});
      })
      .catch((err) => {});
  }, [id]);

  return (
    <div className="bg-gradient-to-t from-white to-gray-800">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 gap-2 ">
          <div>
            <img
              className="rounded-[4.5rem] mt-[5rem]"
              src={
                "https://www.themoviedb.org/t/p/w600_and_h900_bestv2" +
                detail.poster_path
              }
              alt={detail.title}
            />
          </div>
          <div className="self-center">
            <div className="grid-rows-1  ">
              <div>
                <h1 className=" text-[5rem] text-white font-extrabold">
                  {detail.title}
                </h1>
              </div>
              <div className="flex flex-row">
                <p className="text-white mt-2">
                  {detail.release_date} - {detail.status} -{detail.tagline}
                </p>
              </div>

              <div className="flex flex-row">
                {(detail.genres || []).map((value) => (
                  <button
                    className="mt-4 relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800 "
                    disabled
                  >
                    <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 uppercase">
                      {value.name}
                    </span>
                  </button>
                ))}
              </div>

              <div>
                <h1 className="text-white text-2xl font-semibold mt-5">
                  Overview
                </h1>
                <p className="text-white mt-2">{detail.overview}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-48 mr-48 mt-12">
        <Cast />
      </div>
      <div className="mx-48 mr-48 mt-12">
        <MovieVideo />
      </div>

      <div className="mx-12 mr-12">
        <RecommendMovie className="" />
      </div>
    </div>
  );
}

export default MovieDetail;
