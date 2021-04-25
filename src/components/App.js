import '../css/App.css';
import Grid from './Grid'
import Controls from './Controls'
import { useState, useEffect } from 'react'


function App() {

  const [gridX, setGridX] = useState(10)
  const [gridY, setGridY] = useState(10)
  const [roverX, setRoverX] = useState(0)
  const [roverY, setRoverY] = useState(0)
  const [roverDir, setRoverDir] = useState('N')
  const [instructions, setInstructions] = useState([])
  const [path, setPath] = useState([[0,0], [2,1], [1,3]])
  const [destination, setDestination] = useState([0, 0, 'N'])
  // const [path, setPath] = useState([])

  const move = (rover) => {
    if(rover.dir === "N"){rover.y +=1}
    if(rover.dir === "E"){rover.x +=1}
    if(rover.dir === "S"){rover.y -=1}
    if(rover.dir === "W"){rover.x -=1}
  }

  const turnRight = (rover) => {
    const dictR = {'N':'E', 'E':'S','S':'W', 'W':'N'}
    rover.dir = dictR[rover.dir]
  }

  const turnLeft = (rover) => {
    const dictL = {'N':'W', 'W':'S','S':'E', 'E':'N'}
    rover.dir = dictL[rover.dir]
  }

  useEffect(() => {

    // Initialise rover with starting coordinates
    var rover = {x:roverX, y:roverY, dir:roverDir}
    var newPath = []

    // Add the rovers origin coordinates to the path
    newPath.push([rover.x, rover.y])

    // Generating new path coordinatees
    instructions.map(instruction => {
      if(instruction === 'M'){
        move(rover)
        if(rover.x < 0 || rover.x > gridX - 1 || rover.y < 0 || rover.y > gridY - 1){
          alert("You just drove your rover off the edge of the plateau!")
        }
        newPath.push([rover.x, rover.y])
      } else if (instruction === 'R'){
        turnRight(rover)
      } else {
        turnLeft(rover)
      }
    })

    // Set the destination coordinates based on rovers final position
    setDestination([rover.x, rover.y, rover.dir])

    // Set the rovers full path from origin to destination
    setPath(newPath)
  }, [roverX, roverY, roverDir, instructions])

  return (
    <div className="app">
      <div className="container">
        <Controls gridX={gridX} gridY={gridY} setGridX={setGridX} setGridY={setGridY} roverX={roverX} roverY={roverY} roverDir={roverDir} setRoverX={setRoverX} setRoverY={setRoverY} setRoverDir={setRoverDir} setInstructions={setInstructions} destination={destination}/>
        <Grid gridX={gridX} gridY={gridY} path={path} roverX={roverX} roverY={roverY}/>
      </div>        
    </div>
  );
}

export default App;
