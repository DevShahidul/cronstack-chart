
import './App.css';

import Chart from "./components/Chart";

function App() {
  const data1 = [
    {"name": "Jan", "amt": 1400},
    {"name": "Feb", "amt": 1506},
    {"name": "March", "amt": 989},
    {"name": "April", "amt": 1228},
    {"name": "May", "amt": 1100},
    {"name": "June", "amt": 1700}
  ];

  return (
    <div className="App">
      <Chart 
        data={data1} 
        title="SESSIONS 1"
        columnGradient={[
          [0, "#EF3CDD"],    // Start color
          [1, "#FF9B46"]     // End color
        ]} 
      />    
      <Chart 
        title="SESSIONS 1"
        data={data1} 
        columnGradient={[
          [0, "#EF3CDD"],    // Start color
          [1, "#FF9B46"]     // End color
        ]} 
      />  
    </div>
  );
}

export default App;

