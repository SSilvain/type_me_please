import { useDispatch, useSelector } from "react-redux"
import { allTextSymbolsScores, finish, typingStart } from "../InputText/inputTextSlice"
import { setResultArray, resultArray, setfinishTime, finishTime } from "./resultBlockSlice"
import s from "./ResultBlock.module.scss"
import { useEffect } from "react"
import { textForTyping } from "../TextBlock/textBlockSlice"

let mapResult = new Map()

const ResultBlock = () => {

	const dispatch = useDispatch()

	const resultArrayBlock = useSelector(resultArray)
	const isFinish = useSelector(finish)
	const startResult = useSelector(typingStart)
	const finishTimeResult = useSelector(finishTime)
	const textForTypingResult = useSelector(textForTyping)


	const allTextSymbolsScoresResult = useSelector(allTextSymbolsScores)
	let tmpArray = JSON.parse(JSON.stringify(allTextSymbolsScoresResult))

	const result = () => {

		if (tmpArray.length > 0) {
			tmpArray.reduce((prev, current) => {
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
		dispatch(setResultArray(resultArrayTmp))

	}



	// execute result

	useEffect(() => {
		if (isFinish) {
			dispatch(setfinishTime(
				{
					startResult,
					finishTimeStamp: (Date.now()),
					textForTypingResultLength: textForTypingResult.length
				}
			))
			result()
		}
	}, [isFinish])


	return (
		<>
			<div>{finishTimeResult} sec.</div>
			<div>
				{resultArrayBlock.map((res, index) => <div
					className={s.resultBlock}
					key={index}>
					<span className={s.result}>
						{res[0]}
					</span>
					<span className="result">{`${res[1] / 1000}`}
						<i className={s.resultSec}>s</i>
					</span>
				</div>)}
			</div>
		</>
	)
}

export default ResultBlock