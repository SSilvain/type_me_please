import { useState } from 'react'
import './App.css'
import Sentence from './Components/Sentence/Sentence'
import Word from './Components/Word/Word'



function App() {
	const [typeMe, setTypeMe] = useState("")
	const [startCount, setStartCount] = useState(true)
	let [typingStart, setTypingStart] = useState(0)
	const typingText = ["Read", "the", "latest,", "technology", "news", "and", "interesting."]
	let [errorTyping, setErrorTyping] = useState(false)


	const typingTextWithSpaces = typingText.map((word, index, arr) => {
		if (index < (arr.length - 1)) {
			return word + "_"
		} else {
			return word
		}
	})

	const coloredText = () => {

		return typingTextWithSpaces[0].slice(0, typeMe.length)

	}
	const coloredText2 = () => {

		return typingTextWithSpaces[0].slice(typeMe.length)

	}

	const startType = (e) => {
		if (startCount) {
			setTypingStart(Date.now())
			setStartCount(false)
		}
		setTypeMe(e.target.value)
	}

	return (
		<div>
			<h1>Type me, please!</h1>
			<h1>{typingTextWithSpaces}</h1>
			<span style={errorTyping ? { color: "red" } : { color: "blue" }}>{coloredText()}</span>
			<span style={{ color: "#444" }}>{coloredText2()}</span>
			<p>{typingText}</p>
			<Sentence
				setErrorTyping={setErrorTyping}
				typingText={typingTextWithSpaces[0]}
				typingStart={typingStart}
				setTypingStart={setTypingStart}
				typeMe={typeMe}
				setStartCount={setStartCount}
				setTypeMe={setTypeMe}
			/>
			<p>{typeMe || "typing"}</p>
			<input style={errorTyping ? { color: "red" } : { color: "green" }} type="text" onChange={startType} placeholder="type_me_please" value={typeMe} />
		</div >
	)
}

export default App;
