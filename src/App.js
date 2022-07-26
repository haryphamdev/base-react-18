import logo from './logo.svg';
import './App.css';
import MyComponent from './components/MyComponent';

function App() {


  //JSX = html + js
  const name = 'eric';
  const testObj = { name: 'eric', channel: 'hoidanit' }


  //template
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <MyComponent />
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
