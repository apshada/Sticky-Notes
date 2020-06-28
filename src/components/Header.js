import React, { Component } from 'react';
import '@ionic/core/css/core.css';
import '@ionic/core/css/ionic.bundle.css';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
 
} from '@ionic/react';
import './main.css'


class Header extends Component {

  

  render() {
    return (
        <IonHeader >
            <IonToolbar color="danger">
                <center>
                <IonTitle className="do">
                    Stickies
                </IonTitle>
                </center>
            </IonToolbar>
        </IonHeader>
    );
  }
}

export default Header;