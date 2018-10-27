import React from 'react';
import axios from 'axios';
import Card from './Card';
import { proxy, key } from '../config';

export default class SearchPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            term: '',
            gameList: ['loading'],
        }
    }
    onChange = (e) => {
        e.preventDefault();
        const term = e.target.value;
        this.setState(() => ({ term }));
    }
    //${proxy}https://api-endpoint.igdb.com/games/?search=${this.state.term}&fields=id,name,cover,genres,rating,summary,videos,popularity&order=popularity:desc&min&limit=50
    componentDidMount() {
        const CURRENT_UNIX_TIME_MS = new Date().getTime();
        try {
            axios(`${proxy}https://api-endpoint.igdb.com/games/?search=${this.state.term}&fields=id,name,cover,rating&order=aggregated_rating:desc&filter[first_release_date][lte]=${CURRENT_UNIX_TIME_MS}&filter[first_release_date][gt]=2018-06-01&filter[aggregated_rating][lt]=100&filter[popularity][gt]=15&limit=50&filter[cover][exists]=1`, {
                method: "GET",
                headers: {
                    "user-key": `${key}`,
                    "Accept": "application/json"
                }
            })
            .then(response => {
                if (response.data.length === 0) {
                    return (
                        <div className=" cards">
                            <h1>No results found</h1>
                        </div>
                    );
                }
                console.log(response.data)
                const gameList = response.data.map(game => {
                    if (game.hasOwnProperty('cover') ) { 
                        return (
                            <Card key={game.id} game={game}/>
                        )
                    } 
                })
                this.setState(() => ({gameList}));
            })        
        } catch (error) {
            alert(error)
        }
    }
    onSubmit =  (e)  => {
        e.preventDefault();
        this.setState(() => ({ gameList: []}))
        try {
            axios(`${proxy}https://api-endpoint.igdb.com/games/?search=${this.state.term}&fields=id,name,cover,genres,rating,summary,videos,popularity&order=popularity:desc&min&limit=50`, {
                method: "GET",
                headers: {
                    "user-key": `${key}`,
                    "Accept": "application/json"
                }
            })
            .then(response => {
                if (response.data.length === 0) {
                    return (
                        <div className=" cards">
                            <h1>No results found</h1>
                        </div>
                    );
                }
                console.log(response.data)
                const gameList = response.data.map(game => {
                    if (game.hasOwnProperty('cover') ) { 
                        return (
                            <Card key={game.id} game={game}/>
                        )
                    } 
                })
                this.setState(() => ({gameList}));
            })        
        } catch (error) {
            alert(error)
        }
    }
    render() {
        return (
            <div>
                <form className="search__input" onSubmit={this.onSubmit}>
                    <input 
                        className="search__input-form" 
                        placeholder="search..."
                        onChange={this.onChange} 
                    />
                    <button 
                        className="search__input-button"
                    >
                        Search
                    </button>
                </form>
                <div className="search__container">
                    {this.state.gameList}       
                </div>
            </div>
        );
    }
}





