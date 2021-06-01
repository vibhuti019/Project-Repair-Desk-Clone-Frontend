import React from 'react'
import Header from '../../Components/Header/header'
import PointOfSale from '../../Components/POS/pointOfSale'
import { Switch,Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";


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
                <Switch>
                    <Route component={PointOfSale} path="/dashboard/home"></Route>
                    <Route component={PointOfSale} path="/dashboard/ticket"></Route>
                    <Route component={PointOfSale} path="/dashboard/settings"></Route>
                </Switch>
                {/* <Switch>
                    <Route path="/dashboard/home" component={PointOfSale} />
                    <Route path="/dashboard/Ticket">
                        <PointOfSale />
                    </Route>
                </Switch> */}
            </div>
        )
    }
} 

