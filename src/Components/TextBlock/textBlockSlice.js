import { createSlice } from "@reduxjs/toolkit"

export const slice = createSlice({
    name: "textBlock",
    initialState: {
        textForTypingTemporary:
            "The two babies were already whimpering for food, but became silent when Moon-Watcher snarled at them. One of the mothers, defending the infant she could not properly feed, gave him an angry growl in return; he lacked the energy even to cuff her for her presumption.",
        textForTyping:
            "The two babies were already whimpering for food, but became silent when Moon-Watcher snarled at them. One of the mothers, defending the infant she could not properly feed, gave him an angry growl in return; he lacked the energy even to cuff her for her presumption.",
        words: [],
        isAnimate: false,
        indexToggleAnimate: 0, // idex symbol for toggle animate during typing
    },
    reducers: {
        splitByWords: (state) => {
            state.words = state.textForTyping.split(" ");
        },
        setIsAnimate: (state) => {
            state.isAnimate = !state.isAnimate;
        },
        setIndexToggleAnimate: (state, action) => {
            state.indexToggleAnimate = action.payload;
            console.log(state.indexToggleAnimate);
            
        },
    },
});

export const { splitByWords, setIsAnimate, setIndexToggleAnimate } = slice.actions;

export const textForTyping = (state) => state.textBlock.textForTyping
export const words = (state) => state.textBlock.words
export const isAnimate = (state) => state.textBlock.isAnimate
export const indexToggleAnimate = (state) => state.textBlock.indexToggleAnimate;

export default slice.reducer
