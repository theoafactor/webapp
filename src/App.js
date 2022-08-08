import React from "react";
import Nav from "./Components/Nav/Nav";
import Banner from "./Components/Banner/Banner";
import Movies from "./Components/Movies/Movies";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
class App extends React.Component{

    constructor(){
      super()
    }


    render(){
        return (
          <React.Fragment>
            <Nav />
            <div className="container-fluid">
            <Banner />
            <Movies />
            </div>
          </React.Fragment>
          
        )
    }



}


export default App;