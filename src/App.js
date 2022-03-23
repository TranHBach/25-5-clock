import "./App.css";
import './webfonts/all.css'
import BreakLength from "./components/BreakLength";
import SessionLength from "./components/SessionLength";
import RemainingTime from "./components/RemainingTime";
import FunctionalButton from "./components/FunctionalButton";

function App() {
  return (
    <div className="center">
      <a href="">Link to my code</a>
      <p>25+5 clock</p>

      <BreakLength />
      <SessionLength />
      <RemainingTime />
      <FunctionalButton />
    </div>
  );
}

export default App;
