import React from 'react'
import { Link } from "react-router-dom";


export default class LoginComponent extends React.Component{

    render(){
        return(
            <div>
                <button onClick={this.props.login} ><Link to ="/home">Login</Link></button>
            </div>
        )
    }

}