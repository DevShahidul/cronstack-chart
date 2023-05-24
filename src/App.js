
import './App.css';

import Chart from "./components/Chart";

function App() {
  const data1 = [
    {"name": "Jan", "amt": 1400},
    {"name": "Feb", "amt": 1506},
    {"name": "March", "amt": 989},
    {"name": "April", "amt": 1228},
    {"name": "May", "amt": 1100},
    {"name": "June", "amt": 1700},
    {"name": "Jul", "amt": 1400},
    {"name": "Aug", "amt": 1506},
    {"name": "Sep", "amt": 989},
    {"name": "Oct", "amt": 1228},
    {"name": "Nov", "amt": 1100},
    {"name": "Dec", "amt": 1700},
    {"name": "Jan", "amt": 1400},
    {"name": "Feb", "amt": 1506},
    {"name": "March", "amt": 989},
    {"name": "April", "amt": 1228},
    {"name": "May", "amt": 1100},
    {"name": "June", "amt": 1700},
    {"name": "Jul", "amt": 1400},
    {"name": "Aug", "amt": 1506},
    {"name": "Sep", "amt": 989},
    {"name": "Oct", "amt": 1228},
    {"name": "Nov", "amt": 1100},
    {"name": "Dec", "amt": 1700},
  ];
  const data3 = [
    {"name": "Jan", "amt": 1400},
    {"name": "Feb", "amt": 1506},
    {"name": "March", "amt": 989},
    {"name": "April", "amt": 1228},
    {"name": "May", "amt": 1100},
    {"name": "June", "amt": 1700},
  ];

  return (
    <div className="App">
      <Chart 
        data={data1} 
        type="column"
        title="SESSIONS 1"
        gradient={[
          [0, "#EF3CDD"],    // Start color
          [1, "#FF9B46"]     // End color
        ]} 
      />    
      <Chart 
        data={data1} 
        type="column"
        title="SESSIONS 1"
        gradient={[
          [0.21, "#00B3FF"],    // Start color
          [0.9965, "rgba(67, 255, 108, 0.45)"]     // End color
        ]} 
      />  
      <Chart 
        data={data3} 
        type="area"
        title="SESSIONS 1"
        gradient={[
          [0, "rgba(177, 66, 245, 0.6)"],    // Start color
          [1.9965, "rgba(29, 35, 44, 0)"]     // End color
        ]} 
      />  
    </div>
  );
}

export default App;

