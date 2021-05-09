import React from 'react'
import LoginComponent from "../../Components/Login/login"
import styles from "./repairdeskhome.module.css"

export default class RepairDeskHome extends React.Component{

    state = {
        loggedIn: true
      };

    

    login(){
        localStorage.setItem('loggedIn', 'true')
        this.setState(this.state)
    }

    render(){
        console.log("Change")
        return (
            <div>
                <div className = { styles.main } >
                    <div className = { styles.mainContainer } >
                        <div className = { styles.loginRegister }>
                            <div className = { styles.carousalContainer }>
                                <div className = { styles.buttonSelected }>Login</div>
                                <div className = { styles.button }>Register</div>
                            </div>
                            <LoginComponent login={this.login.bind(this)}/>
                        </div>
                    </div>
                    <div className = { styles.advtContainer } >
                        <div className = { styles.imageContainer } >
                            <div className = { styles.image } >

                            </div>
                            <div className = { styles.carousalContainer } >
                                <div className = { styles.new } ></div>
                                <div className = { styles.newSelected } ></div>
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

