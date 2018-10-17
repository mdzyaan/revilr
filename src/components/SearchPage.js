import React from 'react';
import axios from 'axios';
import Card from './Card';
import { proxy, key } from '../config';

export default class SearchPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            term: '',
            gameList: [],
        }
    }

    onSearch =  (e)  => {
        e.preventDefault();
        const term = e.target.value;
        console.log(term);
        this.setState(() => ({ term }));
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
                <div className="search__input">
                    <input 
                        className="search__input-form" 
                        placeholder="Start typing..." 
                        onChange={this.onSearch}
                    />
                </div>
                <div className="search__container">
                    {this.state.gameList}
                    
                </div>
            </div>
        );
    }
}





