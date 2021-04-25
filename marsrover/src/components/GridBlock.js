import React from 'react'
import '../css/GridBlock.css'

export default function GridBlock({x, y, selected }) {

    let value
    if(selected){
        value = "H"
    } else {
        value = " "
    }
    
    // console.log(selected)

    return (
        <div className='gridblock-container'>
            {/* <h2 className='gridblock-content'>{`(${x}, ${y}`}</h2> */}
            <div className='circle' style={{ display: selected ? "block" : "none" }}></div>
        </div>
    )
}
