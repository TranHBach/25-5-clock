import "./App.css";
import './webfonts/all.css'
import BreakLength from "./components/BreakLength";
import SessionLength from "./components/SessionLength";
import RemainingTime from "./components/RemainingTime";
import FunctionalButton from "./components/FunctionalButton";

function App() {
  return (
    <div className="center">
      <a href="https://github.com/TranHBach/25-5-clock.git" style={{color: "white"}}>Link to my code</a>
      <p>25+5 clock</p>

      <BreakLength />
      <SessionLength />
      <RemainingTime />
      <FunctionalButton />
      <audio id="beep" hidden src={require("./audio/FM9B3TC-alarm.mp3")}></audio>
    </div>
  );
}

export default App;
