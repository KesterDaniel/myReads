import {Link} from "react-router-dom"

import React, { Component } from 'react';

class Searchpage extends Component {
    render() {
        return (
            <div className="app">
                <div className="search-books">
                    <div className="search-books-bar">
                        <Link to="/" className="close-search">Close</Link>
                        <div className="search-books-input-wrapper">
                            <input type="text" placeholder="Search by title or author"></input>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Searchpage;