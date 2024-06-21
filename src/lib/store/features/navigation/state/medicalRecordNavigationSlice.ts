import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {RootState} from "@/lib/store";
import {Patient} from "@/lib/interfaces/Patient";

export interface MedicalRecordNavigationState {
    currentPanel: string;
}

const initialState: MedicalRecordNavigationState = {
    currentPanel:  typeof localStorage !== 'undefined' ? localStorage.getItem('sm-current-panel') ?? 'Historial Atenciones' :  'Historial Atenciones'
}

export const medicalRecordNavigationSlice = createSlice({
    name: 'medicalRecordNavigation',
    initialState,
    reducers: {
        updateCurrentPanel: (state, action: PayloadAction<string>) => {
            localStorage.setItem('sm-current-panel', action.payload);
            state.currentPanel = action.payload;
        }
    },
})

// Action creators are generated for each case reducer function
export const {updateCurrentPanel} = medicalRecordNavigationSlice.actions

export const selectCurrentPanel = (state: RootState) => state.medicalRecordNavigation.currentPanel

export default medicalRecordNavigationSlice.reducer
