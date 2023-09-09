import React from "react"; // Removed unnecessary imports
import Spinner from "./spinner";
import useGif from "../hook/useGif"; // Corrected import

const Random = () => {
  const { gif, loading, fetchData } = useGif();

  return (
    <div className="flex flex-col items-center w-1/2 h-[300px] bg-green-500 rounded-lg border border-black gap-y-5 mt-[-15px]">
      <h1 className="mt-[15px] text-2xl underline uppercase font-bold">
        A Random GIF
      </h1>

      {loading ? <Spinner /> : <img src={gif} alt="Random GIF" width="450px" />}
      <button
        className="w-10/12 bg-yellow-500 text-lg py-2 rounded-lg mb-[20px]"
        onClick={() => fetchData()}
      >
        Generate
      </button>
    </div>
  );
};

export default Random;
