import React, { useState } from "react";
import { FieldTextLine, FieldTextArea } from "./Field";

const Photo = () => {
  const [picture, setPicture] = useState({src:"", description:""});

  const handleChange = e => {
    const photo = { ...picture,[e.target.name]:e.target.src};
    setPicture(photo);
    }
 
  const photoSubmit = e => {
   console.log("photo entered")
   e.preventDefault();
   }

  return (
    <div className="photoWrapper">
      <form onSubmit={photoSubmit}>
        <FieldTextLine
          container="source_wrapper"
          subject="src"
          value={picture.src}
          change={handleChange}
        />
        <FieldTextArea
          container="description_wrapper"
          subject="description"
          value={picture.description}
          change={handleChange}
        />
      </form>
      <button>Submit Picture</button>
      <button>Edit Picture</button>
      <button>Update Picture</button>
      <button>Delete Picture</button>
    </div>
  );
};

export default Photo;
