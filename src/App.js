import React from "react";
import './App.css';
import Counter from "./features/counter/counter";
import Box from './features/box/box';
import User1 from "./features/box/user1";
import User2 from "./features/box/user2";
function App() {
  return (
    <div className="App">
      {/* <Counter/> */}
      {/* <Box/> */}
      <User1/>
      <User2/>
      
    </div>
  );
}

export default App;
