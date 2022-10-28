import { Component } from "react";
import { Route, Routes } from "react-router-dom";
import * as BookApi from "./BooksAPI"
import Home from "./home"
import Searchpage from "./searchpage";


class App extends Component{
    state = {
        currentlyReading: [],
        wantToRead: [],
        Read: []
    }
    render() {
        return (
            <div className="App">
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/search" element={<Searchpage/>}/>
                </Routes>
            </div>
        );
    }
}

export default App