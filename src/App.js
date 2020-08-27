import React, { useEffect, useState } from "react";
import "./index.css";

import Image from './Image';

const list = [
  'armadillo',
  'raccoon',
  'lion',
  'squirrel',
  'llama',
  'turtle',
  'seahorse',
  'caterpillar',
  'donkey',
  'horse',
  'worm',
  'turkey',
  'rhinoceros',
  'guinea-pig',
  'koala',
  'elephant',
  'snail',
  'lobster',
  'sheep',
  'owl',
  'tiger',
  'eagle',
  'giraffe',
  'cow',
  'ostrich',
  'parrot',
  'panda',
  'deer',
  'orca',
  'camel',
  'ferret',
  'kangaroo',
  'fox',
  'porcupine',
  'goose',
  'gorilla',
  'ant',
  'opossum',
  'zebra',
  'lizard',
  'skunk',
  'bear',
  'peacock',
  'otter',
  'hedgehog',
  'starfish',
  'crab',
  'duck',
  'sea-lion',
  'dog',
  'hamster',
  'rabbit',
  'mouse',
  'alligator',
  'grasshopper',
  'ladybug',
  'pig',
  'rooster',
  'monkey',
  'spider',
  'octopus',
  'fly',
  'bee',
  'chicken',
  'frog',
  'penguin',
  'butterfly',
  'fish',
  'goat',
  'flamingo',
  'walrus',
  'hippopotamus'
];

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
    <Image keyword={list[imageIndex]} />
  );
};

export default App;
