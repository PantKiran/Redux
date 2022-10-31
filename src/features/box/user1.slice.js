import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
    message:'say Hello',
};

const User1Slice = createSlice({
  name: "user1",
  initialState,
  reducers: {
    
    sendMessage:(state,actions)=>{
      state.message = actions.payload
    },
    typeMessage:(state,actions)=>{
        state.message= actions.payload
    }

  }
});

export const { sendMessage,typeMessage} = User1Slice.actions;
export default User1Slice.reducer;

