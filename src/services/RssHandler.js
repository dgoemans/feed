import parser from 'rss-parser';
import Item from '../models/Item';

export default class RssHandler
{
    constructor()
    {
        window.FS = {};
        this.urls = ['https://davidgoemans.com/blog/rss'];
    }

    getFeeds()
    {
        let promises = [];

        this.urls.forEach(feed => promises.push(this.parseFeed(feed)));

        return Promise.all(promises);
    }

    parseFeed(url)
    {
        return new Promise((resolve, reject) => 
        {
            parser.parseURL(url, function(err, parsed) {
                let feed = {
                    id: parsed.feed.guid,
                    title: parsed.feed.title, 
                    items: []
                };

                parsed.feed.entries.forEach(function(entry) {
                    let item = new Item(entry.guid, entry.title, entry.contentSnippet, entry["content:encoded"]);
                    feed.items.push(item);

                    console.log(entry);
                });

                resolve(feed);
            });
        });
        
    }
}