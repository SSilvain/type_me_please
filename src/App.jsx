import { useState } from 'react'
import './App.css'
import ResultOut from './Components/ResultOut/ResultOut'



function App() {
	const [typeMe, setTypeMe] = useState("")
	const [startCount, setStartCount] = useState(true)
	let [typingStart, setTypingStart] = useState(0)
	const typingText = "Lorem ipsum dolor"



	const speedType = (e) => {
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
			<p>{typingText}</p>
			<ResultOut typingText={typingText} typingStart={typingStart} setTypingStart={setTypingStart} typeMe={typeMe} typingText={typingText} setStartCount={setStartCount} setTypeMe={setTypeMe} />
			<p>{typeMe || "typing"}</p>
			<input type="text" onChange={speedType} placeholder="type_me_please" value={typeMe} />
		</div >
	)
}

export default App;
