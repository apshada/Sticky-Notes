import React, { Component } from 'react';
import '@ionic/core/css/core.css';
import '@ionic/core/css/ionic.bundle.css';
import {

  IonToolbar,
  IonTitle,
  IonFooter
} from '@ionic/react';
import './main.css'

class Footer extends Component {
  render() {
    return (
       <IonFooter >
           <IonToolbar color="danger">
               <IonTitle>
                   copyright
               </IonTitle>
           </IonToolbar>
       </IonFooter>
    );
  }
}

export default Footer;