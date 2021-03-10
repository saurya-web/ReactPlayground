import { createSlice } from '@reduxjs/toolkit'

//export const initialState = 0

const { actions, reducer } = createSlice({
    name: 'increaseDecreaseSlice',
    initialState: 50,
    reducers: {
        increase: (state) => (state + 1)
        , decrease: (state) => (state - 1)
        , reinitialize: (state) => (state = 0)
    }
})

export const { increase, decrease, reinitialize } = actions
export default reducer