import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper.scss';

import data from "../data/animals.json";
import FetchImageById from '../components/FetchImageById';

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

const list = shuffle(data.results);

export const App = () => {
  return (
    <Swiper
    slidesPerView={1}
    >
      {list.map(image => (
        <SwiperSlide>
          {({ isActive, isNext, isPrev }) => {
            if (isActive || isNext || isPrev) {
              return <FetchImageById data={image} />
            }
          }}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default App;
