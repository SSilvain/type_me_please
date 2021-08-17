import { useEffect, useState } from "react"
import "./Sentence.css"


// const typingText = ["Read", "the", "latest,", "technology", "news", "and", "interesting."]
const typingText = "Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem"
let allTextSymbols = typingText.split("")
// console.log(allTextSymbols)
let allTextSymbolsScores = []
let currentSymbols = []
let tmpWord = "Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem"

const Sentence = () => {
	const [typeMe, setTypeMe] = useState("")
	const [typeMeFullText, setTypeMeFullText] = useState("")
	const [currentSymbol, setCurrentSymbol] = useState("")
	const [startCount, setStartCount] = useState(true)
	let [typingStart, setTypingStart] = useState(0)
	let [errorTyping, setErrorTyping] = useState(false)
	let [indexOfSymbol, setIndexOfSymbol] = useState(0)
	let [resultArray, setResultArray] = useState([])



	useEffect(() => {


	}, [currentSymbol])

	const baseFunc = () => {
		if (currentSymbol === " ") {
			console.log("in")
			setTypeMe("")

			tmpWord = typingText.slice(indexOfSymbol)

		}

		allTextSymbolsScores.push([currentSymbol, Date.now()])
		setIndexOfSymbol(indexOfSymbol + 1)
	}

	useEffect(() => {
		// console.log("tmpWord ", tmpWord)
		// console.log("typeMe ", typeMe)
		if (tmpWord.startsWith(typeMe)) {
			setErrorTyping(false)
		} else {
			setErrorTyping(true)
		}
		result()
	}, [typeMe])

	// useEffect(() => {
	// 	if (!startCount && typingText.slice(indexOfSymbol).startsWith(typeMe)) {//

	// 		setErrorTyping(false)
	// 		console.log(typingText.slice(indexOfSymbol + 1))
	// 	}
	// }, [currentSymbol])



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
		setTypeMe(e.target.value)
		setCurrentSymbol(e.nativeEvent.data)
		// console.log(e.target.value)

	}
	let mapResult = new Map()
	const result = () => {
		if (allTextSymbolsScores.length !== 0) {
			allTextSymbolsScores.reduce((prev, current, index, arr) => {
				let pair = prev[0] + current[0]
				let pairTime = current[1] - prev[1]
				if (prev) {
					if (mapResult.has(pair)) {
						let pairTimeSum = (mapResult.get(pair) + pairTime) / 2
						mapResult.set(pair, (pairTimeSum))
					} else {
						mapResult.set(pair, (pairTime))
					}

				}
				return current
			})
		}

		// console.log("This is map ", mapResult)
		const mapSort2 = new Map([...mapResult.entries()].sort((a, b) => b[1] - a[1]));
		let resultArrayTmp = []
		for (let [key, value] of mapSort2) {
			resultArrayTmp.push([key, value])
		}
		setResultArray(resultArrayTmp)
	}

	const resultOut = resultArray.map((res, index) => <div key={index}><span className="result">{res[0]}</span> <span className="result">{res[1]}</span></div>)



	// let allWords = typingText.map((word) => <Word typingText={word} />)
	return (
		<>
			<h1>{typingText}</h1>
			<input style={errorTyping ? { color: "red" } : { color: "green" }} type="text" onChange={startType} placeholder="type_me_please" value={typeMe} />
			<div>{resultOut}</div>
		</>


	)
}

export default Sentence