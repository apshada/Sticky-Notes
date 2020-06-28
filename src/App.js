import React, {  useState } from 'react';
import '@ionic/core/css/core.css';
import '@ionic/core/css/ionic.bundle.css';
import {
  IonApp, IonContent,IonFab,IonToast
 
} from '@ionic/react';
import Header from './components/Header';
import Notes from './components/Notes';
import CreateArea from './components/CreateArea';
import './components/main.css'
import Thanos from "react-thanos";
import createPersistedState from 'use-persisted-state';
const useCounterState = createPersistedState('count');


const App = () =>{

  const [notes, setNotes] = useCounterState([]);
  
  const [showToast1, setShowToast1] = useState(false);
  const [showToast2, setShowToast2] = useState(false);

  function addNote(newNote) {
    setNotes(prevNotes => {
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id) {
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  // const toggleDarkModeHandler = () => {
  //   document.body.classList.toggle("dark");
  // };

  // IonContent.style.backgroundColor  = "red"


    return (
  
      <IonApp>
      <IonFab vertical="bottom" horizontal="end" slot="fixed">
      <Thanos
      onSnap={() => setShowToast1(true) }
      onSnapReverse={() => setShowToast2(true) }
      />  
      </IonFab>
      <IonToast
        isOpen={showToast1}
        onDidDismiss={() => setShowToast1(false)}
        message="I love you 3000! Decimate..."
        duration={200}
      />

    <IonToast
        isOpen={showToast2}
        onDidDismiss={() => setShowToast2(false)}
        message="Avengers assemble ..."
        duration={200}
      />
        <Header />
        <IonContent className="masters"  ion-background-color ="red">
      
        <CreateArea onAdd={addNote} />
    
        {notes.map((noteItem, index) => {
        return (
          <Notes
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
            
          />
        );
      })}
 
 </IonContent>
         </IonApp>
        
     
    );
  
}

export default App;