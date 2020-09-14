import React, { useEffect, useState } from "react";
import axios from "axios";

import { API_BASE } from "../helpers/config";
import Image from "./Image";

export const FetchImageById = ({
  id,
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
      {loading && "Loading"}
      {!loading && <Image image={image} />}
    </>
  );
}

export default FetchImageById;