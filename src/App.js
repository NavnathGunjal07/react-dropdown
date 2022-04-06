import './App.css';
import Dropdown from './Dropdown';
function App() {
  const arr = ["React JS", "React Native", "Node JS", "JavaScript", "Java"];
  return (
    <div className="App">
    <h3>You can add following items</h3>
    <Dropdown array={arr}/>
    </div>
  );
}

export default App;
