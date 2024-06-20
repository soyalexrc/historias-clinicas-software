import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {RootState} from "@/lib/store";

// import type { PayloadAction } from '@reduxjs/toolkit'

export interface PatientsState {
    queue: any[]
}

const initialState: PatientsState = {
    queue: typeof sessionStorage !== 'undefined' ? JSON.parse(sessionStorage?.getItem('patients') ?? '[]') || [] : [],
}

export const expensesSlice = createSlice({
    name: 'patients',
    initialState,
    reducers: {
        addNewPatientToQueue: (state, action: PayloadAction<any>) => {
            state.queue.push(action.payload);
            sessionStorage.setItem('patients', JSON.stringify(state.queue));
        }
    },
})

// Action creators are generated for each case reducer function
export const {addNewPatientToQueue} = expensesSlice.actions

export const selectPatientsQueue = (state: RootState) => state.patients.queue

export default expensesSlice.reducer
