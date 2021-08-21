import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
	splitByWords, words,
} from './textBlockSlice';
import s from "./TextBlock.module.scss"
import { errorTyping, finish, indexOfSymbol, indexOfWord } from '../InputText/inputTextSlice';

const TextBlockAnimate = () => {

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
	const finishTextBlock = useSelector(finish)

	let indexEachSymbol = 0

	return (
		<div className={s.sentense}>
			<h1 className={s.typingText}>
				{typingTextWords.map((word, index) => <span key={index} className={index === indexOfWordTextBlock && errorTypingTextBlock && !finishTextBlock
					?
					`${s.error} ${s.symbols}`
					: index === indexOfWordTextBlock && !finishTextBlock
						?
						`${s.active} ${s.symbols}`
						:
						`${s.symbols}`}> <span >
						{word.split("").map((symbol) => {
							return (
								<div id={"idAnimation" + (indexEachSymbol++)} className={s.symbolWrapper}>
									{/*(indexEachSymbol) > indexOfSymbolTextBlock*/ true && <div
										// className={errorTypingTextBlock ? `${s.error} ${s.symbol}` : `${s.symbol}`}
										className={indexOfSymbolTextBlock >= (indexEachSymbol) ? `${s.elementAnimation}` : `${s.symbolAbsolute}`}
									>
										{symbol}

									</div>}
									<div
										className={indexOfSymbolTextBlock >= (indexEachSymbol) ? `${s.transparent}` : `${s.symbol}`}
									>
										{symbol}

									</div>
								</div>)
						})
						}

					</span>
					<div id={"id" + (indexEachSymbol++)} className={`${s.symbol} ${s.transparent}`}>&nbsp;</div>
				</span>
				)}
			</h1>
		</div>
	)
}

export default TextBlockAnimate