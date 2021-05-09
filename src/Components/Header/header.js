import React,{ Component } from 'react'
import { Link } from "react-router-dom";

export default class Header extends Component{

    render(){
        return (
            <div>
                This is User Header
                <button onClick={this.props.logout} ><Link to ="/">Logout</Link></button>
            </div>
        )
    } 

}
