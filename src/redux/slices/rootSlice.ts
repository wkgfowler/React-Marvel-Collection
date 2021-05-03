import {createSlice} from '@reduxjs/toolkit';

const rootSlice = createSlice({
    name: "root",
    initialState: {
        name: 'name placeholder',
        description: "description placeholder",
        comics_appeared_in: "500",
        super_power: 'super power placeholder',
    },
    reducers: {
        chooseName: (state, action) => {state.name = action.payload},
        chooseDescription: (state, action) => {state.description = action.payload}
    }
})

export const reducer = rootSlice.reducer;
export const {chooseName, chooseDescription} = rootSlice.actions;