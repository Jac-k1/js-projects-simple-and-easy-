import ColorFlipper from './ColorFlipper';
import Counter from './Counter';
import Review from './Review';
import Modal from './Modal';
import Canvas from './Canvas';
import DigitalClock from './digital_clock';
import Todo from './Todo';
import './App.css';
import Weather from './weather.js';
import Rps from './rps.js';
import Tetris from './tetris/Tetris.js'

function App() {
  return (
    <div className="App">
      <h1>Simple JS projects</h1>
      <ColorFlipper />
      <Counter />
      <Review />
      <Modal />
      <Canvas />
      <DigitalClock />
      <Todo />
      <textarea type="text" rows = "10" cols = "30" placeholder = "Enter text here"></textarea>
      <br></br>
      <br></br>
      <Weather />
      <Rps />
      <Tetris />

    </div>

  );
}

export default App;
