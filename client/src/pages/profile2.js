import React from "react";
import axios from "axios";
import API from "../utils/API";


class Profile2 extends React.Component {
    state = {
        firstName: "",
        lastName: "",
        email: "",
        id: ""
    }

    componentDidMount() {
        const userEmail = localStorage.getItem("userEmail");
        this.setState({
            email: userEmail
        })
        console.log(this.state.email);
        //this.getUserInfo();
    }
    
    getUserInfo = () => {
        API.getUser()
        .then()
    }

    render() {
        return(
            <h1>Profile2 component</h1>
        )
    }
}

export default Profile2;