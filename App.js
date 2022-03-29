import React from 'react';
import './App.css';
import HighComponent from './Components/HigherComp1';
import Counter from './Components/Counter';
import HigherComp2 from './Components/HigherComp2';
function App() {
  return (
    <div className="App-header">
      <HighComponent comp={Counter}/>
      <HigherComp2 comp={Counter} />
    </div>
  );
}

export default App;
