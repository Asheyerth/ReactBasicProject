import { useState } from 'react'

function List({lista = []}) {
    const [listName, setListName] = useState([]); //in normal cases, this is used

    return (
        <div>
            <label>Lista:</label>
            {[...lista].map((item, index) => (
                <li key={index}>
                    {index}.{item}
                </li>
            ))}
        </div>
    )


}

export default List