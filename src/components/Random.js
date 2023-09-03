import axios from "axios";
import React, { useEffect, useState } from "react";


const API_KEY = process.env.REACT_APP_GIPHY_API_KEY
const Random = () => {
  const [gif, setGif] = useState("");
  

  async function fetchData() {
    const url =`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
    const {data} = await axios.get(url);
    const imageSource = data.data.images.downsized_large.url;
    setGif(imageSource);
  }

  useEffect( () => {
     fetchData();
  },[] )

   function clickHandler(){
    fetchData();
   }
  return (
    <div className="flex flex-col items-center w-1/2 h-[300px] bg-green-500 rounded-lg border border-black gap-y-5 mt[-15px]">
    <h1 className="text-2xl underline uppercase font-bold">A Random GIF</h1>
    <img src={gif} alt="" width="450px"/>
    <button 
    className="w-10/12 bg-yellow-500 text-lg py-2 rounded-lg"
    onClick={clickHandler}>Generate</button>
  </div>
  );
};

export default Random;
