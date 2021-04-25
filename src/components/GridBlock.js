import React from 'react'
import '../css/GridBlock.css'

export default function GridBlock({x, y, selected, origin, destination }) {
    
    let dotColor = 'black'
    if(origin){dotColor = 'red'}
    if(destination){dotColor = 'green'}

    return (
        <div className='gridblock-container'>
            <div className='circle' style={{ display: selected ? "block" : "none", backgroundColor: dotColor }}></div>
        </div>
    )
}
