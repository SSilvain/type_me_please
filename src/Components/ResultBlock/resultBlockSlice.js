import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
    name: "blockResult",
    initialState: {
		resultArray: [],
		finishTime: 0
    },
    reducers: {
        setResultArray: (state, action) => {
            state.resultArray = action.payload;
        },
		setfinishTime: (state, action) => {
			state.finishTime = (action.payload.finishTimeStamp - action.payload.startResult) / 1000;
		}
    },
});

export const { setResultArray, setfinishTime } = slice.actions;

export const resultArray = (state) => state.blockResult.resultArray;
export const finishTime = (state) => state.blockResult.finishTime;

export default slice.reducer
