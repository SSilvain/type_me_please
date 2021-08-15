
let result = "Wait..."
let speed = 0

const Word = ({ setErrorTyping, typingStart, setTypingStart, typeMe, typingText, setStartCount, setTypeMe }) => {

	const typingTime = (typingStart, typingEnd) => {


		return (typingEnd - typingStart) / 1000
	}



	if (typeMe === typingText) {
		result = typingTime(typingStart, Date.now())
		speed = `${Math.ceil(typingText.length / result * 60)} word/min`
		setTypingStart(0)
		setStartCount(true)
		setTypeMe("")
	} else {
		if (typingText.startsWith(typeMe)) {
			setErrorTyping(false)
		} else {
			setErrorTyping(true)
		}
	}


	return (
		<>
			<h1>{`${typingText.length} symbols / ${result} sec`}</h1>
			<h2>{speed}</h2>
		</>
	)
}

export default Word