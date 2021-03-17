import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { increase, decrease, reinitialize } from '../../store/state-slices/increaseDecreaseSlice'
import Button from '@material-ui/core/Button'

export default function InteractWithRedux() {
    const dispatch = useDispatch()
    const count = useSelector(state => state.increaseDecreaseReducer)

    useEffect(() => {
        console.log(`Count from useEffect: ${count}`)
    })

    return (
        <div>
            <Button color="primary" variant="contained" onClick={() => dispatch(increase())} >Increase</Button>
        &nbsp;&nbsp;&nbsp;
            <Button color="secondary" variant="contained" onClick={() => dispatch(decrease())} >Decreae</Button>
      &nbsp;&nbsp;&nbsp;
            <Button color="secondary" variant="contained" onClick={() => dispatch(reinitialize())} >reinitialize</Button>
        Count: {count}
        </div>
    )
}
