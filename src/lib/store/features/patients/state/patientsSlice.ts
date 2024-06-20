import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {RootState} from "@/lib/store";
import {Patient} from "@/lib/interfaces/Patient";

export interface PatientsState {
    queue: Patient[]
}

const initialState: PatientsState = {
    queue: [],
}

export const expensesSlice = createSlice({
    name: 'patients',
    initialState,
    reducers: {
        addNewPatientToQueue: (state, action: PayloadAction<Patient>) => {
            const upcomingPatient = action.payload;
            if (state.queue.some(patient => patient.id === upcomingPatient.id)) {
                const index = state.queue.findIndex(patient => patient.id === upcomingPatient.id);
                state.queue.splice(index, 1, upcomingPatient);
            } else {
                state.queue.push(action.payload);
            }
        }
    },
})

// Action creators are generated for each case reducer function
export const {addNewPatientToQueue} = expensesSlice.actions

export const selectPatientsQueue = (state: RootState) => state.patients.queue

export default expensesSlice.reducer
