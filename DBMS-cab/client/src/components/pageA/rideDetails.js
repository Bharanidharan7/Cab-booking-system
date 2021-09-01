import React from 'react';
import ReactDOM from 'react-dom'
import 'react-dates/lib/css/_datepicker.css'
import Axios from 'axios'

class RideDetails extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            pick: "",
            drop: "",
            createdAt:"",
            time:""
        }
    }
    onDateChange = (e) => {
        e.preventDefault();
        this.state.createdAt = e.target.value
        console.log(this.state.createdAt)
    }

    onTimeChange=(e)=>{
        e.preventDefault();
        this.state.time=e.target.value
        console.log(this.state.time)
    }

    handleAddPickUpLocation = (e) => {
        e.preventDefault();
        this.state.pick = e.target.value
        //console.log(this.state.pick)
    }

    handleAddDropOffLocation = (e) => {
        e.preventDefault()
        this.state.drop = e.target.value
        //console.log(this.state.drop)
    }

    onSubmit = (e) => {
        e.preventDefault()
        
        Axios.post("http://localhost:3001/rideDetails", {
            pick: this.state.pick,
            dropOff: this.state.drop,
            createdAt: this.state.createdAt,
            time:this.state.time
        }).then(() => {
            console.log("sucess")
        });


        // if (this.state.pick === this.state.drop) {
        //     alert('PickUp location and DropOff location are not valid..!')
        // } else if (this.state.pick && this.state.drop) {
        //     alert('cabs are available')
        // } else {
        //     alert('please choose a proper location')
        // }

        const PkTOi = 500
        const PkTOw = 800
        const PiTOw = 700

        const DkTOi = 6
        const DkTOw = 17.4
        const DiTOw = 14.4


        if (this.state.pick === "koramangala" && this.state.drop === "Indiranagar") {
            const ki = 'Total distance is ' + DkTOi + 'KM & your ride price is ' + PkTOi
            alert(ki)
        }
        if (this.state.pick === "koramangala" && this.state.drop === "Whitefield") {
            const kw = 'Total distance is ' + DkTOw + 'KM & your ride price is' + PkTOw
            alert(kw)
        }
        if (this.state.pick === "Indiranagar" && this.state.drop === "Koramangala") {
            const ik = 'Total distance is ' + DkTOi + 'KM & your ride price is ' + PkTOi
            alert(ik)
        }
        if (this.state.pick === "Indiranagar" && this.state.drop === "Whitefield") {
            const iw = 'Total distance is ' + DiTOw + 'KM & your ride price is' + PiTOw
            alert(iw)
        }
        if (this.state.pick === "Whitefield" && this.state.drop === "koramangala") {
            const wk = 'Total distance is ' + DkTOw + 'KM & your ride price is ' + PkTOw
            alert(wk)
        }
        if (this.state.pick === "Whitefield" && this.state.drop === "Indiranagar") {
            const wi = 'Total distance is ' + DiTOw + 'KM & your ride price is' + PiTOw
            alert(wi)
        }

        // var string = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        // var len = string.length;
        // for (let i = 0; i < 6; i++) {
        //     this.state.rideId += string[Math.floor(Math.random() * len)];
        // }

        // alert("Ride ID is : " + this.state.rideId); 

    }

    render() {
        return (
            <div>
                <form className="loc__form" onSubmit={this.onSubmit} >
                    <h2> Ride details:-</h2> <p></p>
                    <select className="loc__pick" onChange={this.handleAddPickUpLocation}>
                        <option value="" disabled selected hidden>Choose PickUp location</option>
                        <option value="koramangala">Koramangala</option>
                        <option value="Indiranagar">Indiranagar</option>
                        <option value="Whitefield">Whitefield</option>
                    </select>

                    <select className="loc__drop" onChange={this.handleAddDropOffLocation}>
                        <option value="" disabled selected hidden>Choose DropOff location</option>
                        <option value="koramangala">Koramangala</option>
                        <option value="Indiranagar">Indiranagar</option>
                        <option value="Whitefield">Whitefield</option>
                    </select>

                    <p><label className="loc__date">Select a PickUp Date and PickUp Time:-</label></p>
                    <input type="date" onChange={this.onDateChange}></input>
                    <input type="time" onChange={this.onTimeChange}></input>
                    <p></p>
                    <button className="loc__button">
                        Confirm
                    </button>
                    <div className="rideDetails">
                    <a href="/cabDetails">Submit</a>
                    <br/>
                    <a href="/">Go back</a>
                </div>
                </form>
            </div>
        )
    }
}

export default RideDetails

ReactDOM.render(<RideDetails />, document.getElementById('app'));


