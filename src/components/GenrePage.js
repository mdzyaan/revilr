import React from 'react';
import axios from 'axios';
import { proxy, key } from '../config';
import CardList from './CardList';

export default class GenrePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.match.params.id,
            gameList: [<h1 className="search__container" key={props.match.params.id}>loading...</h1>]
        }
    }
    componentDidMount() {
        try {
            axios(`${proxy}https://api-endpoint.igdb.com/games/?fields=id,name,cover,genres,rating,popularity&filter[genres][eq]=${this.state.id}&order=rating:desc&min&limit=50&filter[cover][exists]=1`, {
                method: "GET",
                headers: {
                    "user-key": `${key}`,
                    "Accept": "application/json"
                }
            })
            .then(response => {
                console.log(response)  
                this.setState(() => ({gameList : [<CardList key={response.data[0].id} name={"Search Result"} gameList={response.data} />],}));      
            })
        
        } catch (error) {
            alert(error)
        }
    }
    render() {
        return (
            <div className="mod-top-7rem">
                {this.state.gameList}
            </div>
        );
    }
}