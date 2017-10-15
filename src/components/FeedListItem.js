import React from 'react';
import {render} from 'react-dom';
import HtmlToReact from 'html-to-react';

export default class FeedListItem extends React.Component 
{
    constructor(props)
    {
        super(props);

        this.state = {
            item: props.item,
            expanded: false
        };

        this.htmlToReactParser = new HtmlToReact.Parser();
    }
    
    render () 
    {
        let item = this.state.item;

        if(this.state.expanded)
        {
            let element = this.htmlToReactParser.parse(item.content);

            return (<div className="item" onClick={this.expand.bind(this)}>
                    <div className="item-title" >{item.title}</div>
                    <div className="item-content">{element}</div>
                </div>);
        }
        else
        {
            return (<div className="item" onClick={this.expand.bind(this)}>
                    <div className="item-title" >{item.title}</div>
                    <div className="item-byline">{item.byLine}</div>
                </div>);
        }

        
    }

    expand()
    {
        this.setState({
            expanded: !this.state.expanded
        });
    }
}