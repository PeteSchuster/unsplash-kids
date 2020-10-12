import React, { useEffect, useState } from "react";
import axios from "axios";

import { API_BASE } from "../helpers/config";
import Image from "./Image";

export const FetchImageById = ({
  data: { id, name },
}) => {
  const [image, setImage] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const { data: image } = await axios.get(
        `${API_BASE}image/${id}`
      );
      setImage(image);
      setLoading(false);
    };

    fetchData();
  }, [id]);

  return (
    <>
      {loading && <div className="loading">Loading...</div>}
      {!loading && <Image name={name} image={image} />}
    </>
  );
}

export default FetchImageById;