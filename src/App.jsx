
import './App.scss'
import InputText from './Components/InputText/InputText'
import { finish, indexOfSymbol, isStartCount, typeMe, typingStart } from './Components/InputText/inputTextSlice'
import Resultblock from './Components/ResultBlock/ResultBlock'
import StopWatch from './Components/StopWatch/StopWatch'
import TextBlockAnimate from './Components/TextBlock/TextBlockAnimate'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Switch from '@material-ui/core/Switch'
import { useSelector, useDispatch } from 'react-redux'
import {
	isAnimate, setIsAnimate
} from './Components/TextBlock/textBlockSlice'
import { useEffect } from 'react'





function App() {

	const isAnimateApp = useSelector(isAnimate)
	const typingStartApp = useSelector(typingStart)
	const finishApp = useSelector(finish)
	const startCountApp = useSelector(isStartCount)
	const indexOfSymbolApp = useSelector(indexOfSymbol)
	const typeMeApp = useSelector(typeMe)
	const dispatch = useDispatch()
	const setIsAnimateTextBlock = () => {
		dispatch(setIsAnimate())
	}
	
	// animation by vanilla js	
	// useEffect(() => {
	// 	if (isAnimateApp && !startCountApp) {

	// 		let tmpSymbol = document.getElementById(`id${indexOfSymbolApp-1}`)

	// 		tmpSymbol.classList.add("elementAnimation")
	// 	}
	// }, [typeMeApp])

	return (
		<div>
			<h1>Type me, please!</h1>
			<FormControlLabel
				control={<Switch checked={isAnimateApp} onChange={setIsAnimateTextBlock}
					// disabled={startCountTextBlock}
					color="primary"
					name="checkedB" />}
				label="Animation"
			/>
			{/* <TextBlock /> */}
			<InputText />
			<StopWatch typingStart={typingStartApp} finish={finishApp} />
			<TextBlockAnimate />
			<Resultblock />

		</div >
	)
}

export default App
