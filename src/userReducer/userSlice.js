import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    email : 'gafurovtariel618@gmail.com',
    password : 12345,
    validEmail : false,
    validPassword : false,
    isLoading : false,
    GlobalWindow : false,
    isSecond : true
}


export const userSlice = createSlice({
    name : 'user',
    initialState,
    reducers : {
        setEmail : (state , action) => {
            state.email = action.payload
            if(state.email.includes('gafurovtariel618@gmail.com')){
                state.validEmail = true
            }else{
                state.validEmail = false
            }
        },
        setPassword : (state , action) => {
            state.password = action.payload
            if(state.password.includes(12345)){
                state.validPassword = true
            }else{
                state.validPassword = false
            }
        },
        setIsLoading : (state) => {
            state.isLoading = !state.isLoading
        },
        setGlobalWindow : (state) => {
            state.GlobalWindow = !state.GlobalWindow            
        },
        setIsSecond : (state) => {
            state.isSecond = !state.isSecond
        }        
    }
})


export const { setEmail , setPassword , setIsLoading , setGlobalWindow , setIsSecond } = userSlice.actions
export default userSlice.reducer