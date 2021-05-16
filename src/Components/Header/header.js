import React,{ Component } from 'react'
import { Link } from "react-router-dom";
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
import square from "../../assets/headerIcons/square.svg"
import newspaper from "../../assets/headerIcons/newspaper.svg"
import store from "../../assets/headerIcons/store.svg"

export default class Header extends Component{
    constructor(props) {
        super(props);
     
        this.state = {
          isShow: true,
        };
      }

    showSubMenu(menuName){
        this.state.activeSideItem = menuName
        this.state.showSideItem = true
        this.setState(this.state)
    }

    focusOut(){
      this.state.showSideItem = false
      this.setState(this.state)
    }
    render(){
        return (
        <div>
            <div className={ styles.header } >
                <div className={ styles.head } >
                    <span className={ styles.headText } >Company</span>
                </div>
                <div className={ styles.searchBox } >
                    <input className={ styles.search } type="text" placeholder="Global Search" />
                    <img className={ styles.icon }  src= { loupe } />
                </div>
                <div className={ styles.helpIcons } >
                    <img className={ styles.iconHelp }  src= { info } />
                    <img className={ styles.iconHelp }  src= { question } />
                    <img className={ styles.iconHelp }  src= { bell } />
                    <img className={ styles.iconHelp }  src= { dotsMenu } />
                    <img className={ styles.iconHelp }  src= { profileUser } onClick={this.props.logout}/>
                </div>
            </div>
            <div className={ styles.sideBar } >
                <div className={ styles.sideIcon } >
                    <img className={ styles.iconSideBar }  src= { newspaper } />
                    <span className={ styles.iconText } >POS</span>
                </div>
                <div className={ styles.sideIcon } >
                    <img className={ styles.iconSideBar }   src= { document } />
                    <span className={ styles.iconText } >Ticket</span>
                </div>
                <div className={ styles.sideIcon } onClick={this.showSubMenu.bind(this,'Items')}>
                    <img className={ styles.iconSideBar } src= { store } />
                    <span className={ styles.iconText } >Items</span>
                </div>
                <div className={ styles.sideIcon } onClick={this.showSubMenu.bind(this,'Customers')}>
                    <img className={ styles.iconSideBar }  src= { profile } />
                    <span className={ styles.iconText } >Customers</span>
                </div>
                <div className={ styles.sideIcon } onClick={this.showSubMenu.bind(this,'Finances')}>
                    <img className={ styles.iconSideBar }  src= { dollar } />
                    <span className={ styles.iconText } >Finances</span>
                </div>
                <div className={ styles.sideIcon } onClick={this.showSubMenu.bind(this,'Reports')}>
                    <img className={ styles.iconSideBar }  src= { report } />
                    <span className={ styles.iconText } >Reports</span>
                </div>
                <div className={ styles.sideIcon } >
                    <img className={ styles.iconSideBar }  src= { settings } />
                    <span className={ styles.iconText } >Settings</span>
                </div>
                <div className={ styles.sideIconHelp } >
                </div>
            </div>
          {  this.state.showSideItem &&
            <div className={ styles.sideItemBar} onBlur ={ this.focusOut.bind() }>
            
            
              {  this.state.activeSideItem == 'Reports' &&
                <span>
                <div className={ styles.sideItemHeadText} ><img src= { info } />Overview</div>
                <div className={ styles.sideItemText} >Dashboard</div>
                <div className={ styles.sideItemText} >Multi-Store Report</div>
                <div className={ styles.sideItemText} >All Reports</div>

                <div className={ styles.sideItemHeadText} ><img src= { info } />Sales Reports</div>
                <div className={ styles.sideItemText} >Sales Summary</div>
                <div className={ styles.sideItemText} >Sales By Item</div>
                <div className={ styles.sideItemText} >All Sales Report</div>

                <div className={ styles.sideItemHeadText} ><img src= { info } />Inventory Reports</div>
                <div className={ styles.sideItemText} >Inventory Summary</div>
                <div className={ styles.sideItemText} >Low Stock</div>
                <div className={ styles.sideItemText} >All Inventory Reports</div>

                <div className={ styles.sideItemHeadText} ><img src= { info } />Employee Reports</div>
                <div className={ styles.sideItemText} >Employee Activity Logs</div>
                <div className={ styles.sideItemText} >Employee Payrolls</div>
                <div className={ styles.sideItemText} >All Employee Reports</div>
                </span>
              }
                
              {  this.state.activeSideItem == 'Finances' &&
                <span>
                <div className={ styles.sideItemHeadText} ><img src= { info } />Manage Invoices</div>
                <div className={ styles.sideItemText} >All Invoices</div>

                <div className={ styles.sideItemHeadText} ><img src= { info } />Store Finances</div>
                <div className={ styles.sideItemText} >Expenses</div>
                <div className={ styles.sideItemText} >Cash In/Out</div>
                </span>
              }

              {  this.state.activeSideItem == 'Customers' &&
                <span>
                <div className={ styles.sideItemHeadText} ><img src= { info } />Manage Customers</div>
                <div className={ styles.sideItemText} >All Customers</div>
                <div className={ styles.sideItemText} >Customer Groups</div>

                <div className={ styles.sideItemHeadText} ><img src= { info } />Manage Leads</div>
                <div className={ styles.sideItemText} >Appointments</div>

                <div className={ styles.sideItemHeadText} ><img src= { info } />Manage Quotes</div>
                <div className={ styles.sideItemText} >Repair Estimates</div>

                <div className={ styles.sideItemHeadText} ><img src= { info } />Customer Widgets</div>
                <div className={ styles.sideItemText} >Appointment Calender</div>
                <div className={ styles.sideItemText} >Customer Facing Display</div>
                <div className={ styles.sideItemText} >Ticket Counter Display</div>
                <div className={ styles.sideItemText} >Repair Tracker</div>
                <div className={ styles.sideItemText} >Customer Portal (If Reqd)</div>
                <div className={ styles.sideItemText} >Email Compaigner (If Reqd)</div>
                </span>
              }

              {  this.state.activeSideItem == 'Items' &&
                <span>
                <div className={ styles.sideItemHeadText} ><img src= { info } />Manage Items</div>
                <div className={ styles.sideItemText} >Products</div>
                <div className={ styles.sideItemText} >Services</div>
                <div className={ styles.sideItemText} >Repair Parts</div>
                <div className={ styles.sideItemText} >Buy Backs</div>
                <div className={ styles.sideItemText} >Gift Cards</div>
                <div className={ styles.sideItemText} >Items Bundles</div>
                <div className={ styles.sideItemText} >Special Orders</div>

                <div className={ styles.sideItemHeadText} ><img src= { info } />Manage Supply Chain</div>
                <div className={ styles.sideItemText} >Purchase Orders(PO)</div>
                <div className={ styles.sideItemText} >Goods Recieved Notes(GRN)</div>
                <div className={ styles.sideItemText} >Supplier Returns</div>

                <div className={ styles.sideItemHeadText} ><img src= { info } />Manage MultiStore Inventory</div>
                <div className={ styles.sideItemText} >Transfer Inventory</div>

                <div className={ styles.sideItemHeadText} ><img src= { info } />Manage Stock-takes</div>
                <div className={ styles.sideItemText} >Inventory Count</div>
                </span>
              }
            </div>
          }
        </div>
        )
    } 

}
