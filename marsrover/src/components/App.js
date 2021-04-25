import '../css/App.css';
import Grid from './Grid'
import Controls from './Controls'
import { useState } from 'react'


function App() {

  const [gridX, setGridX] = useState(4)
  const [gridY, setGridY] = useState(4)
  const [roverX, setRoverX] = useState(0)
  const [roverY, setRoverY] = useState(0)
  const [roverDir, setRoverDir] = useState('N')
  const [instructions, setInstructions] = useState()
  const [path, setPath] = useState([[0,0], [2,1], [1,3]])
  // const [path, setPath] = useState([])


  return (
    <div className="app">
      <div className="container">
        <Controls gridX={gridX} gridY={gridY} setGridX={setGridX} setGridY={setGridY} roverX={roverX} roverY={roverY} roverDir={roverDir} setRoverX={setRoverX} setRoverY={setRoverY} setRoverDir={setRoverDir} setInstructions={setInstructions}/>
        <Grid gridX={gridX} gridY={gridY} path={path} roverX={roverX} roverY={roverY}/>
      </div>        
    </div>
  );
}

export default App;
