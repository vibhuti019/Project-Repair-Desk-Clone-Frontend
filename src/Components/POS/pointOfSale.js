import React from 'react'
import styles from "./pointOfSale.module.css";
import AutoComplete from "../../Components/AutoComplete/autocomplete"

export default class PointOfSale extends React.Component{
    
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
                <div className={ styles.container } >
                    <div className= { styles.leftContainer } >
                        <div className = { styles.openATicket } >
                            <div className = { styles.openATicketContainer }>
                                <div className={ styles.openATicketHead }>
                                    Search All Open Ticket Or Invoices
                                </div>
                                <AutoComplete DropDownData={["A","AA","AAA","AAAAA","ABBBA"]} defaultText={"Enter Invoice Or Ticket Number"} name="AutocompletePointOfSale"/>                  
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
                        <div className={ styles.dataContain }>
                            <span>Coming Soon</span>
                            <div className ={ styles.dataButton }>
                                <p>Claim Wrranty</p>
                                <svg data-v-d62d1586="" xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" class="primary--text test-icon icon icon-tabler icon-tabler-truck-return">   <path data-v-d62d1586="" stroke="none" d="M0 0h24v24H0z" fill="none"></path>   <circle data-v-d62d1586="" cx="7" cy="17" r="2"></circle>   <circle data-v-d62d1586="" cx="17" cy="17" r="2"></circle>   <path data-v-d62d1586="" d="M5 17h-2v-11a1 1 0 0 1 1 -1h9v6h-5l2 2m0 -4l-2 2"></path>   <line data-v-d62d1586="" x1="9" y1="17" x2="15" y2="17"></line>   <path data-v-d62d1586="" d="M13 6h5l3 5v6h-2"></path> </svg>
                            </div>
                            <div className ={ styles.dataButton }>
                                <p>Issue Refund</p>
                                <svg data-v-d62d1586="" xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" class="primary--text test-icon icon icon-tabler icon-tabler-receipt-refund">   <path data-v-d62d1586="" stroke="none" d="M0 0h24v24H0z" fill="none"></path>   <path data-v-d62d1586="" d="M5 21v-16a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v16l-3 -2l-2 2l-2 -2l-2 2l-2 -2l-3 2"></path>   <path data-v-d62d1586="" d="M15 14v-2a2 2 0 0 0 -2 -2h-4l2 -2m0 4l-2 -2"></path> </svg>
                            </div>
                            <div className ={ styles.dataButton }>
                                <p>Inquiry Log</p>
                                <svg data-v-d62d1586="" xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" class="primary--text test-icon icon icon-tabler icon-tabler-file-phone">   <path data-v-d62d1586="" stroke="none" d="M0 0h24v24H0z" fill="none"></path>   <path data-v-d62d1586="" d="M14 3v4a1 1 0 0 0 1 1h4"></path>   <path data-v-d62d1586="" d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z"></path>   <path data-v-d62d1586="" d="M9 12a0.5 .5 0 0 0 1 0v-1a0.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a0.5 .5 0 0 0 0 -1h-1a0.5 .5 0 0 0 0 1"></path> </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
} 

