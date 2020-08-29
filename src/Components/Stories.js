import React, {useState, useEffect} from "react";
import EditJournal from "./EditJournal";
import { FieldTextLine, FieldTextArea } from "./Field"; 
//FieldText... will require a custom onChange handler to be provided here.
import map from "./assets/world.png"


const EditStories =()=>{
    const [story, setStory ] = useState( { title:"",trip:"" , date:"" } );
    const [entries, setEntries] = useState( [{ title:"",trip:"" , date:"" }] );
    const [editEntry, setEditEntry] = useState({title:"",trip:"",date:""});

    const handleChange = e => {
        const tale = {...story, [e.target.name]: e.target.value}
        setStory(tale);        
    };
    
    const handleSubmit = e => {        
        e.preventDefault();
        setEntries([...entries, story]);
        setStory({title:"", trip:"", date:""});    
    };
    
    useEffect( ()=>{
        console.log("Story added to entries array: ",entries)
    
    },[entries] );

    const Journal =({entries})=>{
            return (
                       <div className="journalWrap">
                           {entries.map( (entry,index) => {
                               return(
                               <div key={index} className="wrapper">
                               <h3>{entry.title}</h3><span><h4>{entry.date}</h4></span>
                               <p>{entry.trip}</p>
                               {index === 0 ?  null : <button onClick={() => {
                                   setEditEntry({entry,index});
                                }
                               }>Edit</button>}
                               </div>)
                           } )}
                       </div>)
    };
    
    useEffect( ()=>{
        console.log("Edit this: ",editEntry)
        
    },[editEntry] );
    
    return(
        <div className="storiesWrapper">
            <form onSubmit={ handleSubmit }>

                <FieldTextLine 
                container="title_wrapper"  
                subject="title" 
                inputValue={story.title} 
                change={handleChange}/>
                
                <FieldTextLine
                container="title_wrapper"  
                subject="date" 
                value={story.date} 
                change={handleChange}
                />

                <FieldTextArea 
                subject="trip"
                container="trip_wrapper"
                value={story.trip}
                change={handleChange}
                />

                <button>Add Story</button>
            </form>

            <Journal entries={entries}/>
            <EditJournal entry={editEntry}/>

            </div>
        )
};

export default EditStories;
