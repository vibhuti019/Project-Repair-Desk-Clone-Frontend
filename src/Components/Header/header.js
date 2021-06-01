import React,{ Component } from 'react'
import { Link } from "react-router-dom";
import styles from "./header.module.css";
import bell from "../../assets/headerIcons/bell.svg"
import profile from "../../assets/headerIcons/profile.svg"
import documentIcon from "../../assets/headerIcons/document.svg"
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
                  <AutoComplete name={ "AutocompleteDataHeader" } DropDownData={["A","AA","AAA","AAAAA","AAAAA"]} defaultText={"Global Search"} />                  
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
                <Link to="/dashboard/home" style={{textDecoration: "none",color:"inherit" }}>
                  <div id="sidebar" className={ this.state.activeSideItem === 'POS'?styles.sideIconActive:styles.sideIcon} onClick={this.showSubMenu.bind(this,'POS',false)} >
                      <img alt="" className={ styles.iconSideBar }  src= { newspaper } />
                      <span className={ styles.iconText } >POS</span>
                  </div>
                </Link>
                <Link to="/dashboard/ticket" style={{textDecoration: "none",color:"inherit" }}>
                  <div id="sidebar" className={ this.state.activeSideItem === 'Ticket'?styles.sideIconActive:styles.sideIcon} onClick={this.showSubMenu.bind(this,'Ticket',false)} >
                      <img alt="" className={ styles.iconSideBar }   src= { documentIcon } />
                      <span className={ styles.iconText } >Ticket</span>
                  </div>
                </Link>
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
                <Link to="/dashboard/settings" style={{textDecoration: "none",color:"inherit" }}>
                  <div id="sidebar" className={ this.state.activeSideItem === 'Settings'?styles.sideIconActive:styles.sideIcon} onClick={this.showSubMenu.bind(this,'Settings',false)} >
                      <img alt="" className={ styles.iconSideBar }  src= { settings } />
                      <span className={ styles.iconText } >Settings</span>
                  </div>
                </Link>                
                <div className={ styles.sideIconHelp } >
                </div>
            </div>
          {  this.state.showSideItem &&
            <div name="sideItemBar" className={ styles.sideItemBar} style={ {left: "-350px"} } onBlur ={ this.focusOut.bind() }>
            
              {  this.state.activeSideItem === 'Reports' &&
                <span>
                <div className={ styles.sideItemHeadText} ><img alt="" src= { cube } />Overview</div>
                <Link to="/dashboard/report/dashboard" style={{textDecoration: "none",color:"inherit",color:"inherit" }}>
                  <div className={ styles.sideItemText} >Dashboard</div>
                </Link>
                <Link to="/dashboard/report/multistore" style={{textDecoration: "none",color:"inherit" }}>
                  <div className={ styles.sideItemText} >Multi-Store Report</div>
                </Link>
                
                
                <div className={ styles.sideItemHeadText} ><img alt="" src= { cube } />Sales Reports</div>
                <Link to="/dashboard/report/salessummary" style={{textDecoration: "none",color:"inherit" }}>
                  <div className={ styles.sideItemText} >Sales Summary</div>
                </Link>
                <Link to="/dashboard/report/salesbyitem" style={{textDecoration: "none",color:"inherit" }}>
                  <div className={ styles.sideItemText} >Sales By Item</div>
                </Link>
                

                <div className={ styles.sideItemHeadText} ><img alt="" src= { cube } />Inventory Reports</div>
                <Link to="/dashboard/report/inventory" style={{textDecoration: "none",color:"inherit" }}>
                  <div className={ styles.sideItemText} >Inventory Summary</div>
                </Link>
                <Link to="/dashboard/report/lowstock" style={{textDecoration: "none",color:"inherit" }}>
                  <div className={ styles.sideItemText} >Low Stock</div>
                </Link>
                

                <div className={ styles.sideItemHeadText} ><img alt="" src= { cube } />Employee Reports</div>
                <Link to="/dashboard/report/employeeactivity" style={{textDecoration: "none",color:"inherit" }}>
                  <div className={ styles.sideItemText} >Employee Activity Logs</div>
                </Link>
                <Link to="/dashboard/report/employeepayrolls" style={{textDecoration: "none",color:"inherit" }}>
                  <div className={ styles.sideItemText} >Employee Payrolls</div>
                </Link>
                </span>
              }
                
              {  this.state.activeSideItem === 'Finances' &&
                <span>
                <div className={ styles.sideItemHeadText} ><img alt="" src= { cube } />Manage Invoices</div>
                <Link to="/dashboard/finance/allinvoices" style={{textDecoration: "none",color:"inherit" }}>
                  <div className={ styles.sideItemText} >All Invoices</div>
                </Link>

                <div className={ styles.sideItemHeadText} ><img alt="" src= { cube } />Store Finances</div>
                <Link to="/dashboard/finances/expenses" style={{textDecoration: "none",color:"inherit" }}>
                  <div className={ styles.sideItemText} >Expenses</div>
                </Link>
                <Link to="/dashboard/report/cashinout" style={{textDecoration: "none",color:"inherit" }}>
                  <div className={ styles.sideItemText} >Cash In/Out</div>
                </Link>
                </span>
              }

              {  this.state.activeSideItem === 'Customers' &&
                <span>
                <div className={ styles.sideItemHeadText} ><img alt="" src= { cube } />Manage Customers</div>
                <Link to="/dashboard/customers/allcustomers" style={{textDecoration: "none",color:"inherit" }}>
                  <div className={ styles.sideItemText} >All Customers</div>
                </Link>
                <Link to="/dashboard/customers/customergroups" style={{textDecoration: "none",color:"inherit" }}>
                  <div className={ styles.sideItemText} >Customer Groups</div>
                </Link>
                
                <div className={ styles.sideItemHeadText} ><img alt="" src= { cube } />Manage Quotes</div>
                <Link to="/dashboard/customers/estimates" style={{textDecoration: "none",color:"inherit" }}>
                  <div className={ styles.sideItemText} >Repair Estimates</div>
                </Link>

                <div className={ styles.sideItemHeadText} ><img alt="" src= { cube } />Customer Widgets</div>
                <Link to="/dashboard/customers/campaigner" style={{textDecoration: "none",color:"inherit" }}>
                  <div className={ styles.sideItemText} >Email Compaigner</div>
                </Link>
                </span>
              }

              {  this.state.activeSideItem === 'Items' &&
                <span>
                <div className={ styles.sideItemHeadText} ><img alt="" src= { cube } />Manage Items</div>
                <Link to="/dashboard/item/products" style={{textDecoration: "none",color:"inherit" }}>
                  <div className={ styles.sideItemText} >Products</div>
                </Link>
                <Link to="/dashboard/item/services" style={{textDecoration: "none",color:"inherit" }}>
                  <div className={ styles.sideItemText} >Services</div>
                </Link>
                <Link to="/dashboard/item/repairpart" style={{textDecoration: "none",color:"inherit" }}>
                  <div className={ styles.sideItemText} >Repair Parts</div>
                </Link>
                <Link to="/dashboard/item/itembundle" style={{textDecoration: "none",color:"inherit" }}>
                  <div className={ styles.sideItemText} >Items Bundles</div>
                </Link>

                <div className={ styles.sideItemHeadText} ><img alt="" src= { cube } />Manage Supply Chain</div>
                <Link to="/dashboard/item/puchaseorder" style={{textDecoration: "none",color:"inherit" }}>
                  <div className={ styles.sideItemText} >Purchase Orders(PO)</div>
                </Link>
                <Link to="/dashboard/item/grn" style={{textDecoration: "none",color:"inherit" }}>
                  <div className={ styles.sideItemText} >Goods Recieved Notes(GRN)</div>
                </Link>
                <Link to="/dashboard/item/supplierreturn" style={{textDecoration: "none",color:"inherit" }}>
                  <div className={ styles.sideItemText} >Supplier Returns</div>
                </Link>

                <div className={ styles.sideItemHeadText} ><img alt="" src= { cube } />Manage MultiStore Inventory</div>
                <Link to="/dashboard/item/multistoreinventory" style={{textDecoration: "none",color:"inherit" }}>
                  <div className={ styles.sideItemText} >Transfer Inventory</div>
                </Link>

                <div className={ styles.sideItemHeadText} ><img alt="" src= { cube } />Manage Stock-takes</div>
                <Link to="/dashboard/item/inventorycount" style={{textDecoration: "none",color:"inherit" }}>
                  <div className={ styles.sideItemText} >Inventory Count</div>
                </Link>
                </span>
              }
            </div>
          }
        </div>
        )
    } 
}
