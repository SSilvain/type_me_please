import { AnimatePresence, motion } from "framer-motion"
import { useEffect, useState } from "react"
import StopWatch from "../StopWatch/StopWatch"
import s from "./Sentence.module.scss"
import "./animate.css"

const InItem = ({ item, index }) => {
	const [inItemVisible, setInItemVisible] = useState(true)
	setTimeout(() => { setInItemVisible(false) }, 1000)
	return (
		<div style={{position: "relative", display: "inline-block", width: "15px", height: "15px"}}>
			<AnimatePresence>
			{inItemVisible && (
				<motion.div
					// children={item}
					key={index}
					// initial={{ opacity: 0 }}
					className={s.animate}

					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					// transition={{ duration: 0.3 }}
				>
					{item}
					</motion.div>)}
			</AnimatePresence>
		</div>
	)
}

const MyItem = ({ arr, isVisible }) => {

	return (
		<div>
				{arr.map((item, index) => (
					<InItem item={item} index={index} />
				))}
			{/* {arr.map((item, index) => {
				return (
					<motion.div
						key={index}
						className={s.animate}
						animate={{ x: 100 }}
						transition={{ type: 'spring' }}
						children={item}
					/>
				)
			}
			)} */}
		</div>
	)
}



// const typingText = ["Read", "the", "latest,", "technology", "news", "and", "interesting."]
const typingText = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed, error? Voluptate, deleniti. Porro nemo aliquam inventore ipsum vitae nobis voluptatibus labore quod dolore id possimus ex dolores odio, deserunt est."
let typingTextTmp = typingText
// let allTextSymbols = typingText.split("")
// console.log(allTextSymbols)
let allTextSymbolsScores = []
// let currentSymbols = []
let tmpWord = ""
let mapResult = new Map()
let stack = ""


const Sentence = () => {
	let [typeMe, setTypeMe] = useState("")
	let [typingFullText, setTypingFullText] = useState("")
	let [currentSymbol, setCurrentSymbol] = useState("")
	let [startCount, setStartCount] = useState(true)
	let [typingStart, setTypingStart] = useState(0)
	let [errorTyping, setErrorTyping] = useState(false)
	let [indexOfWord, setIndexOfWord] = useState(0)
	let [indexOfSymbol, setIndexOfSymbol] = useState(0)
	let [resultArray, setResultArray] = useState([])
	let [finish, setFinish] = useState(false)
	let [animateSymbol, setAnimateSymbol] = useState("")

	let [arr, setArr] = useState(["a"])
	setTimeout(() => {

	}, 1000)

	useEffect(() => {
		// setArr([...arr, currentSymbol])
		let elementDiv = document.createElement("div")
		elementDiv.setAttribute("class", "animate")
		const newContent = document.createTextNode(currentSymbol);

		// add the text node to the newly created div
		elementDiv.appendChild(newContent);

		// add the newly created element and its content into the DOM
		const currentDiv = document.getElementById("root");
		document.body.insertBefore(elementDiv, currentDiv);
	}, [typeMe])


	let [isVisible, setIsVisible] = useState(true)
	setTimeout(() => { setIsVisible(false) }, 1000)

	const result = () => {

		if (allTextSymbolsScores.length !== 0) {
			allTextSymbolsScores.reduce((prev, current) => {
				if (current[0] === " ") {
					current[0] = "⇒"
				}
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


	// finish
	useEffect(() => {

		setTypeMe("")
	}, [finish])


	// animate
	useEffect(() => {

		// "#symbol-5"

	}, [typeMe])

	// typingText and highlightCurrentWord 
	useEffect(() => {

		let typingTextWords = typingText.split(" ")

		let indexEachSymbol = 0

		let hightLightsWord = typingTextWords.map((word, index) => {


			// if (index === indexOfWord) {
			return (
				<span key={index}> <span className={errorTyping ? s.error : s.active}>
					{word.split("").map((symbol) => {
						return (
							<div id={"id" + (indexEachSymbol++)} className={s.symbol}>
								{symbol}


								{/* animation symbols */}

								{/* {(indexEachSymbol - 1) < indexOfSymbol &&
									<div className={s.animate}>
										{symbol}
									</div>}
								{(indexEachSymbol - 1) === indexOfSymbol &&
									<div className={s.animate}>
										{(currentSymbol)}
									</div>
								} */}

								{/* animation symbols */}



							</div>)
					})
					}
				</span>
					<div id={"id" + (indexEachSymbol++)} className={s.symbol}> </div>
				</span>)
			// } else {
			// 	return (
			// 		<span key={index} >
			// 			<span>{
			// 				word.split("").map((symbol) => {
			// 					return (<div id={indexEachSymbol++} className={s.symbol}>
			// 						{symbol}
			// 					</div>)
			// 				})
			// 			}
			// 			</span>
			// 			<div id={indexEachSymbol++} className={s.symbol}> </div>
			// 		</span>)
			// }

		})
		setTypingFullText(hightLightsWord)

	}, [typeMe, errorTyping])






	const baseFunc = () => {
		if (tmpWord.length < typeMe.length) {
			tmpWord = typeMe

			allTextSymbolsScores.push([currentSymbol, Date.now()])
			// console.log(allTextSymbolsScores)
			result()

			checkFinish()
		}
	}

	const checkFinish = () => {
		if (typingText.length - 1 === indexOfSymbol) {
			setFinish(true)
		} else {
			setIndexOfSymbol(indexOfSymbol + 1)
			// console.log(indexOfSymbol)
		}
	}

	// check entered text
	useEffect(() => {
		if (typingTextTmp.startsWith(typeMe) && typeMe !== "") {
			baseFunc()
			if (currentSymbol === " ") {
				typingTextTmp = typingTextTmp.slice(typeMe.length)
				setTypeMe("")
				tmpWord = ""
				setIndexOfWord(indexOfWord + 1)
			}
			setErrorTyping(false)
		} else if (typeMe === "") {
			setErrorTyping(false)
		} else {
			setErrorTyping(true)
		}
	}, [typeMe])


	// starting type
	const startType = (e) => {
		if (startCount) {
			setTypingStart(Date.now())
			setStartCount(false)
		}
		setTypeMe(e.target.value)
		setCurrentSymbol(e.nativeEvent.data)

		stack = stack + e.nativeEvent.data


		if (typingTextTmp.startsWith(stack)) {
			console.count(stack, "yes")
		} else {
			console.count(stack, "no")
		}


	}







	return (
		<div className={s.sentense}>

			<MyItem isVisible={isVisible} arr={arr} />

			<StopWatch typingStart={typingStart} finish={finish} />
			<h1 className={s.typingText}>{typingFullText}</h1>
			<div className={s.inputWrapper}><input disabled={finish} className={s.inputTyping} style={errorTyping ? { color: "red" } : { color: "blue" }} type="text" onChange={startType} placeholder="" value={typeMe} /></div>

			<div>{resultArray.map((res, index) => <div className={s.resultBlock} key={index}><span className={s.result}>{res[0]}</span> <span className="result">{`${res[1] / 1000}`} <i className={s.resultSec}>s</i></span></div>)}</div>
		</div>


	)
}

export default Sentence


