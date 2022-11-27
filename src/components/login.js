import React from "react";
import '../components/login.css';
import Image  from "../assets/image.jpeg";
import LockIcon from '@mui/icons-material/Lock';
import EmailIcon from '@mui/icons-material/Email';

import Avat from '../assets/download.jpeg';
import FacebookIcon from '@mui/icons-material/Facebook';
import { Container,Row, Col } from "react-bootstrap";
import GoogleIcon from '@mui/icons-material/Google';




const LoginPage = () =>{
    return(
  
        <Container >
          <Row className="login mt-5" >
            <Col xl={1} lg={1} md={2}  sm={1} xs={1}></Col>
            <Col xl={5} lg={5} md={4} sm={5} xs={5}style={{marginBottom: "40px"}} >
            
            <div className="leftsidebar">
            <div className="register">
                <h5>Have an account?</h5>
                <button>Sign Up</button>
            </div>
           
           <h1>Welcome to CCL</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id at <br/> penatibus at sagittis. Elit fermentum, sit odio ullamcorper <br/> lectus facilisis cras vitae. </p>
            <img className="pic" src={Image} alt="" />
            <form className="form">
             <div className="textfield">
              <label htmlFor="E-mail">E-mail</label>
              <input type="text" placeholder="Enter your email number"/>
              <EmailIcon/>
              </div>
              <div className="textfield">
              <label htmlFor="E-mail">Password</label>
              <input type="password" placeholder="Enter your password"/>
              <LockIcon/>
              </div>
              <button>Login</button>
            </form>
            <h5 className="signinwith">Or sign in with</h5>
          <div className="last">
           <GoogleIcon/>
            <FacebookIcon className="svg"/>
          </div>
          </div>
         
            </Col>
            <Col xl={6} lg={6} md={6} className="	d-none d-sm-block d-sm-none d-md-block d-md-none d-lg-block" >
            <div className="rightsidebar">
          <div className="review">
            <span/>
            <h1>Client <br/> Satisfaction <br/> Review</h1>
            
            <div className="message">
            <img src={Avat} alt=""/>
            <p>Lorem ipsum dolor sit amet,<br/> consectetur adipiscing elit. </p>
            <h5>Adam Smith</h5>
            <h6>Web Designer</h6>
           </div>
          </div>

          </div>
            </Col>
          </Row>
         
          </Container>
    )
}


export default  LoginPage;