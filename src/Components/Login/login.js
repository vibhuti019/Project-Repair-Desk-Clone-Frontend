import React from 'react'
import { Link } from "react-router-dom";
import styles from "./login.module.css";


export default class LoginComponent extends React.Component{
    constructor(props) {
        super(props);
     
        this.state = {
          isShow: true,
        };
    }


    login() {
        this.setState(this.state)
        if( this.state.email === "admin@fleego.in" && this.state.password === "Abhishek@1"){
            localStorage.setItem('loggedIn', 'true')
            this.setState(this.state)
            window.location.href='/home'
        }else {
            console.log("Wrong Creds")
        }
    }

    render(){
        return(
            <div className={ styles.loginRegister }>
                <div className = { styles.carousalContainer }>
                    <Link className = { styles.buttonSelected } to="/login">Login</Link>
                    <Link className = { styles.button } to="/register">Register</Link>
                </div>
                <div className = { styles.head } >Login to your account</div>
                <div className={ styles.inputContainer }>
                    <label className={ styles.headLabel }>Email</label>
                    <input className={ styles.text } onChange={ (event)=>{this.state.email = event.target.value } } placeholder="Enter email" type="text" /> 
                </div>
                <div className={ styles.inputContainer }>
                    <label className={ styles.headLabel }>Password</label>
                    <input className={ styles.text } placeholder="Enter password" onChange={ (event)=>{this.state.password = event.target.value } } type="password" /> 
                </div>
                <div className = { styles.normalText } >Forgot Your Password?</div>
                <button className = { styles.buttonAction } onClick={ this.login.bind(this) } >Login</button>
            </div>
        )
    }

}
// onClick={ ()=>{window.location.href='/register'} }