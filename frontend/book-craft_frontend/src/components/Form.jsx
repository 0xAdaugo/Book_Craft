const Form = (props) => {
    return <>
    <div>
        <form action="post" className="text-center my-5 p-1">
            <label className="p-1 m-1">{props.labelName}
            <input
            type="{props.inputType}"
            id={props.inputId}
            name={props.inputName}
            placeholder={props.inputPlaceholder}
            className="p-1 m-1 border-2 border-[#852500] rounded-md w-1/4"
            >
                
            </input>
            </label>
        </form>
    </div>
    </>
}

export default Form;