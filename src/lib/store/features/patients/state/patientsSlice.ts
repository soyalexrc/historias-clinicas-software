import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {RootState} from "@/lib/store";
import {Patient} from "@/lib/interfaces/Patient";

export interface PatientsState {
    queue: Patient[]
}

const initialState: PatientsState = {
    queue: [],
}

export const patientsSlice = createSlice({
    name: 'patients',
    initialState,
    reducers: {
        addNewPatientToQueue: (state, action: PayloadAction<Patient>) => {
            const upcomingPatient = action.payload;
            if (state.queue.some(patient => patient.id === upcomingPatient.id)) {
                const index = state.queue.findIndex(patient => patient.id === upcomingPatient.id);
                state.queue.splice(index, 1, upcomingPatient);
            } else {
                state.queue.unshift(action.payload);
            }
        }
    },
})

// Action creators are generated for each case reducer function
export const {addNewPatientToQueue} = patientsSlice.actions

export const selectPatientsQueue = (state: RootState) => state.patients.queue;
export const selectPatientsQueueAttended = (state: RootState) => state.patients.queue.filter(pat => pat.attend).length
export const selectPatientsQueueWaiting = (state: RootState) => state.patients.queue.filter(pat => !pat.attend).length

export default patientsSlice.reducer
