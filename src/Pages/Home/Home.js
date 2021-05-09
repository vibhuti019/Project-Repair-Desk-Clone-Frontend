import React from 'react'
import Header from '../../Components/Header/header'

export default class Home extends React.Component{
    
    state = {
        loggedIn: false
      }

    logout(){
        localStorage.setItem('loggedIn', 'false');
        this.setState(this.state)
    }

    render(){
        return (
            <div>
                <Header logout={this.logout.bind(this)}/>
            </div>
        )
    }
} 

