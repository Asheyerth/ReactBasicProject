import Boton from './button' //Import component
import List from './list';
import { useSelector, useDispatch } from 'react-redux'
import { addListItem, deleteListItem} from '../utils/store/listSlice' //Import functions from the SLice
import { useState, useRef } from 'react'
import {createPost }from '../conection/postThunks'
import useDataList from '../utils/hooks/useDataList'

function Form() {
    const formRef = useRef(null) //To handle inner data from the form and to no recharge the page
    var list = useSelector((state) => state.lista.value) //To get the state from the slicer from the store
    const dispatch = useDispatch()
    const dataList = useDataList() //Custom hook to get the data from the backend

    async function sendLink() {
        console.log("asassd")

        console.log(formRef)
        console.log(formRef.current)
        if (formRef.current) { //If exists
            console.log("asdasds")
            console.log(formRef.current)

            const formData = new FormData(formRef.current); //Creation of a maneable object of the inner data of the form

            console.log(formData)
            const form = formData.get('insertedName');

            console.log("Name")
            console.log(form)

            //Send the data to the backend using fetch
            const res = await dispatch(createPost({"name": form }));
            console.log("res")
            console.log(res.payload.data)
            console.log(JSON.stringify(res.payload.data))
            var dataString = JSON.stringify(res.payload.data)
            dataString = dataString.replace(/[\[\]"]/g, '') //Remove the brackets and quotes from the string
            console.log("dataString")
            console.log(dataString)
            dataList.setDataList(JSON.stringify(res.payload.data)) //Update the list using the custom hook to get the data from the backend
        }

    }

    function sendState() {

        console.log(formRef)
        console.log(formRef.current)
        if (formRef.current) { //If exists
            console.log("asdasds")
            console.log(formRef.current)

            const formData = new FormData(formRef.current); //Creation of a maneable object of the inner data of the form

            console.log(formData)

            dispatch(addListItem(formData.get('insertedName'))) //updating the list using states
        }
    }

    //using the button component and sendind the parameters. One component, two different uses
    //Same as lists
    //formRef to hacer referencia al form
    return (
        <form ref={formRef}>
            <label name="asd">
                Your name:
                <input name="insertedName" />
            </label>
            <div>
                <Boton label='Add name using link' callback={() => sendLink()} />
                <Boton label='Add name using states' callback={() => sendState()} />
            </div>
            <List lista={list}/>
            <List lista={dataList.getDataList()}/>
        </form>
    )
}

export default Form