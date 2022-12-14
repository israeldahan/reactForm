import React, { useState } from "react";

const LoginFormCheckBox = () => {

    const [checkboxes, setCheckboxes] = useState({
        green: false,
        blue: false
    })
    const handleChange = (event) => {
        console.log(event.target.id);
        setCheckboxes({
            ...checkboxes,
            [event.target.id]: !checkboxes[event.target.id]
        })
        console.log();
    }
    return (
        <div>
            <label >
                <input
                    id="blue"
                    name="chooseColor"
                    type="checkbox"
                    checked={checkboxes.blue}
                    onChange={handleChange}
                />
                Blue
                </label>
                <label>
                <input
                    id="green"
                    name="chooseColor"
                    type="checkbox"
                    checked={checkboxes.green}
                    onChange={handleChange}
                />
                Green
            </label>
        </div>
    )
}

export default LoginFormCheckBox;