import React from "react";

const Eventimage = (image) => {
  if (image.image != null) {
    let im = image.image;
    return <img style={{maxwidth: '50%'}} src={image.image.highres_link} alt=""/>;
  }
  return <> </>
};

export default Eventimage;
