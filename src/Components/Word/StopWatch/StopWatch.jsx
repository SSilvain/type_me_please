import { useState } from "react"
import s from "./StopWatch.module.scss"

const StopWatch = () => {
	const [time, setTime] = useState(0)
	
	setTimeout(()=>{setTime(time + 1)}, 1000)
	return (
		<>
			<h2 className={s.stopWotchWrapper}>{time}</h2>
		</>
	)
}

export default StopWatch