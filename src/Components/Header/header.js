import React,{ Component } from 'react'
// import { Link } from "react-router-dom";
import styles from "./header.module.css";
import bell from "../../assets/headerIcons/bell.svg"
import profile from "../../assets/headerIcons/profile.svg"
import document from "../../assets/headerIcons/document.svg"
import profileUser from "../../assets/headerIcons/profile-user.svg"
import dollar from "../../assets/headerIcons/dollar.svg"
import question from "../../assets/headerIcons/question.svg"
import dotsMenu from "../../assets/headerIcons/dots-menu.svg"
import report from "../../assets/headerIcons/report.svg"
import info from "../../assets/headerIcons/info.svg"
import settings from "../../assets/headerIcons/settings.svg"
import loupe from "../../assets/headerIcons/loupe.svg"
import newspaper from "../../assets/headerIcons/newspaper.svg"
import store from "../../assets/headerIcons/store.svg"
import cube from "../../assets/headerIcons/cube.svg"
import AutoComplete from "../../Components/AutoComplete/autocomplete"


export default class Header extends Component{
    constructor(props) {
        super(props);
     
        this.state = {
          isShow: true,
          activeSideItem: 'POS'
        };
      }

    showSubMenu(menuName,showSideItem=true){
        this.state.activeSideItem = menuName
        this.state.showSideItem = showSideItem
        this.className = styles.sideIconActive
        window.addEventListener("click", this.focusOut.bind(this)); 
        this.setState(this.state)
    }

    focusOut(e){      
      if(e.clientX >= 100){
        this.state.showSideItem = false
        window.removeEventListener("click", this); 
        this.setState(this.state)
      }
    }
    render(){
        return (
        <div>
            <div className={ styles.header } >
                <div className={ styles.head } >
                    <span className={ styles.headText } >Company</span>
                </div>
                <div className={ styles.searchBox } >
                  <AutoComplete DropDownData={["A","AA","AAA","AAAAA","AAAAA"]} defaultText={"Global Search"} />                  
                </div>
                <div className={ styles.helpIcons } >
                    <img alt="" className={ styles.iconHelp }  src= { info } />
                    <img alt="" className={ styles.iconHelp }  src= { question } />
                    <img alt="" className={ styles.iconHelp }  src= { bell } />
                    <img alt="" className={ styles.iconHelp }  src= { dotsMenu } />
                    <img alt="" className={ styles.iconHelp }  src= { profileUser } onClick={this.props.logout}/>
                </div>
            </div>
            <div className={ styles.sideBar } >
                <div id="sidebar" className={ this.state.activeSideItem === 'POS'?styles.sideIconActive:styles.sideIcon} onClick={this.showSubMenu.bind(this,'POS',false)} >
                    <img alt="" className={ styles.iconSideBar }  src= { newspaper } />
                    <span className={ styles.iconText } >POS</span>
                </div>
                <div id="sidebar" className={ this.state.activeSideItem === 'Ticket'?styles.sideIconActive:styles.sideIcon} onClick={this.showSubMenu.bind(this,'Ticket',false)} >
                    <img alt="" className={ styles.iconSideBar }   src= { document } />
                    <span className={ styles.iconText } >Ticket</span>
                </div>
                <div id="sidebar" className={ this.state.activeSideItem === 'Items'?styles.sideIconActive:styles.sideIcon} onClick={this.showSubMenu.bind(this,'Items')}>
                    <img alt="" className={ styles.iconSideBar } src= { store } />
                    <span className={ styles.iconText } >Items</span>
                </div>
                <div id="sidebar" className={ this.state.activeSideItem === 'Customers'?styles.sideIconActive:styles.sideIcon } onClick={this.showSubMenu.bind(this,'Customers')}>
                    <img alt="" className={ styles.iconSideBar }  src= { profile } />
                    <span className={ styles.iconText } >Customers</span>
                </div>
                <div id="sidebar" className={ this.state.activeSideItem === 'Finances'?styles.sideIconActive:styles.sideIcon } onClick={this.showSubMenu.bind(this,'Finances')}>
                    <img alt="" className={ styles.iconSideBar }  src= { dollar } />
                    <span className={ styles.iconText } >Finances</span>
                </div>
                <div id="sidebar" className={ this.state.activeSideItem === 'Reports'?styles.sideIconActive:styles.sideIcon } onClick={this.showSubMenu.bind(this,'Reports')}>
                    <img alt="" className={ styles.iconSideBar }  src= { report } />
                    <span className={ styles.iconText } >Reports</span>
                </div>
                <div id="sidebar" className={ this.state.activeSideItem === 'Settings'?styles.sideIconActive:styles.sideIcon} onClick={this.showSubMenu.bind(this,'Settings',false)} >
                    <img alt="" className={ styles.iconSideBar }  src= { settings } />
                    <span className={ styles.iconText } >Settings</span>
                </div>
                <div className={ styles.sideIconHelp } >
                </div>
            </div>
          {  this.state.showSideItem &&
            <div className={ styles.sideItemBar} onBlur ={ this.focusOut.bind() }>
            
            
              {  this.state.activeSideItem === 'Reports' &&
                <span>
                <div className={ styles.sideItemHeadText} ><img alt="" src= { cube } />Overview</div>
                <div className={ styles.sideItemText} >Dashboard</div>
                <div className={ styles.sideItemText} >Multi-Store Report</div>
                <div className={ styles.sideItemText} >All Reports</div>

                <div className={ styles.sideItemHeadText} ><img alt="" src= { cube } />Sales Reports</div>
                <div className={ styles.sideItemText} >Sales Summary</div>
                <div className={ styles.sideItemText} >Sales By Item</div>
                <div className={ styles.sideItemText} >All Sales Report</div>

                <div className={ styles.sideItemHeadText} ><img alt="" src= { cube } />Inventory Reports</div>
                <div className={ styles.sideItemText} >Inventory Summary</div>
                <div className={ styles.sideItemText} >Low Stock</div>
                <div className={ styles.sideItemText} >All Inventory Reports</div>

                <div className={ styles.sideItemHeadText} ><img alt="" src= { cube } />Employee Reports</div>
                <div className={ styles.sideItemText} >Employee Activity Logs</div>
                <div className={ styles.sideItemText} >Employee Payrolls</div>
                <div className={ styles.sideItemText} >All Employee Reports</div>
                </span>
              }
                
              {  this.state.activeSideItem === 'Finances' &&
                <span>
                <div className={ styles.sideItemHeadText} ><img alt="" src= { cube } />Manage Invoices</div>
                <div className={ styles.sideItemText} >All Invoices</div>

                <div className={ styles.sideItemHeadText} ><img alt="" src= { cube } />Store Finances</div>
                <div className={ styles.sideItemText} >Expenses</div>
                <div className={ styles.sideItemText} >Cash In/Out</div>
                </span>
              }

              {  this.state.activeSideItem === 'Customers' &&
                <span>
                <div className={ styles.sideItemHeadText} ><img alt="" src= { cube } />Manage Customers</div>
                <div className={ styles.sideItemText} >All Customers</div>
                <div className={ styles.sideItemText} >Customer Groups</div>

                {/* <div className={ styles.sideItemHeadText} ><img alt="" src= { cube } />Manage Leads</div>
                <div className={ styles.sideItemText} >Appointments</div> */}

                <div className={ styles.sideItemHeadText} ><img alt="" src= { cube } />Manage Quotes</div>
                <div className={ styles.sideItemText} >Repair Estimates</div>

                <div className={ styles.sideItemHeadText} ><img alt="" src= { cube } />Customer Widgets</div>
                {/* <div className={ styles.sideItemText} >Appointment Calender</div>
                <div className={ styles.sideItemText} >Customer Facing Display</div>
                <div className={ styles.sideItemText} >Ticket Counter Display</div>
                <div className={ styles.sideItemText} >Repair Tracker</div>
                <div className={ styles.sideItemText} >Customer Portal (If Reqd)</div> */}
                <div className={ styles.sideItemText} >Email Compaigner</div>
                </span>
              }

              {  this.state.activeSideItem === 'Items' &&
                <span>
                <div className={ styles.sideItemHeadText} ><img alt="" src= { cube } />Manage Items</div>
                <div className={ styles.sideItemText} >Products</div>
                <div className={ styles.sideItemText} >Services</div>
                <div className={ styles.sideItemText} >Repair Parts</div>
                {/* <div className={ styles.sideItemText} >Buy Backs</div>
                <div className={ styles.sideItemText} >Gift Cards</div> */}
                <div className={ styles.sideItemText} >Items Bundles</div>
                {/* <div className={ styles.sideItemText} >Special Orders</div> */}

                <div className={ styles.sideItemHeadText} ><img alt="" src= { cube } />Manage Supply Chain</div>
                <div className={ styles.sideItemText} >Purchase Orders(PO)</div>
                <div className={ styles.sideItemText} >Goods Recieved Notes(GRN)</div>
                <div className={ styles.sideItemText} >Supplier Returns</div>

                <div className={ styles.sideItemHeadText} ><img alt="" src= { cube } />Manage MultiStore Inventory</div>
                <div className={ styles.sideItemText} >Transfer Inventory</div>

                <div className={ styles.sideItemHeadText} ><img alt="" src= { cube } />Manage Stock-takes</div>
                <div className={ styles.sideItemText} >Inventory Count</div>
                </span>
              }
            </div>
          }
        </div>
        )
    } 

}
