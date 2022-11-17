import React from "react";
import classes from './login.module.css'
import Image  from "../assets/image.jpeg";
import LockIcon from '@mui/icons-material/Lock';
import EmailIcon from '@mui/icons-material/Email';
import Logo from '../assets/logo_googleg_48dp.png';
import Avat from '../assets/download.jpeg';
import FacebookIcon from '@mui/icons-material/Facebook';





const LoginPage = () =>{
    return(
        <div className={classes.container}>
          <div className={classes.leftsidebar}>
            <div className={classes.register}>
                <h5>Have an account?</h5>
                <button>Sign Up</button>
            </div>
           
           <h1>Welcome to CCL</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id at <br/> penatibus at sagittis. Elit fermentum, sit odio ullamcorper <br/> lectus facilisis cras vitae. </p>
            <img src={Image} alt="" />
            <form className={classes.form}>
             <div className={classes.textfield}>
              <label htmlFor="E-mail">E-mail</label>
              <input type="text" placeholder="Enter your email number"/>
              <EmailIcon/>
              </div>
              <div className={classes.textfield}>
              <label htmlFor="E-mail">Password</label>
              <input type="password" placeholder="Enter your password"/>
              <LockIcon/>
              </div>
              <button>Login</button>
            </form>
            <h6>Or sign in with</h6>
          <div className={classes.footer}>
            <img src={Logo} alt=""/>
            <FacebookIcon/>
          </div>
          </div>
          <div className={classes.rightsidebar}>
          <div className={classes.review}>
            <span/>
            <h1>Client <br/> Satisfaction <br/> Review</h1>
            <div className={classes.message}>
            <img src={Avat} alt=""/>
            <p>Lorem ipsum dolor sit amet,<br/> consectetur adipiscing elit. </p>
            <h5>Adam Smith</h5>
            <h6>Web Designer</h6>
           </div>
          </div>

          </div>
          </div>
    )
}


export default  LoginPage;