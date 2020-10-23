import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

function Dashboard({auth}) {

    if( auth == false)
        return <Redirect to="/" />
    else{
        return (
            <div>
                Dashboard
            </div>
        )
    }
}

export default Dashboard;
