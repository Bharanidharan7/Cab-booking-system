
import React from 'react'
import ReactDOM from 'react-dom'
import Axios from 'axios';
class UserDetails extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            Fname: undefined,
            Lname: undefined,
            mail: undefined,
            number: undefined,
            address: undefined
        }
    }

    onFNameChange = (e) => {
        e.preventDefault();
        this.state.Fname = e.target.value
        // console.log(this.state.Fname)
    }
    onLNameChange = (e) => {
        e.preventDefault();
        this.state.Lname = e.target.value
        // console.log(this.state.Lname)
    }

    onMailChange = (e) => {
        this.state.mail = e.target.value
        // console.log(this.state.mail)
    }

    onNumChange = (e) => {
        e.preventDefault();
        this.state.number = e.target.value
        // console.log(this.state.number)
    }
    onAddressChange = (e) => {
        e.preventDefault();
        this.state.address = e.target.value
        // console.log(this.state.address)
    }
    onClick = (e) => {
        e.preventDefault();

        Axios.post("http://localhost:3001/create", { 
            Fname: this.state.Fname, 
            Lname: this.state.Lname, 
            address:this.state.address,
            mail:this.state.mail ,
            number:this.state.number
        }).then(()=>{
            console.log("sucess")
        })
        // if (this.state.Fname && this.state.Lname) {
        //     Axios.post("http://localhost:3001/create", { Fname: this.state.Fname, Lname: this.state.Lname }).then(()=>{
        //         console.log("sucess for F&L name");
        //     })
            // alert('Fname and Lname added sucessfully')
        // }

        
        // if (this.state.address) {
        //     })
        //     // alert('Address added sucessfully')
        // }

      
        // if (this.state.mail) {
            // Axios.post("http://localhost:3001/create", { mail:this.state.mail }).then(()=>{
            //     console.log("sucess for mail");
            // })
        //     // alert('Mail ID added sucessfully')
        // }

        
        // if (this.state.number) {
            // Axios.post("http://localhost:3001/create", { number:this.state.number }).then(()=>{
            //     console.log("sucess for number");
            // })
        //     // alert('Mobile number added sucessfully')
        // }

        var string = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        let passengerId = '';
        var len = string.length;
        for (let i = 0; i < 6; i++) {
            passengerId += string[Math.floor(Math.random() * len)];
        }

        alert(" Passenger ID is : " + passengerId);
    }

    render() {
        return (
            <div>
                <form className="user__form">

                    <label>Enter your name:-</label>
                    <p>
                        <input className="user__Fname" type="text" placeholder="first name" onChange={this.onFNameChange}></input>
                        <input className="user__Lname" type="text" placeholder="last name" onChange={this.onLNameChange}></input>
                    </p>

                    <label>Enter your address:-</label>
                    <p>
                        <input className="user__address" type="text" placeholder="Enter your resident address" onChange={this.onAddressChange}></input>
                    </p>

                    <label>Contact Details:-</label>
                    <p>
                        <input className="user__mail" type="text" placeholder="Enter your email address" onChange={this.onMailChange}></input>
                        <input className="user__num" type="number" maxLength='10' placeholder="Enter your mobile no." onChange={this.onNumChange} />
                    </p>

                    <button className="user__button" onClick={this.onClick}>Confirm</button>
                    <div className="cabDetails">
                        <a href="/paymentDetails">Submit</a>
                        <br/>
                        <a href="/cabDetails">Go back</a>
                    </div>
                </form>
            </div>
        )
    }
}

export default UserDetails

ReactDOM.render(<UserDetails/>, document.getElementById('app'));