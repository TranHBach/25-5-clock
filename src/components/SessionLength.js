import { useDispatch, useSelector } from "react-redux";
import { sessionActions } from "../store";

function SessionLength() {
  const sessionLength = useSelector(state => state.session.sessionLength)
  const isDisabled = useSelector(state => state.session.buttonDisable)
  const dispatch = useDispatch()
  return (
    <div className="length">
      <div id="session-label">Session Length</div>
      <button disabled={isDisabled} id="session-increment" onClick={dispatch.bind(null, sessionActions.increaseSession())}>
        <i className="fa-solid fa-up-long"></i>
      </button>
      <label id="session-length">{sessionLength}</label>
      <button disabled={isDisabled} id="session-decrement" onClick={dispatch.bind(null, sessionActions.decreaseSession())}>
        <i className="fa-solid fa-down-long"></i>
      </button>
    </div>
  );
}

export default SessionLength;
