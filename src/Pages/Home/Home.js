import React from 'react'
import Header from '../../Components/Header/header'
import TableComponent from '../../Components/Table/table';
import styles from "./home.module.css";
import AutoComplete from "../../Components/AutoComplete/autocomplete"

export default class Home extends React.Component{
    
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
                <div className={ styles.container } >
                    <div className= { styles.leftContainer } >
                        <div className = { styles.openATicket } >
                            <div className = { styles.openATicketContainer }>
                                <div className={ styles.openATicketHead }>
                                    Search All Open Ticket Or Invoices
                                </div>
                                <AutoComplete DropDownData={["A","AA","AAA","AAAAA","AAAAA"]} defaultText={"Enter Invoice Or Ticket Number"} />                  
                            </div>
                        </div>
                        <div className = { styles.dataContainer } >
                            <div className = { styles.openATicketContainer }>
                                <div className={ styles.openATicketHead }>
                                    Search All Open Ticket Or Invoices
                                </div>
                            </div>
                            <div>
                                <div>

                                </div>
                                <div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className= { styles.rightContainer } >

                    </div>
                </div>
            </div>
        )
    }
} 

