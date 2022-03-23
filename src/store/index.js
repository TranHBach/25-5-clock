import { useState } from "react";
import { configureStore, createSlice } from "@reduxjs/toolkit";

//Usage:
// import useSelector, useDispatch, sessionActions
// Wrap index.js with <Provider>
// const ... = useSelector(state => state.session.breakLength)
// const dispatch = useDispatch()
// dispatch(sessionActions.increaseBreak())
const initialSessionState = {
  breakLength: 5,
  sessionLength: 25,
  timeLeft: 25,
  isRunning: false
}

const sessionSlice = createSlice({
  name: "session",
  initialState: initialSessionState,
  reducers: {
    increaseBreak(state, action) {
      state.breakLength++
    },
    increaseSession(state, action) {
      state.sessionLength++
    }
  }
})

const store = configureStore({
  reducer: {session: sessionSlice.reducer}
})

export const sessionActions = sessionSlice.actions

export default store

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
