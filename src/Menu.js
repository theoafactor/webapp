import React from "react";

class Menu extends React.Component{

    constructor(props){
        super();

        console.log(props);
    }

    render(){

        this.props.getMenuProp(1234567)


        return (
            <div>
                <div>Home | About Us | Contact Us</div>
                <div>Welcome {this.props.userobject.firstname}</div>
                <p>{this.props.noteobject.title}</p>
            </div>
        )

    }



}

export default Menu;