import React from "react";

const InputForm = ({title, value, onChange}) => (
    <div>
        {title}: <input value={value} onChange={onChange}/>
    </div>
)


export default InputForm