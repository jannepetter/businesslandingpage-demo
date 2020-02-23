import React from 'react';
import '../css/menubar.css'

const Menubar = ({changePage}) => {
    return (
        <div className='menu'>
                <li onClick={()=>changePage('contact')} className='menuItem'>Contact</li>
                <li onClick={()=>changePage('menu')} className='menuItem'>Menu</li>
                <li onClick={()=>changePage('drinks')} className='menuItem'>Drinks</li>
                <li onClick={()=>changePage('desserts')} className='menuItem'>Desserts</li>
        </div>)
}

export default Menubar