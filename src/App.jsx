
import './App.css'
import InputText from './Components/InputText/InputText'
import { finish, typingStart } from './Components/InputText/inputTextSlice'
import Resultblock from './Components/ResultBlock/ResultBlock'
import StopWatch from './Components/StopWatch/StopWatch'
// import TextBlock from './Components/TextBlock/TextBlock'
import TextBlockAnimate from './Components/TextBlock/TextBlockAnimate'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import { useSelector, useDispatch } from 'react-redux';
import {
	isAnimate,setIsAnimate
} from './Components/TextBlock/textBlockSlice';



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
			<FormControlLabel
				control={<Switch checked={isAnimateApp} onChange={setIsAnimateTextBlock}
					// disabled={startCountTextBlock}
					color="primary"
					name="checkedB" />}
				label="Animation"
			/>
			{/* <TextBlock /> */}
			<TextBlockAnimate/>
			<InputText />
			<StopWatch typingStart={typingStartApp} finish={finishApp} />
			<Resultblock/>

		</div >
	)
}

export default App
