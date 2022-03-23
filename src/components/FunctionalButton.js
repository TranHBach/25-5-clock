import { useDispatch } from "react-redux";
import { sessionActions } from "../store";

function FunctionalButton() {
  const dispatch = useDispatch();
  return (
    <div>
      <button id="start_stop" onClick={dispatch.bind(null, sessionActions.startStopTime())}>
        <i className="fa-solid fa-stop"></i>{" "}
        <i className="fa-solid fa-play"></i>
      </button>
      <button id="reset" onClick={dispatch.bind(null, sessionActions.reset())}>
        <i className="fa-solid fa-arrows-rotate"></i>
      </button>
    </div>
  );
}

export default FunctionalButton;
