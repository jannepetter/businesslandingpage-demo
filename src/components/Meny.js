import React, { useState, useEffect } from 'react';
import '../css/meny.css'
import shortid from 'shortid'
import {menu} from '../applicationinfo/data'


const Meny = (props) => {
    const [info, setInfo] = useState([])

    useEffect(() => {
        setInfo(menu.split('\n'))
    }, [])
    if(!props.show){
        return null
    }
    
    const handlePrint = (str) => {
        const strArr = str.split(';')
        let a=`${strArr[0]}, ${strArr[1]}€`
        return (
            <div className='menucontainer' key={shortid.generate()}>
                <h4 className='dishname'>{a}</h4>
                <span className='dishdesc'>{strArr[2]}</span>
            </div>
        )
    }
    return (
        <div>
            {info.map(i => handlePrint(i))}
        </div>)
}

export default Meny