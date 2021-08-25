import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
	isAnimate,
	splitByWords, words, setIsAnimate, indexToggleAnimate, setIndexToggleAnimate
} from './textBlockSlice';
import s from "./TextBlock.module.scss"
import { errorTyping, finish, indexOfSymbol, indexOfWord, isStartCount } from '../InputText/inputTextSlice';

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
								<div id={"idAnimation" + (indexEachSymbol++)} key={"idAnimationSymbol" + indexEachSymbol} className={s.symbolWrapper}>
									{/* animate typing symbol */
										indexEachSymbol > indexToggleAnimateTextBlock
										&&
										indexEachSymbol <= indexOfSymbolTextBlock
										&&
										isAnimateTextBlock
										&& <div
											// className={errorTypingTextBlock ? `${s.error} ${s.symbol}` : `${s.symbol}`}
											className={indexEachSymbol <= indexOfSymbolTextBlock
												?
												`${s.elementAnimation}`
												:
												`${s.symbolAbsolute}`}
										>
											{symbol}

										</div>}

									{/*  render text */}
									{/*indexEachSymbol >= indexOfSymbolTextBlock */ true && <div
										className={
											indexOfSymbolTextBlock >= (indexEachSymbol)
												?
												`${s.transparent}`
												:
												!(indexOfSymbolTextBlock >= (indexEachSymbol)) && !errorTypingTextBlock
													?
													`${s.symbol}`
													:
													`${s.symbol} ${s.error}`

										}
									>
										{symbol}

									</div>}
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