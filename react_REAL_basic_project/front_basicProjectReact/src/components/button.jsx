

function Button({ label = "", callback = null }) { //Definition with parameters

    //use of parameters
    return (
        <button type="button" onClick={callback}>
            {label}
        </button>
    )
}

export default Button