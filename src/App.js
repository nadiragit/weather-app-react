import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Boston" />

        <footer>
          {" "}
          Coded by Nadira Benhamida and it is{" "}
          <a
            href="https://github.com/nadiragit/weather-app-react"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            open-sourced{" "}
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
