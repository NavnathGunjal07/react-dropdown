import './App.css';
import Dropdown from './Dropdown';
function App() {
  //Array for displaying dropdown elements
  const arr = ["React JS", "React Native", "Node JS", "JavaScript", "Java"];
  return (
    <div className="App">
    <h3>You can add following items</h3>
    {/*passing array as props to dropdown component*/}
    <Dropdown array={arr}/>
    </div>
  );
}

export default App;
