import { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
	isAnimate,
	splitByWords, words, setIsAnimate, indexToggleAnimate, setIndexToggleAnimate
} from './textBlockSlice';
import s from "./TextBlock.module.scss"
import { errorTyping, finish, indexOfSymbol, indexOfWord, isStartCount } from '../InputText/inputTextSlice';
import { useState } from 'react';

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



	const arrayWordsRef = useRef([]);
	const arraySymbolsRef = useRef([]);
	
	const coloringWord = (i) => {
		if (errorTypingTextBlock) {

			arrayWordsRef.current[i].className = s.errorActive
		}else{
		arrayWordsRef.current[i - 1].className = s.symbols
		arrayWordsRef.current[i].className = s.active}
	}
	const arraySymbolAnimate = (i) => {
		arraySymbolsRef.current[i].className = s.elementAnimation
	}

	useEffect(() => {
		if (startCountTextBlock) {
			coloringWord(indexOfWordTextBlock)
		}
	}, [indexOfWordTextBlock, errorTypingTextBlock])
	
	useEffect(() => {
		if (startCountTextBlock) {
			arraySymbolAnimate(indexOfSymbolTextBlock - 1)
		}
	}, [indexOfSymbolTextBlock])





	const [renderText, setRenderText] = useState([])

	useEffect(() => {
		if (isAnimateTextBlock) {
			let indexEachSymbol = 0
			const renderTextTmp = typingTextWords.map((word, index) => <div
				ref={ref => arrayWordsRef.current.push(ref)}
				key={"index" + index}
				className={s.symbols}
			>
				{word.split("").map((symbol) => {
					return (
						<div key={"idAnimationSymbol" + (indexEachSymbol++)} className={s.symbolWrapper}>
							<div
								id={`id${indexEachSymbol}`}
								ref={ref => arraySymbolsRef.current.push(ref)}
								className={s.symbolAbsolute}>
								{symbol}
							</div>
							<div className={s.transparent}>
								{symbol}
							</div>
						</div>)
				})}
				&nbsp;
			</div>)
			setRenderText(renderTextTmp)
		}
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