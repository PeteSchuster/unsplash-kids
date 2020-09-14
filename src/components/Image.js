import React from "react";

export const Image = ({
  image = {},
}) => (
  <div className="image" style={{ backgroundImage: `url(${image.urls?.regular})`, backgroundColor: image.color }}>
    <span>{image.alt}</span>
  </div>
);

export default Image;