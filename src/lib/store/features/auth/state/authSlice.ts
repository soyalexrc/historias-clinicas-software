import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {RootState} from "@/lib/store";

// import type { PayloadAction } from '@reduxjs/toolkit'

export interface AuthState {
    user: any
}

const initialState: AuthState = {
    user: typeof localStorage !== 'undefined' ? JSON.parse(localStorage?.getItem('smart-report-user') ?? '{}') || {} : {},
}

export const expensesSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        updateUserInfo: (state, action: PayloadAction<any>) => {
            state.user = action.payload
            localStorage.setItem('smart-report-user', JSON.stringify(state.user));
        }
    },
})

// Action creators are generated for each case reducer function
export const {updateUserInfo} = expensesSlice.actions

export const selectUser = (state: RootState) => state.auth.user

export default expensesSlice.reducer
