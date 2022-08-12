import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Register from "./Components/Register/Register";
import User from "./Components/User/User";
import PageNotFound from "./Components/PageNotFound/PageNotFound";
import EmailContact from "./Components/EmailContact/EmailContact";
import PhoneContact from "./Components/PhoneContact/PhoneContact";
import Nav from "./Components/Nav/Nav";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import axios from "axios";

class App extends React.Component{

    constructor(){
      super()

      this.state = {
        show_nav_bar: <Nav />,
        results: []
      }

      console.log("Constructor called ...")

    }

    accessPageNotFound = () => {
        this.setState({
          show_nav_bar: <></>
        })
    }

    componentDidMount(){
      //  api request
      console.log("Compnent mounted ...")
      //check whatever I want to check
      // this.setState({
      //   show_nav_bar: this.state.show_nav_bar == true ? false : true
      // })

      axios.get("https://randomuser.me/api/?results=50").then((data) => {
          //console.log(data.data.results)
          this.setState({
            results: data.data.results
          })

      })
    }



    componentDidUpdate(){
      console.log("Compnent updated ...")
      // console.log(this.state.show_nav_bar)
      
    }

    componentWillUnmount(){
      console.log("Compnent unmounted ...")
    }


    render(){
      console.log("Compnent rendered ...")
        return (
          <>
            {this.state.show_nav_bar}
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/about-us' element={<About/>} />
              <Route path='/contact-us' element={<Contact/>}>
                <Route path='email' element={<EmailContact />}/>
                <Route path='phone' element={<PhoneContact />}/>
              </Route>
              <Route path='/user/:userid' element={<User />}/>
              <Route path='/register' element={<Register />}/>
              <Route path='*' element={<PageNotFound showNavProp={this.accessPageNotFound}/>}/>
            </Routes>
          </>
          
        )
    }



}


export default App;