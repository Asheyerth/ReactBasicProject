import { createSlice } from '@reduxjs/toolkit'

//use and manipulation of the list "state" with methods

export const listSlice = createSlice({
  name: 'lista', //Nombre objeto
  initialState: { //Atributos del objeto o constructor
    value: ['Adan'],
  },
  reducers: { //métodos del objeto
    addListItem: (state, action) => {
      state.value.push(action.payload)
    },
    deleteListItem: (state, action) => {
      state.value.pop(action.payload)
    },
  },
})

// Action creators are generated for each case reducer function
export const { addListItem, deleteListItem } = listSlice.actions

export default listSlice.reducer