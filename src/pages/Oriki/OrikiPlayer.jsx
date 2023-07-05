import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Recording } from "../../component/Player/Music/MusicData";
import Lyrics from "./PlayList/Lyrics";
import { HiArrowLongLeft } from "react-icons/hi2";
import DefaultThumbnail from "./PlayList/DefaultThumbnail";
// import lily from "../../Assets/files/anthem-of-victory-111206.mp3"

const OrikiPlayer = () => {
  const [record, setRecord] = useState(null);

  const params = useParams();

  useEffect(() => {
    const song = Recording.find((data) => data.id === Number(params.id));
    if (song) setRecord(() => song);

    console.log(song);
  }, [params.id, record]);

  return (
    <div className=" bg-primary2 w-screen max-h-max pb-7">
      <div className=" bg-transparent md:w-[85%] sm:w-full m-auto mt-[5rem] pt-5 flex justify-center flex-col">
        <div className=" bg-transparent font-bold mb-5 px-4 md:px-0">
          <button className=" bg-slate-300 rounded flex justify-center items-center py-2 px-6 text-md text-black">
            <span className=" bg-transparent mr-2">
              <HiArrowLongLeft className=" bg-transparent" />
            </span>
            Back
          </button>
        </div>

        <div className=" bg-transparent md:w-3/6 sm:w-full">
          {record?.thumbnail ? (
            <div className=" bg-transparent">
              <img src={record?.thumbnail} alt="" className="w-full h-72" />
            </div>
          ) : (
            <DefaultThumbnail />
          )}
          <div className=" bg-transparent w-full flex items-start justify-center flex-col max-h-max">
            <audio
              controls
              src={record?.src}
              type="audio/mpeg"
              className=" bg-slate-100 w-full"
            >
              Your browser doesn't support the <code>Audio</code>Element
            </audio>
            <Lyrics />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrikiPlayer;
