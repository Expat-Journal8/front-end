import React, {useState, useEffect} from "react";
import axiosWithAuth from '../api/axiosWithAuth';
import map from "./assets/world.png"


const EditStories = () =>{
    const [story, setStory ] = useState( { title:"", trip:"" , date:"" } );
    const [entries, setEntries] = useState( [{ title:"", trip:"" , date:"" }] );
    const [editEntry, setEditEntry] = useState({title:"", trip:"", date:""});
    const [editing, setEditing]=useState(false);


    const handleChange = e => {
            setStory({...story, [e.target.name]: e.target.value});
        };

    const handleSubmit = e => {
        e.preventDefault();
        setEntries([...entries, story]);
        setStory({title:"", trip:"", date:""});    
    };

    useEffect( ()=>{
        console.log("Story added to entries array: ", entries)
    
    },[entries] );

    const Journal = ({entries}) =>{
        return (
            <div className="journalWrap">
                {entries.map((entry,index) => {
                    return(
                        <div key={index} className="wrapper">
                            <h3>{entry.title}</h3><span><h4>{entry.date}</h4></span>
                            <p>{entry.trip}</p>
                            {index === 0 ?  null : <button onClick={() => {
                                setEditEntry({entry,index});
                                setEditing(true);
                            }
                            }>Edit</button>}
                        </div>
                    )
                })}
            </div>
        )
    };
    
    console.log(editing);
    useEffect( ()=>{
        console.log("Edit this: ",editEntry)
        
    },[editEntry] );
    
    return(
        <div className="storiesWrapper">
            <form onSubmit={ handleSubmit }>
                <div className="storyTitle">
                    <label 
                    htmlFor="title">Title: </label>
                    <input
                     type="text" 
                     id="title" 
                     name="title" 
                     value={ story.title} 
                     onChange={handleChange}/>
                </div>
                <div className="story">
                    <label 
                    htmlFor="editStory">Tell your story: </label>
                    <textarea 
                    name="textarea" 
                    id="editStory" 
                    name="trip" 
                    value={story.trip} 
                    onChange={handleChange}/>
                </div>
                <div className="storyDate">
                    <label 
                    htmlFor="date">Date: </label>
                    <input 
                    type="text" 
                    id="date" 
                    name="date" 
                    value={story.date} 
                    onChange={handleChange}/>
                </div>
                <button>Add Story</button>
            </form>

            <Journal entries={entries}/>

            </div>
        )
};

export default EditStories;