import React, { useState } from 'react'
import '../css/Grid.css';
import GridBlock from './GridBlock'


export default function Grid() {
    const [gridX, setGridX] = useState(5)
    const [gridY, setGridY] = useState(4)

    const gridStyle = {
        display: 'grid',
        gridTemplateColumns: `repeat(${gridX}, 1fr)`,
        backgroundColor: "DodgerBlue",
        border: "2px solid black",
        width: '80%', 
        alignSelf: 'center'
      };

    const gridBlocks = []
    for (var i = 0; i < gridX; i++) {
        for (var j = 0; j < gridY; j++) {
            gridBlocks.push(<GridBlock />);
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
