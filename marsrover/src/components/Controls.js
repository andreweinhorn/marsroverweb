import React from 'react'
import '../css/Controls.css';



export default function Controls( {gridX, gridY, setGridX, setGridY, roverX, roverY, roverDir, setRoverX, setRoverY, setRoverDir} ) {

    const handleGridChange = (e, coord) => {
        if(e.target.value === ""){
            // Do nothing here
        } else if(Number.isInteger(parseInt(e.target.value))) {
            // Update the plateau X or Y value depending on the coord given
            coord === 'X'? setGridX(parseInt(e.target.value)) : setGridY(parseInt(e.target.value))
            console.log(`The new grid ${coord} value is `, e.target.value)
        } else {
            console.log("Error occurred in setting Plateau X/Y value")
            alert("Plateau X/Y value must be a positive integer.")
        }
    }

    const handleRoverChange = (e, coord) => {
        if(e.target.value === ""){
            // Do nothing here
        } else if(Number.isInteger(parseInt(e.target.value))) {
            // Update the rover X or Y value depending on the coord given
            coord === 'X'? setRoverX(parseInt(e.target.value)) : setRoverY(parseInt(e.target.value))
            console.log(`The new rover ${coord} value is `, e.target.value)
        } else {
            console.log("Error occurred in setting rover X/Y value")
            alert("Rover X/Y value must be a positive integer.")
        }
    }

    return (
        <div className="controls-container">


            <h1> Mars Rover </h1>
            <h2>Plateau Extent</h2>
            <label> Grid X:
                <input type="text" placeholder={gridX} onChange={(e) => handleGridChange(e, 'X')} />
            </label>
            <label> Grid Y:
                <input type="text" placeholder={gridY} onChange={(e) => handleGridChange(e, 'Y')} />
            </label>  


            <h2>Rover Origin</h2>
            <label> X Value:
                <input type="text" placeholder={roverX} onChange={(e) => handleRoverChange(e, 'X')} />
            </label>
            <label> Y Value:
                <input type="text" placeholder={roverY} onChange={(e) => handleRoverChange(e, 'Y')}/>
            </label>  
            <label> Direction:
                <input type="text" placeholder={roverDir}  />
            </label>  
        </div>
    )
}
