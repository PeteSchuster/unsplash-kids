import React, { useEffect, useState } from "react";
import data from "../data/animals.json";

import FetchImageById from '../components/FetchImageById';

const list = data.results;

export const App = () => {
  const [imageIndex, setImageIndex] = useState(0);

  const handleClick = (e) => {
    e.preventDefault();
    e.stopPropagation();

    let nextIndex;

    if (imageIndex === list.length - 1) {
      nextIndex = 0;
    } else {
      nextIndex = imageIndex + 1
    }

    setImageIndex(nextIndex);
  };

  useEffect(() => {
    document.addEventListener("click", handleClick);

    return () => document.removeEventListener("click", handleClick);
  });

  return (
    <FetchImageById id={list[imageIndex].id} />
  );
};

export default App;
