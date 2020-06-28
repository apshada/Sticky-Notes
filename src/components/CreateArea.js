import React, { useState } from "react";
import './main.css'

const CreateArea = (props) => {
    const [note, setNote] = useState({
        title : "",
        content : ""
    })

    const handleChange = (event) => {
        const {name , value} = event.target

        setNote(prevNote => {
            return{
                ...prevNote,
                [name] : value
            }
        })
    }

    const submitNote = (event) => {
        props.onAdd(note)
        setNote({
            title : "",
            content : ""
        })
        event.preventDefault();
    }

    return(
    <div className="area" >
    <form>
        <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        />
        <textarea
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows="3"
        />
        <button onClick={submitNote}>Add</button>
      </form>
      </div>
    );

}


export default CreateArea;