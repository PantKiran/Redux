import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
    message:' say Hello'
};

const User2Slice = createSlice({
  name:'user2',
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

export const { sendMessage,typeMessage} = User2Slice.actions;
export default User2Slice.reducer;

