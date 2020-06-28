import React from 'react'
import { IonCard, IonTitle, IonText, IonFabButton, IonFab, IonIcon } from '@ionic/react';
import './main.css'
import {trashBin } from 'ionicons/icons';


const Notes = (props) => {
    const handleClick = () => {
        props.onDelete(props.id)
    }


    return(
        
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleClick}><IonIcon icon={trashBin} /></button>
    </div>
   
    );
}

export default Notes