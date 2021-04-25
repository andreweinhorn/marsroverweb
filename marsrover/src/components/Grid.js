import React, { useState } from 'react'
import '../css/Grid.css';
import GridBlock from './GridBlock'


export default function Grid( { gridX, gridY, path } ) {

    const gridStyle = {
        display: 'grid',
        gridTemplateColumns: `repeat(${gridX + 1}, 1fr)`,
        backgroundColor: "DodgerBlue",
        // border: "2px solid black",
        // maxWidth: '80%', 
        alignSelf: 'center', 
        // aspectRatio: '1'
      };

    console.log("Path inside grid component is :", path)
    const gridBlocks = []
    let counter = 1
    for (var y = gridY; y > -1 ; y--) {
        for (var x = 0; x < gridX + 1; x++) {
            let selected = false
            if(JSON.stringify(path).indexOf(JSON.stringify([x, y])) > 0){
                // console.log(`The (${x}, ${y}) cell is included in path!`)
                selected = true
            }
            gridBlocks.push(<GridBlock key ={counter} x={x} y={y} selected={selected}/>)
            counter++
        }
    }

    return (
        <div className="grid-container">
            <div style={gridStyle}>
                {gridBlocks}
            </div>
        </div>
        
    )
}
