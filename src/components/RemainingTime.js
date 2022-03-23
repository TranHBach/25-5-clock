import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sessionActions } from "../store";

let countdown;
function RemainingTime() {
  const msLeft = useSelector((state) => state.session.timeLeft);
  const isRunning = useSelector((state) => state.session.isRunning);
  const isBreak = useSelector(state => state.session.isBreak)
  const dispatch = useDispatch();
  console.log('this execute')
  const minutes = Math.floor(msLeft/1000/60).toLocaleString('en-US',{minimumIntegerDigits: 2})
  const seconds = ((msLeft - minutes*60*1000)/1000).toLocaleString('en-US',{minimumIntegerDigits: 2})

  useEffect(() => {
    if (isRunning) {
      countdown = setInterval(() => {
        dispatch(sessionActions.decreaseTimeLeft());
      }, 1000);
    }
    return (() => {
        clearInterval(countdown)
        countdown = null
    })
  }, [isRunning, dispatch]);
  
  return (
    <div className="remaining">
      <div id="timer-label">{isBreak ? 'Break' : 'Session'}</div>
      {/* <label id="time-left">60:00</label> */}
      <time id="time-left">{minutes}:{seconds}</time>
    </div>
  );
}

export default RemainingTime;
