import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
	splitByWords, words,
} from './textBlockSlice';
import s from "./TextBlock.module.scss"
import { errorTyping, indexOfSymbol, indexOfWord } from '../InputText/inputTextSlice';

const TextBlock = () => {

	const dispatch = useDispatch()

	useEffect(() => {


		dispatch(splitByWords())
	}, [])
	// currentTextForTyping and highlightCurrentWord 
	// useEffect(() => {


	let typingTextWords = useSelector(words)
	const indexOfWordTextBlock = useSelector(indexOfWord)
	const errorTypingTextBlock = useSelector(errorTyping)
	const indexOfSymbolTextBlock = useSelector(indexOfSymbol)

	let indexEachSymbol = 0

	return (
		<div className={s.sentense}>
		<h1 className={s.typingText}>
			{typingTextWords.map((word, index) => <span key={index} className={index === indexOfWordTextBlock ? `${s.active} ${s.symbols}` : `${s.symbols}`}> <span >
				{word.split("").map((symbol) => {
					return (
						<div
							id={"id" + (indexEachSymbol++)}
							className={errorTypingTextBlock ? `${s.error} ${s.symbol}` : `${s.symbol}`}
						>
							{symbol}

						</div>)
				})
				}
			</span>
				<div id={"id" + (indexEachSymbol++)} className={s.symbol}> </div>
			</span>
			)}
			</h1>
		</div>
	)
}

export default TextBlock