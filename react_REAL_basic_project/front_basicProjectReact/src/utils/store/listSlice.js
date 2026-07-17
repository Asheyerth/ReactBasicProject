import { createSlice } from '@reduxjs/toolkit'
import useDataList from '../hooks/useDataList'

//use and manipulation of the list "state" with methods

const dataList = useDataList() //Custom hook to get the data from the backend

export const listSlice = createSlice({
  name: 'lista', //Nombre objeto
  initialState: { //Atributos del objeto o constructor
    value: [],
  },
  reducers: { //métodos del objeto
    addListItem: (state, action) => {
      state.value.push(action.payload)
      //dataList.setDataList(state.value) 
      console.log("state.value: ", state.value)
    },
    deleteListItem: (state, action) => {
      state.value.pop(action.payload)
      //dataList.setDataList(state.value) 
    },
  },
})

// Action creators are generated for each case reducer function
export const { addListItem, deleteListItem } = listSlice.actions

export default listSlice.reducer