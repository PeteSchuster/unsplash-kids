import React, { useEffect, useState } from "react";
import axios from "axios";
import "./index.css";

export const Image = ({
  keyword = "dog",
}) => {
  const [image, setImage] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const { data: image } = await axios.get(
        `https://get-image-from-unsplash.herokuapp.com/image/${keyword}`
      );
      setImage(image.urls.small);
      setLoading(false);
    };

    fetchData();
  }, [keyword]);

  return (
    <div className="App" style={{ backgroundImage: `url(${image})` }}>
      {loading && "Loading"}
    </div>
  );
}

export default Image;