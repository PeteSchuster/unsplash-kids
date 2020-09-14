import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import { API_BASE } from "../helpers/config";
import Image from './Image';

export const Images = () => {
  const [images, setImages] = useState();
  const [loading, setLoading] = useState(true);
  const { keyword } = useParams();

  useEffect(() => {
    const fetchImages = async () => {
      setLoading(true);
      const { data: results } = await axios.get(
        `${API_BASE}images/${keyword}`
      );
      setImages(results);
      setLoading(false);
    };

    fetchImages();
  }, [keyword]);

  return (
    <div className="images">
      {loading && "Loading"}
      {!loading && images.map(image => (
        <Image image={image} />
      ))}
    </div>
  );
}

export default Images;