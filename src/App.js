import logo from "./logo.svg";

function App() {
  return (
    <div className="bg-blue-400 text-center text-white font-bold text-xl">
      <header className="App-header">
        <img src={logo} className="h-20 w-20 mx-auto animate-spin" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
