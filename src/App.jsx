import { useState } from 'react'
import './App.css'

function App() {
	const [typeMe, setTypeMe] = useState("hello")

	const speedType = (e) => {
		let start = Date.now()
		setTypeMe(e.target.value)
		console.log(e.target.value)
		let end = Date.now()
	}
	return (
		<div>
			<h1>Type me, please!</h1>
			<p>{typeMe}</p>
			<input type="text" onChange={speedType} placeholder="type_me_please" value={typeMe} />
		</div>
	)
}

export default App;
