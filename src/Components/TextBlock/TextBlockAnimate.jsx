import { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
	isAnimate,
	splitByWords, words, setIsAnimate, indexToggleAnimate, setIndexToggleAnimate
} from './textBlockSlice';
import s from "./TextBlock.module.scss"
import { errorTyping, finish, indexOfSymbol, indexOfWord, isStartCount } from '../InputText/inputTextSlice';
import { useState } from 'react';

function AppTest() {
	const inputEl = useRef([]);
	const arrTest = ["q", "w", "r", "a", "s", "f"]
	function handleChange(i) {
		inputEl.current[1].className = "animation"

	}
	useEffect(() => { handleChange(2) }, [])

	return (
		<div>
			{
				arrTest.map((n, i) => (
					<div
						key={i}
						type="text"
						ref={ref => inputEl.current.push(ref)}
						// onClick={() => handleChange(i)}
						style={{ position: 'relative', left: "100px" }}
					>{n}</div>
				))
			}
		</div>
	)
}


const TextBlockAnimate = () => {

	const typingTextWords = useSelector(words)
	const indexOfWordTextBlock = useSelector(indexOfWord)
	const errorTypingTextBlock = useSelector(errorTyping)
	const indexOfSymbolTextBlock = useSelector(indexOfSymbol)
	const finishTextBlock = useSelector(finish)
	const isAnimateTextBlock = useSelector(isAnimate)
	const startCountTextBlock = !(useSelector(isStartCount))
	const indexToggleAnimateTextBlock = useSelector(indexToggleAnimate)
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(splitByWords())
	}, [])

	useEffect(() => {
		if (!isAnimateTextBlock) {
			dispatch(setIndexToggleAnimate(indexOfSymbolTextBlock))
		}
	}, [indexOfSymbolTextBlock])



	const arraySymbolsRef = useRef([]);

	function arraySymbolAnimate(i) {
		arraySymbolsRef.current[i].className = s.elementAnimation
	}

	// useEffect(() => {
	// 	if (startCountTextBlock) {
	// 		arraySymbolAnimate(indexOfSymbolTextBlock - 1)
	// 	}
	// }, [indexOfSymbolTextBlock])




	let indexEachSymbol = 0

	const [renderText, setRenderText] = useState([])
	useEffect(() => {
		const renderTextTmp = typingTextWords.map((word, index) => <span key={"index" + index} className={s.symbols}>
			{word.split("").map((symbol) => {
				return (
					<div key={"idAnimationSymbol" + (indexEachSymbol++)} className={s.symbolWrapper}>
						<div
							id={`id${indexEachSymbol}`}
							// ref={ref => arraySymbolsRef.current.push(ref)}
							className={s.symbolAbsolute}>
							{symbol}
						</div>
						<div className={s.transparent}>
							{symbol}
						</div>
					</div>)
			}
			)
			}
			&nbsp;
		</span>)
		setRenderText(renderTextTmp)
	}, [isAnimateTextBlock])




	return (
		<div className={s.sentense}>

			<h1 className={s.typingText}>
				{renderText}
			</h1>
		</div>
	)
}

export default TextBlockAnimate