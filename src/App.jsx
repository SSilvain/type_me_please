import './App.css'
import InputText from './Components/InputText/InputText'
import Resultblock from './Components/ResultBlock/ResultBlock'
import Sentence from './Components/Sentence/Sentence'
import TextBlock from './Components/TextBlock/TextBlock'



function App() {

	return (
		<div>
			<h1>Type me, please!</h1>
			<TextBlock />
			<InputText />
			<Sentence />
			<Resultblock/>

		</div >
	)
}

export default App
