import { useEffect, useState } from "react"
import Word from "../Word/Word"


// const typingText = ["Read", "the", "latest,", "technology", "news", "and", "interesting."]
const typingText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, aspernatur!"
let allTextSymbols = typingText.split("")
// console.log(allTextSymbols)
let allTextSymbolsScores = []
let currentSymbols = []

const Sentence = () => {
	const [typeMe, setTypeMe] = useState("")
	const [typeMeFullText, setTypeMeFullText] = useState("")
	const [currentSymbol, setCurrentSymbol] = useState("")
	const [startCount, setStartCount] = useState(true)
	let [typingStart, setTypingStart] = useState(0)
	let [errorTyping, setErrorTyping] = useState(false)
	let [indexOfSymbol, setIndexOfSymbol] = useState(0)



	useEffect(() => {
		if (!startCount && allTextSymbols[indexOfSymbol] === currentSymbol) {
			if (currentSymbol === " ") {
				setTypeMe("")
			}
			currentSymbols.push(currentSymbol)
			allTextSymbolsScores.push([currentSymbol, Date.now()])
			console.log(allTextSymbolsScores)
			setIndexOfSymbol(indexOfSymbol + 1)

			setErrorTyping(false)
		} else if (allTextSymbols[indexOfSymbol] !== currentSymbol) {
			setErrorTyping(true)
		}

	}, [currentSymbol])

	useEffect(() => {
		if (!startCount && typingText.startsWith(typeMeFullText)) {
			setErrorTyping(false)
			console.log("errorrno")
		}
	}, [typeMeFullText])
	// const typingTextWithSpaces = typingText.map((word, index, arr) => {
	// 	if (index < (arr.length - 1)) {
	// 		return word + "_"
	// 	} else {
	// 		return word
	// 	}
	// })

	// const coloredText = () => {

	// 	return typingTextWithSpaces[0].slice(0, typeMe.length)

	// }
	// const coloredText2 = () => {

	// 	return typingTextWithSpaces[0].slice(typeMe.length)

	// }

	const startType = (e) => {
		if (startCount) {
			setTypingStart(Date.now())
			setStartCount(false)
		}
		setTypeMeFullText(e.target.value)
		setCurrentSymbol(e.nativeEvent.data)
		console.log(e.nativeEvent.data)

	}



	// let allWords = typingText.map((word) => <Word typingText={word} />)
	return (
		<>
			<h1>{typingText}</h1>
			<input style={errorTyping ? { color: "red" } : { color: "green" }} type="text" onChange={startType} placeholder="type_me_please" value={typeMeFullText} />
		</>


	)
}

export default Sentence