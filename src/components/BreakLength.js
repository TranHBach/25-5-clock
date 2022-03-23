import { useDispatch, useSelector } from "react-redux";
import { sessionActions } from "../store";
import "../webfonts/all.css";

function BreakLength() {
  const breakLength = useSelector((state) => state.session.breakLength);
  const isDisabled = useSelector((state) => state.session.buttonDisable);
  const dispatch = useDispatch();
  return (
    <div className="length">
      <div id="break-label">Break Length</div>
      <button
        disabled={isDisabled}
        id="break-increment"
        onClick={dispatch.bind(null, sessionActions.increaseBreak())}
      >
        <i className="fa-solid fa-up-long"></i>
      </button>
      <label id="break-length">{breakLength}</label>
      <button
        disabled={isDisabled}
        id="break-decrement"
        onClick={dispatch.bind(null, sessionActions.decreaseBreak())}
      >
        <i className="fa-solid fa-down-long"></i>
      </button>
    </div>
  );
}

export default BreakLength;
