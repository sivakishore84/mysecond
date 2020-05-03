import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import BillForm from './BillForm';

const Routing = () => {
    return(
        <Router>
            <Route path='/bills' component= { BillForm } exact />
        </Router>
    )
}


export default Routing;