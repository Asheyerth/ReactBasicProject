import { useState } from 'react'

function useDataList(initialList = []) {
    const [dataListState, setdataListState] = useState(initialList); 

    const setDataList = (newList) => {
        setDataList(newList);
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