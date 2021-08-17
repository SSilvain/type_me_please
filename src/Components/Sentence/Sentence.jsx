import { useEffect, useState } from "react"
import s from  "./Sentence.module.css"


// const typingText = ["Read", "the", "latest,", "technology", "news", "and", "interesting."]
const typingText = "Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem"
let typingTextTmp = typingText
let allTextSymbols = typingText.split("")
// console.log(allTextSymbols)
let allTextSymbolsScores = []
let currentSymbols = []
let tmpWord = ""

let mapResult = new Map()


const Sentence = () => {
	const [typeMe, setTypeMe] = useState("")
	const [typeMeFullText, setTypeMeFullText] = useState("")
	const [currentSymbol, setCurrentSymbol] = useState("")
	const [startCount, setStartCount] = useState(true)
	let [typingStart, setTypingStart] = useState(0)
	let [errorTyping, setErrorTyping] = useState(false)
	let [indexOfWord, setIndexOfWord] = useState(0)
	let [resultArray, setResultArray] = useState([])



	const result = () => {

		if (allTextSymbolsScores.length !== 0) {
			allTextSymbolsScores.reduce((prev, current, index, arr) => {
				let pair = prev[0] + current[0]
				let pairTime = current[1] - prev[1]
				if (prev) {
					if (mapResult.has(pair)) {
						let pairTimeSum = Math.ceil((mapResult.get(pair) + pairTime) / 2)
						mapResult.set(pair, (pairTimeSum))
					} else {
						mapResult.set(pair, (pairTime))
					}
				}
				return current
			})
		}
		const mapSort2 = new Map([...mapResult.entries()].sort((a, b) => b[1] - a[1]));
		let resultArrayTmp = []
		for (let [key, value] of mapSort2) {
			resultArrayTmp.push([key, value])
		}
		setResultArray([...resultArrayTmp])

	}

	const resultWord = () => {
		if (allTextSymbolsScores.length !== 0) {
			allTextSymbolsScores.reduce((prev, current, index, arr) => {


			})
		}
	}
	
	useEffect(() => {
		// const highlightCurrentWord 
		let typingTextWords = typingText.split(" ")
		
		let hightLightsWord = typingTextWords.map((word, index) => {
			if (index === indexOfWord) {
				return <span className={s.active}>{word}</span>
			} else {
				return <span >{word}</span>
			}
			
		})
		setTypeMeFullText(hightLightsWord)

		

	}, [typeMe])






	const baseFunc = () => {
		if (tmpWord.length < typeMe.length) {
			tmpWord = typeMe

			allTextSymbolsScores.push([currentSymbol, Date.now()])
			console.log(allTextSymbolsScores)
			result()
		}
	}

	useEffect(() => {
		//check entered text
		if (typingTextTmp.startsWith(typeMe) && typeMe !== "") {
			baseFunc()
			if (currentSymbol === " ") {
				typingTextTmp = typingTextTmp.slice(typeMe.length)
				setTypeMe("")
				tmpWord = ""
				setIndexOfWord(indexOfWord + 1)
			}
			setErrorTyping(false)
		} else {
			setErrorTyping(true)
		}
	}, [typeMe])



	const startType = (e) => {
		if (startCount) {
			setTypingStart(Date.now())
			setStartCount(false)
		}
		setTypeMe(e.target.value)
		setCurrentSymbol(e.nativeEvent.data)

	}







	// let allWords = typingText.map((word) => <Word typingText={word} />)
	return (
		<>
			<h1>{typeMeFullText}</h1>
			<input style={errorTyping ? { color: "red" } : { color: "green" }} type="text" onChange={startType} placeholder="type_me_please" value={typeMe} />
			<div>{resultArray.map((res, index) => <div key={index}><span className="result">{res[0]}</span> <span className="result">{res[1]}</span></div>)}</div>
		</>


	)
}

export default Sentence