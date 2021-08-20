import { configureStore } from "@reduxjs/toolkit";
import textBlockReducer from "../Components/TextBlock/textBlockSlice";
import inputTextReducer from "../Components/InputText/inputTextSlice"
import blockResultReduser from "../Components/ResultBlock/resultBlockSlice"

export default configureStore({
    reducer: {
        textBlock: textBlockReducer,
        inputText: inputTextReducer,
        blockResult: blockResultReduser
    },
});
