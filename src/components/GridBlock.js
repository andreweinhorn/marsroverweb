import React from 'react'
import '../css/GridBlock.css'

export default function GridBlock({x, y, selected }) {
    
    return (
        <div className='gridblock-container'>
            <div className='circle' style={{ display: selected ? "block" : "none" }}></div>
        </div>
    )
}
