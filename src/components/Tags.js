import React, { useState } from "react";
import Spinner from "./spinner";
import useGif from "../hook/useGif";


const Tag = () => {
  const [tag, setTag] = useState("");
  const { gif, loading, fetchData } = useGif();

  return (
    <div className="flex flex-col items-center w-1/2 h-[300px] bg-green-500 rounded-lg border border-black gap-y-5 mt-[-15px]">
      <h1 className="mt-[15px] text-2xl underline uppercase font-bold">
        Random GIF {tag}
      </h1>

      {loading ? <Spinner /> : <img src={gif} alt="Random GIF" width="450px" />}

      <input
        className="w-10/12 text-lg py-2 rounded-lg mb-[3px] text-center"
        onChange={(event) => setTag(event.target.value)}
        value={tag}
      />
      <button
        className="w-10/12 bg-yellow-500 text-lg py-2 rounded-lg mb-[20px]"
        onClick={() => fetchData(tag)}
      >
        Generate
      </button>
    </div>
  );
};

export default Tag;
