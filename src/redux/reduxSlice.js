import { createSlice } from "@reduxjs/toolkit";



const reduxSlice = createSlice({
    name : "reduxslice",
    initialState : {
        cardArray : [{cardSrc : "yo"}]
    },
    reducers:{

        sendData : (state,action)=>{
       const newCard = {cardSrc:action.payload }
       state.cardArray.unshift(newCard)
       state.cardArray = state.cardArray.slice(0,1)
       
        },

        // getData : (state,action)=>{
        //  state.todos = state.todos.filter((todo)=>todo.id !== action.payload)

        // }


          
    }
})

export const {sendData} = reduxSlice.actions
export default reduxSlice.reducer