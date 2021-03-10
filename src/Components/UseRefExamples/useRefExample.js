import React, { useRef, useEffect } from "react";
import { Button } from "@material-ui/core"


function UseRefExample() {
    const refTxtName = useRef(null)
    const refLblDisplay = useRef(null)
    useEffect(() => {
        refTxtName.current.focus()
    })

    return (
        <div>
            This is my department.
            <br />
            <label>Name: </label>
            <input type="textbox" id='txtName' name='txtName' ref={refTxtName} />
            <Button color="primary" variant="contained"
                onClick={() => console.log(refLblDisplay.current.innerText = refTxtName.current.value)} >Submit</Button>
            <label ref={refLblDisplay} ></label>
        </div>
    )
}

export default UseRefExample
