import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    status: false,
    userdata : null,
    cart : 0,
}
const authslice = createSlice({
    name : 'auth',
    initialState,
    reducers:{
        login:(state , action)=>{
            state.status = true;
            state.userdata = action.payload;
        },
        logout:(state)=>{
            state.status = false;
            state.userdata = null;
        },
        setcartvalue:(state, action)=>{
            state.cart = action.payload;
        }
    }
})

export const  {login , logout , setcartvalue} = authslice.actions;
export default authslice.reducer;