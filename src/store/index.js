import { configureStore, createSlice } from "@reduxjs/toolkit";

// import { useState } from "react";

//Usage:
// import useSelector, useDispatch, sessionActions
// Wrap index.js with <Provider>
// const ... = useSelector(state => state.session.breakLength)
// const dispatch = useDispatch()
// dispatch(sessionActions.increaseBreak())
const initialSessionState = {
  breakLength: 5,
  sessionLength: 25,
  timeLeft: 1500000, // 1.500.000 ms = 25 Min
  isBreak: false,
  isSession: true,
  isRunning: false,
  buttonDisable: false,
};

const sessionSlice = createSlice({
  name: "session",
  initialState: initialSessionState,
  reducers: {
    increaseBreak(state) {
      if (state.breakLength >= 60) {
        return;
      }
      state.breakLength++;
    },
    decreaseBreak(state) {
      if (state.breakLength <= 1) {
        return;
      }
      state.breakLength--;
    },
    increaseSession(state) {
      if (state.sessionLength >= 60) {
        return;
      }
      state.sessionLength++;
      state.timeLeft = state.sessionLength * 60 * 1000;
    },
    decreaseSession(state) {
      if (state.sessionLength <= 1) {
        return;
      }
      state.sessionLength--;
      state.timeLeft = state.sessionLength * 60 * 1000;
    },
    decreaseTimeLeft(state) {
      if (state.timeLeft <= 0) {
        document.getElementById('beep').play()
        if (state.isSession) {
          state.timeLeft = state.breakLength * 60 * 1000;
          state.isBreak = true;
          state.isSession = false;
        } else if (state.isBreak) {
          state.timeLeft = state.sessionLength * 60 * 1000;
          state.isSession = true;
          state.isBreak = false;
        }
        return
      }
      state.timeLeft = state.timeLeft - 1000;
    },
    setTimeLeft(state, actions) {
      state.timeLeft = actions.payload;
    },
    startStopTime(state) {
      state.isRunning = !state.isRunning;
      state.buttonDisable = !state.buttonDisable;
    },
    reset(state) {
      document.getElementById('beep').currentTime = 0
      document.getElementById('beep').pause()
      state.sessionLength = 25;
      state.timeLeft = 25 * 60 * 1000;
      state.breakLength = 5;
      state.isRunning = false;
      state.isSession = true;
      state.isBreak = false
      state.buttonDisable = false;
    },
  },
});

const store = configureStore({
  reducer: { session: sessionSlice.reducer },
});

export const sessionActions = sessionSlice.actions;

export default store;

// const Session = React.createContext();

// export default Session;

// //Use redux
// export const SessionProvider = (props) => {
//   const [breakLength, setBreakLength] = useState(5);
//   const [sessionLength, setSessionLength] = useState(25);
//   const [timeLeft, setTimeLeft] = useState(25)
//   const [isRunning, setIsRunning] = useState(false)
//   const contextValue = {
//     breakLength,
//     sessionLength,
//     timeLeft,
//     isRunning,
//     setBreakLength,
//     setSessionLength,
//     setTimeLeft,
//     setIsRunning,
//   };
//   return (
//     <Session.Provider value={contextValue}>{props.children}</Session.Provider>
//   );
// };
