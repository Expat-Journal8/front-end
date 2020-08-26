import React, {useState, useEffect} from "react";
import map from "./assets/world.png"


const EditStories =()=>{
    const  [story, setStory ] = useState( { title:"",trip:"" , date:"" } );
    const [entry, setEntry] = useState( [{ title:"",trip:"" , date:"" }] );
    const handleChange = e => {
        const tale = {
            ...story,
            [e.target.name]: 
            e.target.value};
            setStory(tale);
    };

    const handleSubmit = e => {
        e.preventDefault();
        setEntry([...entry, story]);
        setStory({title:"", trip:"", date:""});    
    };
    
    useEffect( ()=>{
        console.log("succesfully journaled:",entry)
    },[entry] );

    return(
        <div className="storiesWrapper">
            <form onSubmit={ handleSubmit }>
                <div className="storyTitle">
                    <label htmlFor="title">Title: </label>
                    <input type="text" id="title" name="title" value={story.title} onChange={handleChange}/>
                </div>
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
                       
            </div>
        )
};

export default EditStories;