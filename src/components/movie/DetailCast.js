import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import RecommendMovie from "./recommend";
import PopularCast from "./PopularCast";
import MovieVideo from "./MovieVideo";
import SocialMedia from "./SocialMedia";
import Trending from "./upcoming";
import Cast from "./cast";

function CastDetail() {
  const {id} = useParams();
  const [detail, setDetail] = useState({});

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/person/${id}?api_key=131f3dc4657440aa2ed80c0a22a7d1f9&language=en-US`
    )
      .then((res) => res.json())
      .then((res) => {
        setDetail(res);
        window.scrollTo({top: 0, left: 0, behavior: "smooth"});
      })
      .catch((err) => {});
  }, [id]);

  return (
    <div className="bg-gradient-to-t from-white to-gray-800 bg-cover bg-blend-darken bg-center ">
      <div className="container mx-auto">
        <div></div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 ">
          <div>
            <img
              className="rounded-[4.5rem] mt-[5rem]"
              src={
                "https://www.themoviedb.org/t/p/w600_and_h900_bestv2" +
                detail.profile_path
              }
              alt={detail.name}
            />
          </div>
          <div className="self-center">
            <div className="grid-rows-1  ">
              <div>
                <h1 className=" text-[5rem] text-white font-extrabold">
                  {detail.name}
                </h1>
              </div>
              <SocialMedia id={id} />
              <div className="flex flex-row">
                <p className="text-white mt-2">Birthday : {detail.birthday}</p>
              </div>

              <div className="flex flex-row">
                <div>
                  {detail.gender > 1 ? (
                    <button
                      className="mt-4 relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800 "
                      disabled
                    >
                      <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 uppercase">
                        Male
                      </span>
                    </button>
                  ) : (
                    <button
                      className="mt-4 relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800 "
                      disabled
                    >
                      <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 uppercase">
                        Female
                      </span>
                    </button>
                  )}
                </div>
              </div>

              <div>
                <h1 className="text-white text-2xl font-semibold mt-5">
                  Overview
                </h1>
                <p className="text-white mt-2">{detail.biography}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="md:mx-12 md:mr-12">
        <PopularCast className="" />
      </div>

      <div className="md:mx-12 md:mr-12">
        <Trending className="" />
      </div>
    </div>
  );
}

export default CastDetail;
