import React from 'react';
import { Link } from 'react-router-dom'
import '../css/menubar.css'

const Menubar = ({baseUrl}) => {  

    return (
        <div className='menu'>
            <Link className='menuItem' to={baseUrl+'/'}>Contact</Link>
            <Link className='menuItem' to={baseUrl+'/menu'}>Menu</Link>
            <Link className='menuItem' to={baseUrl+'/drinks'}>Drinks</Link>
            <Link className='menuItem' to={baseUrl+'/desserts'}>Desserts</Link>
        </div>)
}

export default Menubar