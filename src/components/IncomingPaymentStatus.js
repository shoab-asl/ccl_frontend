import React from "react";
import "../components/incomingpaymentstatus.css";

const IncomingPaymentStatus =()=>{
 

    const DUMMY_DATA=[
        {
          
         companyname: "Intertico " , 
         type: "Web, UI/UX Design", 
        },
        {
            companyname: "Agoda" , 
            type: "Houses & Hotels", 
           },
           {
            companyname: "RoadGee" , 
            type: "Transportation", 
           },
           {
            companyname: "The Hill " , 
            type: "Insurance", 
           }
    ]
    const DUMMY_DATA2 =[
        {
            date: "Sep 10, 2022",
            lastpayment: "last payment- Sep 9, 2021",
        },
        {
            date: "Sep 10, 2022",
            lastpayment: "last payment- Sep 9, 2021",
        },
        {
            date: "Sep 10, 2022",
            lastpayment: "last payment- Sep 9, 2021",
        },
        {
            date: "Sep 10, 2022",
            lastpayment: "last payment- Sep 9, 2021",
        }
    ]

    const DUMMY_DATA3=[
        {
            amount: "$520",
            status: "Last Payment by Check"
        },
        {
            amount: "$1020",
            status: "Last Payment by Bank"
        },
        {
            amount: "$840",
            status: "Last Payment by Cash"
        },
        {
            amount: "$520",
            status: "New Payment"
        },
    ]

    return(
        <div className="paymentstatus">
            <h1>Incoming Payment Status</h1>
            <p>We are showing here top 4 companies payment status</p>
            
            <div className="row ">
         
                <div className="col-3">
              
                    <div className="message">
                    <h2>Company</h2>
                    {DUMMY_DATA.filter(companyname => companyname.companyname).map(filteredName => (
                   <ul> 
                    <li className="company">{filteredName.companyname}</li>
                   <li className="status">{filteredName.type}</li>
                   </ul>

  ))}
                    </div>
                </div>
                <div className="col-3">
                
                    <div className="message">
                    <h2>Due Date</h2>
                    {DUMMY_DATA2.filter(date => date.date).map(filteredDate => (
                   <ul> 
                    <li className="date">{filteredDate.date}</li>
                   <li className="status">{filteredDate.lastpayment}</li>
                   </ul>

  ))}
                    </div>
                </div>
                <div className="col-3">
              
                    <div className="message">
                    <h2>Due Date</h2>
                    {DUMMY_DATA3.filter(amount => amount.amount).map(filteredAmount => (
                   <ul> 
                    <li className="amount">{filteredAmount.amount}</li>
                   <li className="status">{filteredAmount.status}</li>
                   </ul>

  ))}
                    </div>
                </div>
             
                <div className="col-3">
                    <div className="message">
                        <h6>ABCDef</h6>
                        <p>Successfully</p>
                    </div>
                </div>
                
                
            </div>
        </div>
    )
}

export default IncomingPaymentStatus;