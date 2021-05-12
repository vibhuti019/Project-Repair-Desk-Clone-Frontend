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
                    <img className={ styles.iconSideBar }  src= { document } />
                    <span className={ styles.iconText } >Ticket</span>
                </div>
                <div className={ styles.sideIcon } >
                    <img className={ styles.iconSideBar }  src= { store } />
                    <span className={ styles.iconText } >Items</span>
                </div>
                <div className={ styles.sideIcon } >
                    <img className={ styles.iconSideBar }  src= { profile } />
                    <span className={ styles.iconText } >Customers</span>
                </div>
                <div className={ styles.sideIcon } >
                    <img className={ styles.iconSideBar }  src= { dollar } />
                    <span className={ styles.iconText } >Finances</span>
                </div>
                <div className={ styles.sideIcon } >
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
        </div>
        )
    } 

}
