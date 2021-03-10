import { createSlice } from '@reduxjs/toolkit'

const { actions, reducer } = createSlice({
    name: 'sessionReducer',
    initialState: {
        languageId: 0,
        loggedInUserId: 0,
        roleId: 0
    },
    reducers: {
        setlanguageId: (state, { payload: languageId }) => { state.languageId = languageId }
        , setloggedInUserId: (state, { payload: loggedInUserId }) => { state.loggedInUserId = loggedInUserId }
        , setRoleId: (state, { payload: roleId }) => { state.roleId = roleId }
    }
})

export const { setlanguageId, setloggedInUserId, setRoleId } = actions
export default reducer