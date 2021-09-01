import React from 'react'
import ReactDOM, { render } from 'react-dom'
import Axios from 'axios'
// import {useState} from 'react'
class ConfirmPage extends React.Component {

    state = {
        rideDetails: [],
        rideCabDetails: []
    }

    confirm = (e, props) => {
        e.preventDefault();
        Axios.get("http://localhost:3001/ride").then((response) => {
            // console.clear()
            // console.log(...response.data);
            this.setState({ rideDetails: (response.data) })
        });

        if (this.state.seadan === "Hyundai i20") {
            alert(this.state.seadan + ' selected')
            // Axios.get("http://localhost:3001/hyundai").then((response) => {
            //     this.setState({ rideCabDetails: (response.data) })
            // });
        } else if (this.state.seadan === "Suzuki Baleno") {
            alert(this.state.seadan + ' selected')
            // Axios.get("http://localhost:3001/baleno").then((response) => {
            //     this.setState({ rideCabDetails: (response.data) })
            // });
        } else if (this.state.suv === "Mahindra Thar") {
            alert(this.state.suv + ' selected')
            // Axios.get("http://localhost:3001/thar").then((response) => {
            //     this.setState({ rideCabDetails: (response.data) })
            // });
        } else if (this.state.suv === "MG Hector Plus") {
            alert(this.state.suv + ' selected')
            // Axios.get("http://localhost:3001/hector").then((response) => {
            //     this.setState({ rideCabDetails: (response.data) })
            // });
        }

    }

    render() {
        return (
            <div>
                <p></p>

                <button onClick={this.confirm} >Comfirm</button>
                {this.state.rideDetails.map((val, key) => {
                    return <div className="showingllist" key={val.rideId}>
                        <h3>RideId:{val.rideId}</h3>
                        <h3>PickUp Location:{val.pick}</h3>
                        <h3>DropOff Location:{val.dropOff}</h3>
                        <h3>Date:{val.createdAt}        </h3>
                        <h3>Time:{val.time}</h3>
                    </div>
                })
                }

                

                <p>Thank You for Booking</p>

                <div className="cabDetails">
                    <a href="/">Go Home</a>
                    <br />
                    <a href="/paymentDetails">Go back</a>
                </div>
            </div>
        )
    }
}

export default ConfirmPage;

ReactDOM.render(<ConfirmPage />, document.getElementById('app'));


// {this.state.rideCabDetails.map((val, key) => {
//     return <div className="showingllist" key={val.cabId}>
//         <h3>cabName:{val.cabName}</h3>
//         <h3>cabId:{val.cabID}</h3>
//         <h3>regNo:{val.regNo}</h3>
//         <h3>maxSeats:{val.maxSeats}</h3>
//         <h3>type:{val.type}</h3>
//     </div>
// })
// }





 // let ride = [];
    // let cab = [];
    // let passenger = [];
    // let payment = [];
    // const [employeeList, setEmployeeList] = useState([]);

    // const getEmployees = () => {
    //     Axios.get("http://localhost:3001/ride").then((response) => {
    //     console.log(...response.data);
    //     // const ridePick=response.data.pick
    //     // console.log(ridePick)
    //     // document.getElementById('confirm').innerHTML=ridePick
    //     // ride =response.data
    //     // ride=[...ride,...response.data]
    //     // console.log(ride)
    // });
    // document.getElementById('confirm').innerHTML=getEmployees
    //   };





     // const ridePick=response.data.pick
        // console.log(ridePick)
        // ride =response.data 
        // document.getElementById('confirm').innerHTML=ridePick
        // const ride=[...ride,...response.data]
        // console.log(ride[1])
        // document.getElementById('confirm').innerHTML=(ride[ 1].pick)
