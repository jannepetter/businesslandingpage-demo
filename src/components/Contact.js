import React, { useState, useEffect } from 'react';
import '../css/contact.css'
import shortid from 'shortid'
import {contact} from '../applicationinfo/data'
const Contact = (props) => {
    const [info, setInfo] = useState([])
   
    useEffect(()=>{
        setInfo(contact.split('\n'))
    },[])
  
    return (
        <div>
           {info.map(i=><li className='infopiece' key={shortid.generate()}>{i}</li>)} 
        </div>)
}

export default Contact