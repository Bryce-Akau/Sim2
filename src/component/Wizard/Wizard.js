import React, { Component }from 'react';
import { Link } from 'react-router-dom';
import House from '../House/House';

class Wizard extends Component{
    render(){
        return(
            <div>
                <House />
                <button>
                <Link to='/' className='links'>
                Cancel
                </Link>
                </button>
            </div>
        )
    }
}

export default Wizard;