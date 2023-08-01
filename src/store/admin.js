import { createSlice } from '@reduxjs/toolkit';

const initialAdminState = {
    initialState: false,
}
const adminSlice  = createSlice({
    name: 'admin',
    initialState:initialAdminState,
    reducers:{
        admin(state){
         state.isAdmin = true;
        },
    }

})

export const adminActions = adminSlice.actions;


export default adminSlice.reducer;