import { createSlice } from "@reduxjs/toolkit";
export const initialState = {
  width: '30px',
  height:'30px',
  padding: '30px',
  backgroundColor: 'red',
  borderRadius: '0px',
  
};

const BoxSlice = createSlice({
  name: "count",
  initialState,
  reducers: {
    changeWidth: (state, actions) => {
        state.width= actions.payload + 'px'
    },
    changeHeight:(state,actions)=>{
      state.height= actions.payload+ 'px'
    },
    changeColor:(state,actions)=>{
      state.backgroundColor = actions.payload
    },
    changeToCircle:(state,actions)=>{
      state.borderRadius = actions.payload+ 'px'
    }

  }
});

export const { changeWidth, changeHeight, changeColor,changeToCircle} = BoxSlice.actions;
export default BoxSlice.reducer;
