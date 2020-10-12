import React from "react";

export const Image = ({
  image = {},
  name = "",
}) => (
  <div className="image" style={{ backgroundImage: `url(${image.urls?.regular})`, backgroundColor: image.color }}>
    <h2>{name}</h2>
    <span>{image.alt}</span>
  </div>
);

export default Image;