
import './App.scss'
import InputText from './Components/InputText/InputText'
import { finish, typingStart } from './Components/InputText/inputTextSlice'
import Resultblock from './Components/ResultBlock/ResultBlock'
import StopWatch from './Components/StopWatch/StopWatch'
import TextBlockAnimate from './Components/TextBlock/TextBlockAnimate'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Switch from '@material-ui/core/Switch'
import { useSelector, useDispatch } from 'react-redux'
import {
	isAnimate, setIsAnimate
} from './Components/TextBlock/textBlockSlice'
import TestCanvas from './Components/TestCanvas/TestCanvas'
import Circle from './Components/Circle/Circle'





function App() {

	const isAnimateApp = useSelector(isAnimate)
	const typingStartApp = useSelector(typingStart)
	const finishApp = useSelector(finish)
	const dispatch = useDispatch()
	const setIsAnimateTextBlock = () => {
		dispatch(setIsAnimate())
	}

	return (
		<div>
			<h1>Type me, please!</h1>
			{/* <TestCanvas x={10} y={10}/> */}
			<Circle/>
			<FormControlLabel
				control={<Switch checked={isAnimateApp} onChange={setIsAnimateTextBlock}
					// disabled={startCountTextBlock}
					color="primary"
					name="checkedB" />}
				label="Animation"
			/>
			<InputText />
			<StopWatch typingStart={typingStartApp} finish={finishApp} />
			<TextBlockAnimate />
			<Resultblock />

		</div >
	)
}

export default App
