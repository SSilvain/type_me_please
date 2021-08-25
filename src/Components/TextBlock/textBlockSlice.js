import { createSlice } from "@reduxjs/toolkit"

export const slice = createSlice({
    name: "textBlock",
    initialState: {
        textForTypingTemporary:
            "The two babies were already whimpering for food, but became silent when Moon-Watcher snarled at them. One of the mothers, defending the infant she could not properly feed, gave him an angry growl in return; he lacked the energy even to cuff her for her presumption.",
        textForTyping:
            "The two babies were already whimpering for food, but became silent when Moon-Watcher snarled at them. One of the mothers, defending the infant she could not properly feed, gave him an angry growl in return; he lacked the energy even to cuff her for her presumption.",
        words: [],
        isAnimate: true
    },
    reducers: {
        splitByWords: (state) => {
            state.words = state.textForTyping.split(" ");
        },
        setIsAnimate: (state) => {
            state.isAnimate = !state.isAnimate
        },
    },
});

export const { splitByWords, setIsAnimate } = slice.actions;

export const textForTyping = (state) => state.textBlock.textForTyping
export const words = (state) => state.textBlock.words
export const isAnimate = (state) => state.textBlock.isAnimate

export default slice.reducer
