import React, {useState} from "react";
import map from "./assets/world.png"


const Stories =(props)=>{
    return(
        <>
            <h3>title</h3>
            <div></div>
        </>
    )
};

const EditStories =()=>{
    const  [story, setStory ] = useState( { trip:"" , date:"" } );
    const [ storys,setStorys ] = useState(story);

    const handleChange = e => {
        const entry = {
            ...story,
            [e.target.name]: 
            e.target.value};
            setStory(entry);
    };

    const handleSubmit = e => {
        e.preventDefault();
        setStorys(story);
    };
    console.log(storys);

    return(
        <div className="storiesWrapper">
            <form onSubmit={ handleSubmit }>
                <div className="story">
                    <label htmlFor="editStory">Tell your story: </label>
                    <textarea name="textarea" id="editStory" name="trip" value={story.trip} onChange={handleChange}/>
                </div>
                <div className="storyDate">
                    <label htmlFor="date">Date: </label>
                    <input type="text" id="date" name="date" value={story.date} onChange={handleChange}/>
                </div>
                <button>Add Story</button>
            </form>
            <div className="stories">
                {storys.map}
                
            </div>
        </div>
    )
};

export default EditStories;