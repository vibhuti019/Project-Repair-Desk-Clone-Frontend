import React from 'react'
import { Link } from "react-router-dom";
import styles from "./login.module.css";


export default class LoginComponent extends React.Component{

    render(){
        return(
            <div className={ styles.loginRegister }>
                <div className = { styles.carousalContainer }>
                    <div onClick={ ()=>{window.location.href='/login'} } className = { styles.buttonSelected }>Login</div>
                    <div onClick={ ()=>{window.location.href='/register'} } className = { styles.button }>Register</div>
                </div>
                <div className = { styles.head } >Login to your account</div>
                <div className={ styles.inputContainer }>
                    <label className={ styles.headLabel }>Email</label>
                    <input className={ styles.text } placeholder="Enter email" name="LoginForm[username]" type="text" /> 
                </div>
                <div className={ styles.inputContainer }>
                    <label className={ styles.headLabel }>Password</label>
                    <input className={ styles.text } placeholder="Enter password" name="LoginForm[username]" type="password" /> 
                </div>
                <div className = { styles.normalText } >Forgot Your Password?</div>
                <button className = { styles.buttonAction } onClick={this.props.login} >Login</button>
            </div>
        )
    }

}