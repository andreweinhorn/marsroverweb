import React from 'react'
import '../css/Controls.css';



export default function Controls( {gridX, gridY, setGridX, setGridY, roverX, roverY, roverDir, setRoverX, setRoverY, setRoverDir, setInstructions, destination} ) {

    const handleGridChange = (e, coord) => {
        if(e.target.value === ""){
            // Do nothing here
        } else if(Number.isInteger(parseInt(e.target.value))) {
            // Check that input does not exceed plateau limit
            const extent = parseInt(e.target.value)

            // Check that the extent does not exceed a limit of 20
            if (extent > 20){
                alert("The maximum x or y extent for the plateau is 20.")
                return
            }
            // Update the plateau X or Y value depending on the coord given
            coord === 'X'? setGridX(parseInt(e.target.value)) : setGridY(parseInt(e.target.value))
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
        } else {
            console.log("Error occurred in setting rover X/Y value")
            alert("Rover X/Y value must be a positive integer.")
        }
    }

    const handleRoverDirection = (e) => {
        const direction = e.target.value.toUpperCase()
        if(e.target.value === ""){
            // Do nothing here
        } else if (['N', 'S', 'E', 'W'].includes(direction)){
            setRoverDir(direction)
        } else {
            console.log("Error occurred in setting rover direction")
            alert("Rover direction must either be N, S, E or W")
        }
    }

    const handleRoverInstructions = (e) => {
        if(e.target.value === ""){
            // Do nothing here
            return
        } 
        const instructions = Array.from(e.target.value.toUpperCase())
        instructions.map(instruction => {
            if(!['M', 'L', 'R'].includes(instruction)){
                alert("Rover instructions must only consist of M, L, or R (no spaces or other characters)")
                return
            }
        setInstructions(instructions)
        })
    }

    return (
        <div className="controls-container">


            <h1> Mars Rover </h1>

            <p className='user-instructions'>Enter some instructions to make the mars rover move.  For example, try entering 'MMRMM'.  This will move the rover forward two squares; then turn it 90 degrees to the right; then move it another two squares. You can also try changing the grid size and the origin of the rover. </p>
            
            <h2>Plateau Extent</h2>
            <p style={{marginTop: '-10px', fontSize: '1rem'}}>(Maximum extent = 20)</p>

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
                <input type="text" placeholder={roverDir}  onChange={(e) => handleRoverDirection(e)}/>
            </label>  

            <h2>Rover Instructions</h2>
            <p style={{marginTop: '-10px', fontSize: '1rem'}}>(M = Move, L = Left, R = Right))</p>
            <label> Instructions:
                <input type="text" placeholder={'MMLMRM'} onChange={(e) => handleRoverInstructions(e)} />
            </label>

            <h2>Rover Destination</h2>

            <p style={{marginTop: '0px'}}>{destination[0]} {destination[1]} {destination[2]}</p>

            <div className='legend'>
                <div style={{width: '20px', height: '20px', borderRadius: '50%', backgroundColor: 'green'}}></div>
                <p>Origin</p>
                <div style={{width: '20px', height: '20px', borderRadius: '50%', backgroundColor: 'red'}}></div>
                <p>Destination</p>
            </div>

        </div>
    )
}
