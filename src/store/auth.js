
import { createSlice } from '@reduxjs/toolkit';

const initialAuthState = {
    initialState: false,
}
const authSlice  = createSlice({
    name: 'auth',
    initialState:initialAuthState,
    reducers:{
        login(state){
            state.isAuthenticated = true;
        },
        logout(state){
            state.isAuthenticated = false;
        }
        ,
        signup(state){
            state.isAuthenticated = true;
        }
    }

})

export const authActions = authSlice.actions;


export default authSlice.reducer;