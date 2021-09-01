import React from 'react';
import ReactDOM from 'react-dom'
import Axios from 'axios'

class Payment extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            cardNo: undefined,
            Name: undefined,
            validityDate: undefined,
            cvv:""
        }
    }


    Name = (e) => {
        e.preventDefault();
        this.state.Name = e.target.value
        // console.log(this.state.firstName)
    }
    cardNo = (e) => {
        e.preventDefault();
        this.state.cardNo = e.target.value
    }
    validity = (e) => {
        e.preventDefault();
        this.state.validityDate = e.target.value
    }
    cvv=(e)=>{
        e.preventDefault();
        this.state.cvv=e.target.value
    }

    onSubmit = (e) => {
        e.preventDefault();
        Axios.post("http://localhost:3001/paymentDetails", {
            cardNo:this.state.cardNo,
            Name: this.state.Name,
            validityDate : this.state.validityDate,
            cvv:this.state.cvv
        }).then(()=>{
            console.log("sucess")
        })
    }

    render() {
        return (
            <div>
                <form className="payment_form" onSubmit={this.onSubmit}>
                    <h4>Payment Details:-</h4>
                    <input className="paymentName" placeholder="Enter your name" onChange={this.Name} ></input>
                    <br />
                    <input className="paymentCN" type="number" maxLength='16' placeholder="Enter ur 16 digit card no." onChange={this.cardNo} ></input>
                    <br />
                    <input className="paymentMY" placeholder="Enter Expiry month & year" onChange={this.validity}></input>
                    <br/>
                    <input type="password" className="paymentCVV" maxLength='3' placeholder="Enter 3 digit CVV" onChange={this.cvv}></input>
                    <br />
                    <button className="user__button" onChange={this.onClick}>Confirm</button>
                    <div className="cabDetails">
                        <a href="/confirmPage">Submit</a>
                        <br/>
                        <a href="userDetails">Go back</a>
                    </div>
                </form>
            </div>
        )
    }
}

//  

export default Payment

ReactDOM.render(<Payment/>, document.getElementById('app'));