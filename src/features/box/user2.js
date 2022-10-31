import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { sendMessage, typeMessage } from "./user2.slice";

const User2 = () => {
  const dispatch = useDispatch();

  return (
    <div className="container" style={{ display: "inline-flex" }}>
      <div
        className="user2"
        style={{
          justifyContent: "center",
          justifyItems: "flex-start",
          marginLeft: "100px",
          backgroundColor: "#abd9e9",
          height: "600px",
          width: "400px",
          border:'3px solid purple',
          borderRadius:"25px"


        }}
      >
        <h1>Pankaj</h1>
        <div className="button" style={{ marginTop: "495px" }}>
          <input onKeyUp={(e)=>dispatch(typeMessage(e.target.value))}
            type="text"
            placeholder="Type a message..."
            style={{
              borderRadius: "10px",
              height: "30px",
              width: "300px",
              paddingLeft: "6px",
              marginRight: "5px",
              border:'3px solid purple'
            }}
          />
          <button onClick={()=>dispatch(sendMessage())} style={{ height: "30px", width: "50px" }}>send</button>
        </div>
      </div>
    </div>
  );
};

export default User2;
