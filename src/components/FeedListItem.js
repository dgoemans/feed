import React from 'react';
import {render} from 'react-dom';
import NumberCounter from './NumberCounter';

export default class FeedListItem extends React.Component 
{
    constructor(props)
    {
        super(props);

        this.state = {
            item: props.item
        };
    }
    
    render () 
    {
        let item = this.state.item;

        return (<div className="item">
                <div className="item-title" onClick={this.expand.bind(this)}>{item.title}</div>;
            </div>);
    }

    expand()
    {
        console.log("Item clicked");
    }
}