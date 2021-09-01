import React from 'react'
import ReactDOM from 'react-dom'
import Axios from 'axios'
class CabDetails extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            selectedCab: "",
            visibilitySeadan: 1,
            visibilitySuv: 1,
            seadan: "",
            suv: ""
        }
        this.handleVisible = this.handleVisible.bind(this);
    }

    handleVisible = (e) => {
        e.preventDefault();

        if (this.state.selectedCab === "") {
            alert('Pleact choose No. of seats')
        }
        else if (this.state.selectedCab === "(Less than 5 Seats)") {
            this.setState((prevState) => {
                return {
                    visibilitySeadan: !prevState.visibilitySeadan
                }
            })
        } else if (this.state.selectedCab === "(Less than 7 Seats)") {
            this.setState((prevState) => {
                return {
                    visibilitySuv: !prevState.visibilitySuv
                }
            })
        }
    }

    seadan = (e) => {
        e.preventDefault();
        this.state.seadan = e.target.value
        if (this.state.seadan === "Hyundai i20") {
            alert(this.state.seadan + ' selected')
        } else if (this.state.seadan === "Suzuki Baleno") {
            alert(this.state.seadan + ' selected')
        }
    }

    suv = (e) => {
        e.preventDefault();
        this.state.suv = e.target.value
        if (this.state.suv === "Mahindra Thar") {
            alert(this.state.suv + ' selected')
        } else if (this.state.suv === "MG Hector Plus") {
            alert(this.state.suv + ' selected')
        }
    }

    handleSelectedCab = (e) => {
        e.preventDefault();
        this.state.selectedCab = e.target.value
    }

    onSubmit = (e) => {
        e.preventDefault();
        // if(e.target.value==="All selected"){}
        Axios.post("http://localhost:3001/cabDetails", {
            selectedCab: this.state.selectedCab
        }).then(() => {
            console.log("sucess")
        });
        console.log(this.state.selectedCab)
    }

    render() {
        return (
            <div>
                <form className="seats__label">
                    <label >Total seats</label>
                    <input placeholder="Select number of seats" list="cabDetails" className="seats" onChange={this.handleSelectedCab}></input>
                    <datalist id="cabDetails" className="seats__form" >
                        <option value="(Less than 5 Seats)"></option>
                        <option value="(Less than 7 Seats)"></option>
                    </datalist>

                    <div>
                        <button onClick={this.handleVisible}>
                            {this.state.visibilitySeadan && this.state.visibilitySuv ? 'show cabs details' : 'hide cab details'}
                        </button>
                        {
                            !this.state.visibilitySeadan
                            &&
                            <div>
                                <p>Select the cabs carefully later you can't change the cab</p>
                                <ol>
                                    <p>
                                        <option>cabName:Hyundai i20</option>
                                        <option>cabId:245</option>
                                        <option>regNo:4dkas58</option>
                                        <option>maxSeats:4</option>
                                        <option>type:Seadan</option>
                                        <button value="Hyundai i20" onClick={this.seadan}>Select</button>
                                    </p>
                                    <p>
                                        <option>cabName:Suzuki Baleno</option>
                                        <option>cabId:125</option>
                                        <option>regNo:748fdr8</option>
                                        <option>maxSeats:4</option>
                                        <option>type:Seadan</option>
                                        <button value="Suzuki Baleno" onClick={this.seadan}>Select</button>
                                    </p>
                                </ol>
                            </div>
                        }

                        {
                            !this.state.visibilitySuv
                            &&
                            <div>
                                <p>Select the cabs carefully later you can't change the cab</p>
                                <ol>
                                    <p>
                                        <option >Mahindra Thar</option>
                                        <option>cabId:21</option>
                                        <option>regNo:656hvq5</option>
                                        <option>maxSeats:6</option>
                                        <option>type:Suv</option>
                                        <button value="Mahindra Thar" onClick={this.suv}>Select</button>
                                    </p>
                                    <p>
                                        <option >MG Hector Plus </option>
                                        <option>cabId:40</option>
                                        <option>regNo:78sdj8</option>
                                        <option>maxSeats:6</option>
                                        <option>type:Suv</option>
                                        <button value="MG Hector Plus" onClick={this.suv}>Select</button>
                                    </p>
                                </ol>
                            </div>
                        }
                    </div>
                    <br />
                    <button value="All selected" onClick={this.onSubmit}>Confirm</button>
                    <br />
                    <div className="cabDetails">
                        <a href="/userDetails">Submit</a>
                        <br />
                        <a href="/rideDetails">Go back</a>
                    </div>
                </form>
            </div>
        )
    }
}

export default CabDetails

ReactDOM.render(<CabDetails />, document.getElementById('app'));
//{what if v give onSubmit on form and create a button and wen the button is clicked onSubmit shld be triggered} ?


