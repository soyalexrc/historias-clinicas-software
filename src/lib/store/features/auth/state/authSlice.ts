import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {RootState} from "@/lib/store";
import {ClerkUser} from "@/lib/interfaces/User";

// import type { PayloadAction } from '@reduxjs/toolkit'

export interface AuthState {
    user: ClerkUser
}

const initialState: AuthState = {
    user: typeof localStorage !== 'undefined' ? JSON.parse(localStorage?.getItem('smart-report-user') ?? '{}') || {} : {},
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        updateUserInfo: (state, action: PayloadAction<ClerkUser>) => {
            state.user = action.payload
            localStorage.setItem('smart-report-user', JSON.stringify(state.user));
        }
    },
})

// Action creators are generated for each case reducer function
export const {updateUserInfo} = authSlice.actions

export const selectUser = (state: RootState) => state.auth.user

export default authSlice.reducer
