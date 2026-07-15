import Boton from './button' //Import component
import List from './list';
import { useSelector, useDispatch } from 'react-redux'
import { addListItem, deleteListItem} from '../store/listSlice' //Import functions from the SLice
import { useState, useRef } from 'react'
import {llamadoHTTP} from '../conection/requestNative'

function Form() {
    const formRef = useRef(null) //To handle inner data from the form and to no recharge the page
    const list = useSelector((state) => state.lista.value) //To get the state from the slicer from the store
    const dispatch = useDispatch()

    async function sendLink() {
        console.log("asassd")

        console.log(formRef)
        console.log(formRef.current)
        if (formRef.current) { //If exists
            console.log("asdasds")
            console.log(formRef.current)

            const formData = new FormData(formRef.current); //Creation of a maneable object of the inner data of the form

            console.log(formData)

           //Send the data to the backend using fetch
            fetch('/addList', { method: 'POST', body: formData.get('insertedName') }); 
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
        </form>
    )
}

export default Form