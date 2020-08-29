import React, { useState } from "react";
import { FieldTextLine, FieldTextArea } from "./Field";
import * as yup from "yup";

const Photo = () => {
  const pictureSchema = yup.object().shape({
    src:yup.string().required("please enter a valid URL"),
    description:yup.string().min(10, "please enter a short description and photographer name.")
  });

  const [picture, setPicture] = useState({ src: "", description: "" });
  const [pictures, setPictures] = useState([{src:"", description:""}]);
  const [editPic, setEditPic] = useState({src:"", description:""});

  const handleChange = (e) => {
    const photo = { ...picture, [e.target.name]: e.target.value };
    setPicture(photo);
  };

  const photoSubmit = (e) => {
    console.log("photo entered");
    e.preventDefault();
    setPictures([...pictures, picture]);
    setPicture({src:"", description:""});
  };

  const Gallery =(props)=>{
    return (
               <div className="gallery_wrap">
                   {props.pictures.map( (entry,index) => {
                       return(
                       <div key={index} className="wrapper">
                       <img src={String(entry.src)} alt={entry.description}/>
                       {index === 0 ?  null : <button onClick={() => {
                           setEditPic({entry,index});
                        }
                       }>Edit Picture</button>}
                       </div>)
                   } )}
               </div>)
};

  return (
    <>
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
        <button>Submit Picture</button>
        </form>
        <button>Update Picture</button>
        <button>Delete Picture</button>
      </div>
      <div className="picture_wrap">
        <Gallery pictures={pictures} />
      </div>
    </>
  );
};

export default Photo;
