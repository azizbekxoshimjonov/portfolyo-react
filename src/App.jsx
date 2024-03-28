import './App.css';



import { useState } from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
<assets />
function App() {
  const [mode, setMode] = useState(true)
  return (
    <div className="App">
      <Header mode={mode} setMode={setMode}/>
      <Hero mode={mode}/>
  
    



    </div>
  );
}

export default App;
