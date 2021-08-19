import { useState } from "react"
import s from "./StopWatch.module.scss"

const StopWatch = ({ typingStart, finish}) => {
	const [time, setTime] = useState(0)
	if (typingStart && !finish) {
		setTimeout(() => { setTime(time + 1) }, 1000)
	}
	
	return (
		<>
			<h2 className={s.stopWatchWrapper}>{time}</h2>
		</>
	)
}

export default StopWatch