import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import House from '../House/House';

class Dashboard extends Component {
    render(){
        return(
            <div>
                <div className="house">
                    <House />
                </div>
                <button onClick='Add New Property'><Link to='/wizard' className='links'>Add New Property</Link></button>
            </div>
        )
    }
}

export default Dashboard