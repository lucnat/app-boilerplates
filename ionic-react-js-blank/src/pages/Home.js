
import React from 'react';
import * as Ion from '@ionic/react';

export default class Home extends React.Component {

  renderToolbar() {
    return (
      <Ion.IonToolbar>
        <Ion.IonTitle>Home</Ion.IonTitle>
      </Ion.IonToolbar>
    );
  }

  render() {
    return (
    <Ion.IonPage>
      <Ion.IonHeader> {this.renderToolbar()} </Ion.IonHeader>
      <Ion.IonContent>
        <div style={{padding: 20}}>
          <h1>Hello, World</h1>
          <p>Lorem ipsum sit dolor amet</p>
        </div>
      </Ion.IonContent>
    </Ion.IonPage>
    );
  }
}
