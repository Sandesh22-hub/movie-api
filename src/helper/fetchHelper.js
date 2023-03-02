import React from "react";
import axios from "axios";

export const fetchHelper = async (str) => {
  //   fetch("https://www.omdbapi.com/?apikey=4cc91a21&t=avatar")
  //     .then((res) => res.json())
  //     .then((data) => console.log(data))
  //     .catch((error) => console.log(error));

  const { data } = await axios.get(
    "https://www.omdbapi.com/?apikey=4cc91a21&t=" + str
  );
  return data;
};
