import './App.css'
import InputText from './Components/InputText/InputText'
import Resultblock from './Components/ResultBlock/ResultBlock'
import Sentence from './Components/Sentence/Sentence'
import TextBlock from './Components/TextBlock/TextBlock'
import TextBlockAnimate from './Components/TextBlock/TextBlockAnimate'



function App() {

	return (
		<div>
			<h1>Type me, please!</h1>
			{/* <TextBlock /> */}
			<TextBlockAnimate/>
			<InputText />
			<Sentence />
			<Resultblock/>

		</div >
	)
}

export default App
