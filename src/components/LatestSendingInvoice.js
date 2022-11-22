import React from "react";

import "../components/latestsendinginvoice.css";
import Icon1 from '../assets/Icon1.png';
import Icon2 from '../assets/Icon2.png';
import Icon3 from '../assets/Icon3.png';
import Icon4 from '../assets/Icon4.png';

const LatestSendingInvoice =() =>{
    return(
        <div className="invoice">
            <h1>Latest Sending Invoices</h1>
            <div className="row">
                <div className="col-2">
                    <img src={Icon1} alt=""/>
                </div>
                <div className="col-8">
                    <div className="message">
                        <h6>ABCDef</h6>
                        <p>Successfully</p>
                    </div>
                </div>
                <div className="col-2 amount" style={{color: "#3629B7"}}>
                    +12000
                </div>
            </div>
            <div className="row">
                <div className="col-2">
                    <img src={Icon2} alt=""/>
                </div>
                <div className="col-8">
                    <div className="message">
                        <h6>ABCDef</h6>
                        <p>Successfully</p>
                    </div>
                </div>
                <div className="col-2 amount" style={{color:"#FF4267"}}>
                    +12000
                </div>
            </div>
            <div className="row">
                <div className="col-2">
                    <img src={Icon3} alt=""/>
                </div>
                <div className="col-8">
                    <div className="message">
                        <h6>ABCDef</h6>
                        <p>Successfully</p>
                    </div>
                </div>
                <div className="col-2 amount"style={{color:" #3629B7"}}>
                    +12000
                </div>
            </div>
            <div className="row">
                <div className="col-2">
                    <img src={Icon4} alt=""/>
                </div>
                <div className="col-8">
                    <div className="message">
                        <h6>ABCDef</h6>
                        <p>Successfully</p>
                    </div>
                </div>
                <div className="col-2 amount" style={{color:"#FF4267"}}>
                    +12000
                </div>
            </div>
        </div>
    )
}


export default LatestSendingInvoice;