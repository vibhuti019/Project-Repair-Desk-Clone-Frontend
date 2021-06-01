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
                        <div style={ {display: "inline-flex"} }>
                            <div className ={ styles.dataButton }>
                                <p>Create A Ticket</p>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" class="white--text test-icon icon icon-tabler icon-tabler-chevron-right">   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>   <polyline points="9 6 15 12 9 18"></polyline> </svg>
                            </div>
                            <div className ={ styles.dataButton }>
                                <p>Sell Product</p>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" class="white--text test-icon icon icon-tabler icon-tabler-chevron-right">   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>   <polyline points="9 6 15 12 9 18"></polyline> </svg>
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

