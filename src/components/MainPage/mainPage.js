import {React, Component} from 'react';
import axios from 'axios';


class MainPage {
    constructor(){
        this.search = this.search.bind(this);
        this.state = {
            movies:[]
        };
    }
    search(e){

    }
    render(){
        return(
            <div>
                <input type="text" placeholder="Search..."/><button>Search</button>
            </div>
        );
    }
}

export default MainPage;