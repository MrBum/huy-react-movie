import {useState, useEffect} from "react";

function CarouselMovie() {
  const keyMovie = [
    {key: "47r8FXYZWNU"},
    {key: "IE8HIsIrq4o"},
    {key: "8fqv_n6YxWI"},
    {key: "XdKzUbAiswE"},
    {key: "vc7_mH2PWHs"},
  ];

  return (
    <div>
      <div className="md:ml-16 md:mr-24 md:flex md:overflow-x-scroll md:overflow-y-hidden overflow-y-scroll overflow-x-hidden min-w-[1400px]  ">
        {(keyMovie || []).map((value) => (
          <iframe
            className=" mt-5 ml-4 md:aspect-video aspect-square rounded-3xl"
            src={`https://www.youtube.com/embed/${value.key}`}
            width="100%"
            height="800px"
            title="video"
          ></iframe>
        ))}
      </div>
    </div>
  );
}

export default CarouselMovie;
