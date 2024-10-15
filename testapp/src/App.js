import logo from './logo.svg';
import optistock from './OptiStock.webp';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={optistock} className="App-logo" alt="logo" />
        <p>
          inventory optimation software.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
