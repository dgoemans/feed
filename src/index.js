import React from 'react';
import {render} from 'react-dom';
import FirebaseHelper from './FirebaseHelper';

class App extends React.Component {

  constructor()
  {
    super();
    
    this.firebaseHelper = new FirebaseHelper();
  }

  render () {
    return <p> Hello React!</p>;
  }
}

render(<App/>, document.getElementById('app'));