import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
	isAnimate,
	splitByWords, words, setIsAnimate
} from './textBlockSlice';
import s from "./TextBlock.module.scss"
import { errorTyping, finish, indexOfSymbol, indexOfWord } from '../InputText/inputTextSlice';
import Switch from '@material-ui/core/Switch';

const TextBlockAnimate = () => {

	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(splitByWords())
	}, [])
	// currentTextForTyping and highlightCurrentWord 
	// useEffect(() => {
	const setIsAnimateTextBlock = () => {
		dispatch(setIsAnimate())
	}

	const typingTextWords = useSelector(words)
	const indexOfWordTextBlock = useSelector(indexOfWord)
	const errorTypingTextBlock = useSelector(errorTyping)
	const indexOfSymbolTextBlock = useSelector(indexOfSymbol)
	const finishTextBlock = useSelector(finish)
	const isAnimateTextBlock = useSelector(isAnimate)

	let indexEachSymbol = 0

	return (
		<div className={s.sentense}>
			<Switch
				checked={isAnimateTextBlock}
				onChange={setIsAnimateTextBlock}
				color="primary"
				name="checkedB"
				inputProps={{ 'aria-label': 'primary checkbox' }}
			/>
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
										isAnimateTextBlock && <div
											// className={errorTypingTextBlock ? `${s.error} ${s.symbol}` : `${s.symbol}`}
											className={indexOfSymbolTextBlock >= (indexEachSymbol) ? `${s.elementAnimation}` : `${s.symbolAbsolute}`}
										>
											{symbol}

										</div>}

									{/*  render text */}
									<div
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