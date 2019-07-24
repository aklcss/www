import React from "react";

const Eventimage = (image, name) => {
  let link = "https://placekitten.com/600/300";

  if (image.image != null) {
    link = image.image.highres_link;
  }

  return <img
    style={{
      width: "100%",
      height: "100%",
      objectFit: "cover",
      borderRadius: 10,
    }}
    src={link}
    alt={name}
  />;


};

export default Eventimage;
