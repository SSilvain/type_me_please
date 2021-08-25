import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
    name: "inputText",
    initialState: {
        finish: false,
        errorTyping: false,
        typeMe: "",
        isStartCount: true,
        currentSymbol: "",
        textForChecking: "",
        tmpWord: "",
        indexOfWord: 0,
        indexOfSymbol: 0,
        textForTypingLength: 0,
        allTextSymbolsScores: [],
        typingStart: 0,
    },
    reducers: {
        startCount: (state) => {
            state.isStartCount = false;
            state.typingStart = Date.now();
        },
        setTypeMe: (state, action) => {
            state.typeMe = action.payload;
        },
        setCurrentSymbol: (state, action) => {
            state.currentSymbol = action.payload;
        },
        setTextForChecking: (state, action) => {
            state.textForChecking = action.payload;
            state.textForTypingLength = action.payload.length;
        },
        checkEnteredText: (state) => {
            if (
                state.textForChecking.startsWith(state.typeMe) &&
                state.typeMe !== ""
            ) {
                // baseFunc()

                if (state.tmpWord.length < state.typeMe.length) {
                    state.tmpWord = state.typeMe;

                    state.allTextSymbolsScores = [
                        ...state.allTextSymbolsScores,
                        [state.currentSymbol, Date.now()],
                    ];

                    // checkFinish();

                    if (state.textForTypingLength - 1 === state.indexOfSymbol) {
                        
                        state.indexOfSymbol = state.indexOfSymbol + 1; // for animate last symbol
                        state.finish = true;
                        state.typeMe = "";
                    } else {
                        state.indexOfSymbol = state.indexOfSymbol + 1;
                    }
                }

                if (state.currentSymbol === " ") {
                    
                        state.indexOfSymbol = state.indexOfSymbol - 1;
                    state.textForChecking = state.textForChecking.slice(
                        state.typeMe.length
                    );
                    state.typeMe = "";
                    state.tmpWord = "";
                    state.indexOfWord = state.indexOfWord + 1;
                }
                state.errorTyping = false;
            } else if (state.typeMe === "") {
                state.errorTyping = false;
            } else {
                state.errorTyping = true;
            }
        },
    },
});

export const {
    startCount,
    setTypeMe,
    setCurrentSymbol,
    setTextForChecking,
    checkEnteredText,
} = slice.actions;

export const finish = (state) => state.inputText.finish;
export const errorTyping = (state) => state.inputText.errorTyping;
export const typeMe = (state) => state.inputText.typeMe;
export const isStartCount = (state) => state.inputText.isStartCount;
export const currentSymbol = (state) => state.inputText.currentSymbol;
export const allTextSymbolsScores = (state) =>
state.inputText.allTextSymbolsScores;
export const typingStart = (state) => state.inputText.typingStart;
export const indexOfSymbol = (state) => state.inputText.indexOfSymbol;
export const indexOfWord = (state) => state.inputText.indexOfWord;

export default slice.reducer;
