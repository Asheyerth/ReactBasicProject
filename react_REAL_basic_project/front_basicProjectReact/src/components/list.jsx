import { useState } from 'react'

function List({lista = [], label = "Lista"}) {
    const [listName, setListName] = useState([]); //in normal cases, this is used

    return (
        <div>
            <label>{label}:</label>
            {[...lista].map((item, index) => (
                <li key={index}>
                    {index}.{item}
                </li>
            ))}
        </div>
    )


}

export default List