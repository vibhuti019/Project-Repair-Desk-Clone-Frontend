import React from 'react'
import Header from '../../Components/Header/header'
import styles from './createTicket.module.css'

export default class CreateTicket extends React.Component{
    
    state = {
        loggedIn: false
      }

    logout(){
        localStorage.setItem('loggedIn', 'false');
        this.setState(this.state)
        window.location.href = "/"
    }

    render(){
        return (
            <div>
                <Header logout={this.logout.bind(this)}/>
                {/* <TableComponent /> */}
                <div className={ styles.container }>
                    <div className={ styles.leftContainer }>
                        
                    </div>
                    <div className={ styles.rightContainer }>

                    </div>
                </div>
            </div>
        )
    }
} 

