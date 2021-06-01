import React from 'react'
import Header from '../../Components/Header/header'
// import PointOfSale from '../../Components/POS/pointOfSale'
// import TableComponent from '../../Components/Table/table'
// import { Switch,Route } from "react-router-dom";
// import { BrowserRouter } from "react-router-dom";
import styles from './home.module.css'
import bug from '../../assets/iconsExtra/bug.svg'
import square from '../../assets/iconsExtra/square.svg'
import AutoComplete from '../../Components/AutoComplete/autocomplete'


export default class Home extends React.Component{
    

    logout(){
        localStorage.setItem('loggedIn', 'false');
        this.setState(this.state)
        window.location.href = "/"
    }

    constructor(props) {
    super(props);
    
        this.state = {
            isShow: true,
            activeItem: 'Repair',
            loggedIn: false
        };
    }

    showSubMenu(menuName){
        this.state.activeItem = menuName
        this.setState(this.state)
        console.log(this.state)
    }

    render(){
        return (
            <div>
                <Header logout={this.logout.bind(this)}/>
                {/* <TableComponent /> */}
                {/* <Switch>
                    <Route component={PointOfSale} path="/dashboard/home"></Route>
                    <Route component={TableComponent} data path="/dashboard/ticket"></Route>
                    <Route component={PointOfSale} path="/dashboard/settings"></Route>
                </Switch> */}
                <div className={ styles.container }>
                    <div className={ styles.leftContainer }>
                        <div style={ {display: "flex", alignSelf: "start", justifyItems: "start"} }>
                            <div className={ styles.tabs }>
                                <div className={ this.state.activeItem === 'Repair'?styles.tabsActive:"" } onClick={this.showSubMenu.bind(this,'Repair')}>
                                    <img src={ bug } />
                                    Repair
                                </div>
                                <div className={ this.state.activeItem === 'Products'?styles.tabsActive:"" } onClick={this.showSubMenu.bind(this,'Products')}>
                                    <img src={ square } />
                                    Products
                                </div>
                            </div>
                        </div>
                        {
                            this.state.activeItem === 'Repair' &&
                            <div>
                                <div>
                                    <AutoComplete DropDownData={["A","AA","AAA","AAAAA","ABBBA"]} defaultText={"Enter Product"} name="AutocompletePointOfSale"/>                  
                                </div>
                            </div>
                        }
                        {
                            this.state.activeItem === 'Products' &&
                            <div>
                                <div>
                                    <AutoComplete DropDownData={["A","AA","AAA","AAAAA","ABBBA"]} defaultText={"Enter Product"} name="AutocompleteTicket"/>                  
                                </div>
                                <div>
                                    <AutoComplete DropDownData={["A","AA","AAA","AAAAA","ABBBA"]} defaultText={"Enter Product"} name="AutocompletePointOfSale"/>                  
                                </div>
                            </div>
                        }
                    </div>
                    <div className={ styles.rightContainer }>

                    </div>
                </div>
            </div>
        )
    }
} 

