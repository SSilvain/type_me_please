import { useState } from "react"
let result = "Wait..."
let speed = 0
const ResultOut = ({ typingStart, setTypingStart, typeMe, typingText, setStartCount, setTypeMe }) => {

	// const [result, setResult] = useState(0)
	const typingTime = (typingStart, typingEnd) => {
		// console.log("typingEnd " + typingEnd)
		// console.log("typingStart " + typingStart)


		return (typingEnd - typingStart) / 1000
	}
	if (typeMe === typingText) {
		result = typingTime(typingStart, Date.now())
		speed = typingText.length / result * 60
		setTypingStart(0)
		setStartCount(true)
		setTypeMe("")
	} else {
		if (typingText.startsWith(typeMe)) {

			console.log("правильно")
		} else {
			console.log("wrong")
		}
	}


	return (
		<>
			<h1>{result}</h1>
			<h2>{speed}</h2>
		</>)
}

export default ResultOut