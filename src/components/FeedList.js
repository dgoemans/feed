import React from 'react';
import {render} from 'react-dom';
import FeedListItem from './FeedListItem';

export default class FeedList extends React.Component 
{
    constructor(props)
    {
        super(props);

        this.state = {
            feeds: []
        };

        props.rssHandler.getFeeds().then((feeds) => {
            this.setState({
                feeds: feeds
            });
        });
    }
    
    render () 
    {
        let itemViews = [];
        this.state.feeds.forEach((feed) => 
        {
            feed.items.forEach(item => 
            {
                itemViews.push(<FeedListItem key={item.id} item={item}/>);
            });
            
        });

        return (<div>
                {itemViews}
                <div className="floating-action-button" onClick={this.addFeed.bind(this)}>+</div>
            </div>);
    }

    addFeed()
    {
        if(this.props.addFeed)
        {
            this.props.addFeed();
        }
        
    }

}