import React, {useState} from "react";
import {useParams, useHistory} from 'react-router-dom';
import {axiosWithAuth} from '../api/axiosWithAuth';


const EditStories = props =>{
    const [story, setStory ] = useState( { storyName:"", storyCity:"", storyCountry: '', storyDesc: '', user_id: '', storyPhoto: '' } );
    const params = useParams();
    const history = useHistory();
    // const [entries, setEntries] = useState( [{ title:"", trip:"" , date:"" }] );
    // const [editEntry, setEditEntry] = useState({title:"", trip:"", date:""});
    // const [editing, setEditing]=useState(false);


    const handleChange = e => {
            setStory({...story, [e.target.name]: e.target.value});
        };

    const handleSubmit = e => {
        e.preventDefault();
        axiosWithAuth().put(`/api/stories/${params.id}`, story)
            .then(response => {
                console.log(response);
                history.push(`/Story/${params.id}`);
            })  
            .catch(error => {
                console.log(error);
            })
    };
    
    return(
        <div className="storiesWrapper">
            <form onSubmit={ handleSubmit }>
            <div className="storyName">
                    <label 
                    htmlFor="title">Story Name</label> <br />
                    <input
                     type="text" 
                     id="storyName" 
                     name="storyName" 
                     value={ story.storyName} 
                     onChange={handleChange}/>
                </div>
                <div className="storyCity">
                    <label 
                    htmlFor="editStory">Story City</label> <br />
                    <input
                    name="textarea" 
                    id="storyCity" 
                    name="storyCity" 
                    value={story.storyCity} 
                    onChange={handleChange}/>
                </div>
                <div className="storyCountry">
                    <label 
                    htmlFor="date">Story Country</label> <br />
                    <input 
                    type="text" 
                    id="date" 
                    name="storyCountry" 
                    value={story.storyCountry} 
                    onChange={handleChange}/>
                </div>
                <div className="storyDate">
                    <label 
                    htmlFor="date">Story Description</label> <br />
                    <textarea 
                    type="text" 
                    id="date" 
                    name="storyDesc" 
                    value={story.storyDesc} 
                    onChange={handleChange}/>
                </div>
                <div className="storyDate">
                    <label 
                    htmlFor="date">User ID</label> <br />
                    <input 
                    type="text" 
                    id="userId" 
                    name="user_id" 
                    value={story.user_id} 
                    onChange={handleChange}/>
                </div>
                <div className="storyDate">
                    <label 
                    htmlFor="storyPhoto">PhotoURL</label> <br />
                    <input 
                    type="text" 
                    id="storyPhoto" 
                    name="storyPhoto" 
                    value={story.storyPhoto} 
                    onChange={handleChange}/>
                </div>
                <button>Finish editing!</button>
            </form>

            {/* <Journal entries={entries}/> */}

            </div>
        )
};

export default EditStories;