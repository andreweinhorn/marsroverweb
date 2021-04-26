import React from 'react'
import '../css/Grid.css';
import GridBlock from './GridBlock'


export default function Grid( { gridX, gridY, path } ) {

    const containerStyle = {
        backgroundImage: `url(/images/mars.jpeg)`, 
        backgroundSize: 'cover',
    }

    const gridStyle = {
        display: 'grid',
        gridTemplateColumns: `repeat(${gridX}, 1fr)`,
        backgroundColor: "rgb(0,0,0,0.3)",
        alignSelf: 'center', 
      };

    const gridBlocks = []
    let counter = 1

    for (var y = gridY - 1; y > -1 ; y--) {
        for (var x = 0; x < gridX; x++) {

            // Booleans to indicate if the grid block is origin, destination or selected
            let origin = false
            let destination = false
            let selected = false


            // If the coordinates appear in the path of the rover, set selected to true
            if(JSON.stringify(path).indexOf(JSON.stringify([x, y])) > 0){
                // console.log(`The (${x}, ${y}) cell is included in path!`)
                selected = true
                if(path[0].equals([x,y])){
                    // console.log("The origin is at : ", x, y)
                    origin = true
                }
                if(path[path.length - 1].equals([x,y])){
                    // console.log("The desination is at : ", x, y)
                    destination = true
                }

            }
            gridBlocks.push(<GridBlock key ={counter} x={x} y={y} selected={selected} origin={origin} destination={destination}/>)
            counter++
        }
    }

    return (
        <div className="grid-container" style={containerStyle}>
            <div style={gridStyle}>
                {gridBlocks}
            </div>
        </div>
        
    )
}




// Note:  The helper function below is not my code.  I obtained it from stack overflow (link below)
// https://stackoverflow.com/questions/7837456/how-to-compare-arrays-in-javascript/14853974

// Warn if overriding existing method
if(Array.prototype.equals)
console.warn("Overriding existing Array.prototype.equals. Possible causes: New API defines the method, there's a framework conflict or you've got double inclusions in your code.");

// attach the .equals method to Array's prototype to call it on any array
Array.prototype.equals = function (array) {
    // if the other array is a falsy value, return
    if (!array)
        return false;

    // compare lengths - can save a lot of time 
    if (this.length != array.length)
        return false;

    for (var i = 0, l=this.length; i < l; i++) {
        // Check if we have nested arrays
        if (this[i] instanceof Array && array[i] instanceof Array) {
            // recurse into the nested arrays
            if (!this[i].equals(array[i]))
                return false;       
        }           
        else if (this[i] != array[i]) { 
            // Warning - two different object instances will never be equal: {x:20} != {x:20}
            return false;   
        }           
    }       
    return true;
}

// Hide method from for-in loops
Object.defineProperty(Array.prototype, "equals", {enumerable: false});
