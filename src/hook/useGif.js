import axios from "axios";
import { useEffect, useState } from "react";

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
const tagMemeUrl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
const randomMeUrl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

const useGif = () => {
  const [gif, setGif] = useState("");
  const [loading, setLoading] = useState(true);

  async function fetchData(tag) {
    setLoading(true);

    const url = tag ? tagMemeUrl : randomMeUrl;

    try {
      const { data } = await axios.get(url);
      const imageSource = data.data.images.downsized_large.url;
      setGif(imageSource);
    } catch (error) {
      console.error("Error fetching data:", error);
    }

    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return { gif, loading, fetchData };
};

export default useGif;
