import { useState } from 'react'
import './App.css'
import ResultOut from './Components/ResultOut/ResultOut'



function App() {
	const [typeMe, setTypeMe] = useState("")
	const [startCount, setStartCount] = useState(true)
	let [typingStart, setTypingStart] = useState(0)
	const typingText = "Read the latest technology news and interesting research breakthroughs on SciTechDaily. Discover recent technology news articles on topics such as Nanotechnology, Artificial Intelligence, Biotechnology, Graphene, Green Tech, Battery Tech, Computer Tech, Engineering, and Fuel-cell Tech featuring research out of MIT, Cal Tech, Yale, Georgia Tech, Karlsruhe Tech, Vienna Tech, and Michigan Technological University."
	let [errorTyping, setErrorTyping] = useState(false)

	const coloredText = () => {

		return typingText.slice(0, typeMe.length)

	}
	const coloredText2 = () => {

		return typingText.slice(typeMe.length)

	}

	const startType = (e) => {
		if (startCount) {
			setTypingStart(Date.now())
			console.log("typingStart !!!!!!!! " + typingStart)
			setStartCount(false)
		}
		setTypeMe(e.target.value)
	}
	return (
		<div>
			<h1>Type me, please!</h1>
			<span style={errorTyping ? { color: "red" } : { color: "blue" }}>{coloredText()}</span>
			<span style={{ color: "#444" }}>{coloredText2()}</span>
			<p>{typingText}</p>
			<ResultOut setErrorTyping={setErrorTyping} typingText={typingText} typingStart={typingStart} setTypingStart={setTypingStart} typeMe={typeMe} typingText={typingText} setStartCount={setStartCount} setTypeMe={setTypeMe} />
			<p>{typeMe || "typing"}</p>
			<input style={errorTyping ? { color: "red" } : { color: "green" }} type="text" onChange={startType} placeholder="type_me_please" value={typeMe} />
		</div >
	)
}

export default App;
