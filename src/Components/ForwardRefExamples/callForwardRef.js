import React, { useEffect, useRef } from "react";
import MultipleForwardRefs from "./multipleForwardRefs";

export default function CallForwardRef() {
    const refMultiple = { reftxtName: useRef(null), refTxtAge: useRef(null), refTxtGender: useRef(null) }

    useEffect(() => {
        refMultiple.reftxtName.current.value = "My Name"
        refMultiple.refTxtAge.current.value = "Age"
        refMultiple.refTxtGender.current.value = "Gender"
    })

    return (
        <div>
            <MultipleForwardRefs ref={refMultiple} address="201 Saint Pauls" />
        </div>
    )
}
