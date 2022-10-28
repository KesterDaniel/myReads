import { Component } from "react";
import { Route, Routes } from "react-router-dom";
import * as BookApi from "./BooksAPI"
import Home from "./home"
import Searchpage from "./searchpage";


class App extends Component{
    state = {
        currentlyReading: [],
        wantToRead: [],
        Read: [],
        allbooks: []
    }
    async componentDidMount(){
        const books = await BookApi.getAll()
        const currentlyReading = books.filter((book)=>book.shelf ==="currentlyReading")
        const wantToRead = books.filter((book)=>book.shelf ==="wantToRead")
        const Read = books.filter((book)=>book.shelf ==="read")
        this.setState({currentlyReading})
        this.setState({wantToRead})
        this.setState({Read})
        console.log(this.state)
        
    }
    render() {
        return (
            <div className="App">
                <Routes>
                    <Route path="/" element={
                        <Home 
                            currentlyReading={this.state.currentlyReading}
                            wantToRead={this.state.wantToRead}
                            Read={this.state.Read}
                        />
                    }/>
                    <Route path="/search" element={<Searchpage/>}/>
                </Routes>
            </div>
        );
    }
}

export default App