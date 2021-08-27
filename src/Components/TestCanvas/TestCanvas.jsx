import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { currentSymbol, indexOfSymbol, typeMe, typingStart } from "../InputText/inputTextSlice";
import { isAnimate } from "../TextBlock/textBlockSlice";

const TestCanvas = () => {
	const typeMeCanvas = useSelector(typeMe)
	const currentSymbolCanvas = useSelector(currentSymbol)
	const indexOfSymbolCanvas = useSelector(indexOfSymbol)
	const isAnimateCanvas = useSelector(isAnimate)
	const typingStartCanvas = useSelector(typingStart)

	const [goAnimate, setGoAnimate] = useState(0)
	// const [yAnimate, setYAnimate] = useState(-10)
	// var canvas
	// var context
	// canvas = document.getElementById('myCanvas');
	// context = canvas.getContext('2d');

	// canvas.width = 500
	// canvas.height = 200


	// let topPosition = 10

	// const tick = () => {
	// 	// let topPosition = 10
	// 	requestAnimationFrame(tick)
	// 	context.clearRect(0, 0, 500, 200)

	// 	context.font = '4pt Arial';
	// 	context.fillText(currentSymbolCanvas, 10, topPosition);
	// 	context.fillText("The two babies were already whimpering for food, but became silent when Moon-Watcher snarled at them. One of the mothers, defending the infant she could not properly feed, gave him an angry growl in return; he lacked the energy even to cuff her for her presumption.", 100, topPosition);
	// 	topPosition++
	// }


	// useEffect(() => {
	// 	// requestAnimationFrame(tick)
	// }, [])
	useEffect(() => {
		if (typingStartCanvas) {
			


			console.count("useEffect")
		}

	}, [])


	function wrapText(context, text, x, y, maxWidth, lineHeight) {
		context.clearRect(0, 0, 600, 300)

		var words = text.split(' ');
		words = words.join("");
		words = words.split('');
		var line = '';
		var xPosition = 0

		for (var n = 0; n < words.length; n++) {
			var testLine = line + words[n] + ' ';
			var metrics = context.measureText(testLine);
			var testWidth = metrics.width;


			var metricsSymbol = context.measureText(words[n]);
			var testWidthSymbol = metricsSymbol.width;

			if (words[n] === currentSymbolCanvas && indexOfSymbolCanvas === n + 1) {
				console.log("n", n);

				context.fillText(words[n], xPosition + x, y + yAnimate);
			} else {
				context.fillText(words[n], xPosition + x, y);
				// console.log("n", n);
			}
			xPosition = xPosition + testWidthSymbol;
			if (testWidth > maxWidth && n > 0) {

				// context.fillText(line, xWrap, y);
				line = words[n] + ' ';
				y += lineHeight;
				xPosition = 0;
			}
			else {
				// context.fillText(words[n], xWrap, y);
				line = testLine;
			}
		}

		context.fillText(line, x, y);
		// setYAnimate(yAnimate - 1)
		yAnimate = yAnimate - 1
	}

	var canvas = document.getElementById('myCanvas');
	canvas.width = 600
	canvas.height = 300
	var context = canvas.getContext('2d');
	var maxWidth = 500;
	var lineHeight = 25;
	var xWrap = 100;
	var yAnimate = -13;
	var yWrap = 100;
	var text = 'The two babies were already whimpering for food, but became silent when Moon-Watcher snarled at them. One of the mothers, defending the infant she could not properly feed, gave him an angry growl in return; he lacked the energy even to cuff her for her presumption.';

	context.font = '18px Arial';
	context.fillStyle = '#333';

	let textArr = text.split()

	const wrapWrapText = () => {

		console.count("exec")
		// requestAnimationFrame(wrapWrapText)
		// console.log("index", indexOfSymbolCanvas);
		wrapText(context, text, xWrap, yWrap, maxWidth, lineHeight);
		
	}
	// setInterval(wrapWrapText, 200)
	// requestAnimationFrame(wrapWrapText)

	return (
		<div>
			<h2>Canvas</h2>


		</div>
	)
}
export default TestCanvas

