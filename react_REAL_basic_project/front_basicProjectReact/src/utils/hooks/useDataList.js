import { useState } from 'react'

//No se usa realmente 

const useDataList = (initialList = []) => {
    const [dataListState, setdataListState] = useState(initialList); 

    const setDataList = (newList) => {
        var processedList = newList.map(item => item?.name||"Not Avaliable");
        setdataListState([...processedList]); //Update the list using the custom hook to get the data from the backend
    }

    const getDataList = () => {
        return dataListState;
    }

    return {
        setDataList,
        getDataList
    }
    
}

export default useDataList