import React from 'react'
import LoginComponent from "../../Components/Login/login"
import RegisterComponent from "../../Components/Register/register"
import styles from "./repairdeskhome.module.css"
import { BrowserRouter as Switch, Route } from "react-router-dom";


export default class RepairDeskHome extends React.Component{

    state = {
        loggedIn: true,
        image: [1,0,0,0,0,0]
      };

    

    login(){
        localStorage.setItem('loggedIn', 'true')
        this.setState(this.state)
    }

    render(){
        return (
            <div>
                <div className = { styles.main } >
                    <div className = { styles.mainContainer } >
                        <Switch>
                            <Route path="/" exact>
                                <LoginComponent login={this.login.bind(this)}/>
                            </Route>
                            <Route path="/login" exact>
                                <LoginComponent login={this.login.bind(this)}/>
                            </Route>
                            <Route path="/register" exact>
                                <RegisterComponent login={this.login.bind(this)}/>
                            </Route>
                        </Switch>
                    </div>
                    <div className = { styles.advtContainer } >
                        <div className = { styles.imageContainer } >
                            <div className = { styles.image } >
                                    <h1>Advt Image Here</h1>
                            </div>
                            <div className = { styles.carousalContainer } >
                                <div className = { styles.new } ></div>
                                <div className = { styles.new } ></div>
                                <div className = { styles.new } ></div>
                                <div className = { styles.new } ></div>
                                <div className = { styles.new } ></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            )
    }
} 

