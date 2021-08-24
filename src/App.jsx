import { useSelector } from 'react-redux'
import './App.css'
import InputText from './Components/InputText/InputText'
import { finish, typingStart } from './Components/InputText/inputTextSlice'
import Resultblock from './Components/ResultBlock/ResultBlock'
import StopWatch from './Components/StopWatch/StopWatch'
import TextBlock from './Components/TextBlock/TextBlock'
import TextBlockAnimate from './Components/TextBlock/TextBlockAnimate'



function App() {

	const typingStartApp = useSelector(typingStart)
	const finishApp = useSelector(finish)
	return (
		<div>
			<h1>Type me, please!</h1>
			{/* <TextBlock /> */}
			<TextBlockAnimate/>
			<InputText />
			<StopWatch typingStart={typingStartApp} finish={finishApp} />
			<Resultblock/>

		</div >
	)
}

export default App
