import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { sendMessage, typeMessage } from "./user1.slice";
 import { useState, useEffect } from 'react';
 
const User1 = () => {
  const dispatch = useDispatch();
  // const { message } = useSelector((state) => state.message);

  const [typeMessage,setTypeMessage] = useState([])
  return (
    <div className="container" style={{ display: "inline-flex" }}>
      <div
        className="user1"
        style={{
          justifyContent: "center",
          justifyItems: "flex-end",
          height: "600px",
          backgroundColor: "#A1E2D9",
          width: "400px",
          marginRight: "100px",
          marginTop: "10px",
          border: "3px solid purple",
          borderRadius: "25px",
        }}
      >
        <h1>Kiran</h1>
        {/* <h1>{message}</h1> */}
         {typeMessage}
        <div className="button" style={{ marginTop: "495px" }}>
          <input
            type="text"
            placeholder="Type a message..."
            onKeyUp={(e) => setTypeMessage(e.target.value)}
            style={{
              borderRadius: "10px",
              height: "30px",
              width: "300px",
              paddingLeft: "6px",
              marginRight: "5px",
              border: "3px solid purple",
            }}
          />
          <button
            onClick={() => dispatch(sendMessage(typeMessage))}
            style={{ height: "30px", width: "50px" }}
          >
            send
          </button>
        </div>
      </div>
    </div>
  );
};

export default User1;
