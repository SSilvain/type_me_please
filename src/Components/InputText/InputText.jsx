
import s from "./InputText.module.scss"

import { useDispatch, useSelector } from "react-redux"


import { startCount, setTypeMe, setCurrentSymbol, setTextForChecking, checkEnteredText, finish, errorTyping, typeMe, isStartCount, currentSymbol, indexOfSymbol } from "./inputTextSlice"
import { textForTyping } from "../TextBlock/textBlockSlice"
import { useEffect } from "react"

const InputText = () => {

	const finishInput = useSelector(finish)
	const errorTypingInput = useSelector(errorTyping)
	const typeMeInput = useSelector(typeMe)
	const isStartCountInput = useSelector(isStartCount)
	const currentSymbolInput = useSelector(currentSymbol)
	const textForTypingInput = useSelector(textForTyping)
	const indexOfSymbolInput = useSelector(indexOfSymbol)

	const dispatch = useDispatch()

	const startTypeInput = (e) => {
		if (isStartCountInput) {
			

			dispatch(setTextForChecking(textForTypingInput))

			dispatch(startCount())
			console.count("hell")
		}
		dispatch(setTypeMe(e.target.value))
		dispatch(setCurrentSymbol(e.nativeEvent.data))
		dispatch(checkEnteredText())

	}
	
	
	
	// // vanilla js insert element for animate
	// useEffect(() => {
	// 	if (!isStartCountInput && currentSymbolInput !== null) {
	// 		console.count("type")
	// 		let elementDiv = document.createElement("div")
	// 		elementDiv.setAttribute("class", "animate")
	// 		const newContent = document.createTextNode(currentSymbolInput);

	// 		// add the text node to the newly created div
	// 		elementDiv.appendChild(newContent);

	// 		// add the newly created element and its content into the DOM
	// 		const currentDiv = document.getElementById("id" + (indexOfSymbolInput-1));
	// 		currentDiv.append(elementDiv);
	// 	}
	// 	// setArr([...arr, currentSymbol])
	// }, [typeMeInput])
	
	

	return (
		<div className={s.inputWrapper}>
			<input
				disabled={finishInput}
				className={s.inputTyping}
				style={errorTypingInput ? { color: "red" } : { color: "blue" }}
				type="text"
				onChange={startTypeInput}
				placeholder=""
				value={typeMeInput}
			/>
		</div>
	)
}

export default InputText