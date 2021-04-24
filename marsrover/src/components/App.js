import '../css/App.css';
import Grid from './Grid'
import Controls from './Controls'



function App() {
  return (
    <div className="app">
      <div className="container">
        <Controls />
        <Grid />
      </div>        
    </div>
  );
}

export default App;
