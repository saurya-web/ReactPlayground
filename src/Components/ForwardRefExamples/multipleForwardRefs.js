import React from 'react'

function MultipleForwardRefs(props, ref) {
    const { reftxtName, refTxtAge, refTxtGender } = ref
    return (
        <div>
            <h1>MultipleForwardRefs Component</h1>
            Name : <input type="text" ref={reftxtName} />
            <br />
            Age: <input type="text" ref={refTxtAge} />
            <br />
            Gender: <input type="text" ref={refTxtGender} />
            <br />
            This is address prop value: {props.address}
        </div>
    )
}

export default React.forwardRef(MultipleForwardRefs)//