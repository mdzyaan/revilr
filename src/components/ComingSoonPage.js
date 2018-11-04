import React from 'react';
import axios from 'axios';
import { proxy, key } from '../config';
import CardList from './CardList';

export default class ComingSoonPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            gameList: [<h1 className="search__container" key="commingsoonpage">loading...</h1>]
        }
    }
    componentDidMount() {
        const CURRENT_UNIX_TIME_MS = new Date().getTime();
        try {
            //https://api-endpoint.igdb.com/games/?fields=id,name,cover,genres,rating,popularity&filter[genres][eq]=${this.state.id}&order=rating:desc&min&limit=50&filter[cover][exists]=1
            // ${proxy}https://api-endpoint.igdb.com/release_dates/?fields=id,name,cover,genres,rating,popularity&filter[platform][eq]=0,49,12,6,48&order=date:asc&filter[date][gt]=1500619813000&filter[cover][exists]=1
            axios(`${proxy}https://api-endpoint.igdb.com/release_dates/?fields=*&filter[platform][eq]=48&order=date:asc&filter[date][gt]=${CURRENT_UNIX_TIME_MS}&expand=game`, {
                method: "GET",
                headers: {
                    "user-key": `${key}`,
                    "Accept": "application/json"
                }
            })
            .then(response => {
                console.log(response)  
                this.setState(() => ({gameList : [<CardList key={response.data[0].game.id} name={"Search Result"} gameList={response.data} />],}));      
            })
        
        } catch (error) {
            alert(error)
        }
    }
    render() {
        return (
            <div>
                {this.state.gameList}
            </div>
        );
    }
}