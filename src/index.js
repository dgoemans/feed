import React from 'react';
import {render} from 'react-dom';
import FirebaseHelper from './services/FirebaseHelper';
import RssHandler from './services/RssHandler';
import FeedList from './components/FeedList';

class App extends React.Component {
  
  constructor()
  {
    super();
    
    this.firebaseHelper = new FirebaseHelper();

    this.rssHandler = new RssHandler();
  }
  
  render () 
  {
    return (<div>
            <FeedList rssHandler={this.rssHandler} firebaseHelper={this.firebaseHelper} />
        </div>);
    }
}
  
render(<App/>, document.getElementById('app'));