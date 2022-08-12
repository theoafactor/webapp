import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Register from "./Components/Register/Register";
import User from "./Components/User/User";
import Nav from "./Components/Nav/Nav";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import axios from "axios";

class App extends React.Component{

    constructor(){
      super()

      this.state = {
        moviesList: [],
        default_movies: [
          'Guardians of the Galaxy', 
        ]
      }

    }



    componentDidMount(){
      //  api request
      axios.get("http://www.omdbapi.com/?s=Guardians of the Galaxy&apikey=81e3fca8").then((data) => {
        console.log(data.data.Search)

        this.setState({
          moviesList: data.data.Search
        })
      })
    }




    render(){
        return (
          <>
            <Nav />
            <Routes>
                <Route path='/' element={<Home moviesListProp={this.state.moviesList}/>} />
            </Routes>
          </>
        )
    }

 

}


export default App;