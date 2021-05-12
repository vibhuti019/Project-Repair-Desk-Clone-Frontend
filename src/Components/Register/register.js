import React from 'react'
import { Link } from "react-router-dom";
import styles from "./register.module.css"


export default class RegisterComponent extends React.Component{

    render(){
        return(
            <div className={ styles.loginRegister }>
                <div className = { styles.carousalContainer }>
                    <Link className = { styles.button } to="/login">Login</Link>
                    <Link className = { styles.buttonSelected } to="/register">Register</Link>
                </div>
                <div className={ styles.inputContainer }>
                    <label className={ styles.headLabel }>Full Name</label>
                    <input className={ styles.text } placeholder="Enter name" name="LoginForm[username]" type="text" /> 
                </div>
                <div className={ styles.inputContainer }>
                    <label className={ styles.headLabel }>Email</label>
                    <input className={ styles.text } placeholder="Enter email" name="LoginForm[username]" type="text" /> 
                </div>
                <div className={ styles.inputContainer }>
                    <label className={ styles.headLabel }>Password</label>
                    <input className={ styles.text } placeholder="Enter password" name="LoginForm[username]" type="password" /> 
                </div>
                <div className={ styles.inputContainer }>
                    <label className={ styles.headLabel }>Confirm Password</label>
                    <input className={ styles.text } placeholder="Confirm password" name="LoginForm[username]" type="password" /> 
                </div>
                <button className={ styles.buttonAction }>Register</button>
            </div>
        )
    }

}