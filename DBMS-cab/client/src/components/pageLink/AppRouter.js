import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';

import App from '../page1/entirePage'
import RideDetails from '../pageA/rideDetails'
import CabDetails from '../pageB/cabDetails'
import UserDetails from '../pageC/userDetails'
import Payment from '../pageD/payment'
import ConfirmPage from '../pageE/confirmationPage'


const AppRouter = () => (
    <BrowserRouter>
        <div className="routes">
            <Switch>
                <Route path='/' component={App} exact={true} />
                <Route path='/rideDetails' component={RideDetails} />
                <Route path='/cabDetails' component={CabDetails} />
                <Route path='/userDetails' component={UserDetails} />
                <Route path='/paymentDetails' component={Payment} />
                <Route path='/confirmPage' component={ConfirmPage} />
            </Switch>

        </div>
    </BrowserRouter>
)
export default AppRouter


// import entirePage from '../page1/entirePage'
// import location from '../pageA/location'
// import cabDetails from '../pageB/cabDetails'
// import userDetails from "../pageC/userDetails";
// <Header />
// const AppRouter =()=>(
//     <BrowserRouter>
//         <div>
//             <Header />
//             <Switch>
                // <Route path='/' component={entirePage} exact={true} />
//                 <Route path='/Dashboard' component={location} />
//                 <Route path='/' component={cabDetails} />
//                 <Route path='/help' component={userDetails} />
//                 <Route component={notFoundPage} />
//             </Switch>
//         </div>
//     </BrowserRouter>
// );

//export default AppRouter;