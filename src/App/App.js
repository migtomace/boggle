import { Boggle } from './Boggle/Boggle';
import './App.css';

function App() {

  return (
    <div className="App">
        <input onClick={() => {window.location.reload()}} value="Reload"/>
        <Boggle />
    </div>
  );
}

export default App;
