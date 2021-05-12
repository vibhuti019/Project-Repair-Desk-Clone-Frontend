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
// onClick={ ()=>{window.location.href='/register'} }