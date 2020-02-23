import React from 'react';
import { Link } from 'react-router-dom'
import '../css/menubar.css'

const Menubar = (props) => {  

    return (
        <div className='menu'>
            <Link className='menuItem' to='/contact'>Contact</Link>
            <Link className='menuItem' to='/menu'>Menu</Link>
            <Link className='menuItem' to='/drinks'>Drinks</Link>
            <Link className='menuItem' to='/desserts'>Desserts</Link>
        </div>)
}

export default Menubar