import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
	splitByWords, words,
} from './textBlockSlice';
import s from "./TextBlock.module.scss"
import { indexOfWord } from '../InputText/inputTextSlice';

const TextBlock = () => {

	const dispatch = useDispatch()

	useEffect(() => {


		dispatch(splitByWords())
	}, [])
	// currentTextForTyping and highlightCurrentWord 
	// useEffect(() => {


	let typingTextWords = useSelector(words)
	const indexOfWordTextBlock = useSelector(indexOfWord)

	let indexEachSymbol = 0

	return (
		<>
			{typingTextWords.map((word, index) => <span key={index} className={index === indexOfWordTextBlock ? `${s.active} ${s.symbols}` : `${s.symbols}`}> <span >
				{word.split("").map((symbol) => {
					return (
						<div
							id={"id" + (indexEachSymbol++)}
							className={/*errorTyping*/ false ? `${s.error} ${s.symbol}` : `${s.symbol}`}
						>
							{symbol}

						</div>)
				})
				}
			</span>
				<div id={"id" + (indexEachSymbol++)} className={s.symbol}> </div>
			</span>
			)}
		</>
	)
}

export default TextBlock