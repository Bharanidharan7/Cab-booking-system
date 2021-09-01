import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';


const Header = () => (
    <div>
        <h1>Expensify</h1>
        <p><NavLink to="/" activeClassName="is-active" exact={true}>Go home</NavLink></p>
        
    </div>

)

export default Header;