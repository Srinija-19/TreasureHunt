import "./App.css";
import { Route } from "react-router-dom";
import Game from "./Game"
import Homepage from "./Pages/Homepage";

function App() {
  return (
    <div className="App">
      <Route path="/" component={Homepage} exact />
      <Route path="/game" component={Game} />
    </div>
  );
}

export default App;
