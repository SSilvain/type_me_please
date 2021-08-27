import { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { currentSymbol, indexOfSymbol, typeMe, typingStart } from "../InputText/inputTextSlice";
import { isAnimate } from "../TextBlock/textBlockSlice";

const getPixelRatio = context => {
	var backingStore =
		context.backingStorePixelRatio ||
		context.webkitBackingStorePixelRatio ||
		context.mozBackingStorePixelRatio ||
		context.msBackingStorePixelRatio ||
		context.oBackingStorePixelRatio ||
		context.backingStorePixelRatio ||
		1;

	return (window.devicePixelRatio || 1) / backingStore;
};


const TestCanvas = () => {
	let ref = useRef()
	
	const typeMeCanvas = useSelector(typeMe)
	const currentSymbolCanvas = useSelector(currentSymbol)
	const indexOfSymbolCanvas = useSelector(indexOfSymbol)
	const isAnimateCanvas = useSelector(isAnimate)
	const typingStartCanvas = useSelector(typingStart)

	const [goAnimate, setGoAnimate] = useState(0)
	const [yAnimate, setYAnimate] = useState(-10)

	// useEffect(() => {

		
		
		
		

	// 	function wrapText(context, text, x, y, maxWidth, lineHeight) {
	// 		context.clearRect(0, 0, 600, 300)

			

	// 		context.fillText(line, x, y);
	// 		// setYAnimate(yAnimate - 1)
	// 		// yAnimate = yAnimate - 1
	// 	}
		
		

	// 	const wrapWrapText = () => {

	// 		console.count("exec")
	// 		// requestAnimationFrame(wrapWrapText)
	// 		// console.log("index", indexOfSymbolCanvas);
	// 		wrapText(context, text, xWrap, yWrap, maxWidth, lineHeight);

	// 	}
		
		
	// 	wrapWrapText()
	// }, [yAnimate])
	
	// useEffect(() => {
	// 	if (typingStartCanvas) {
			
	// 		setInterval(() => {
	// 			setYAnimate(yAnimate - 10)
	// 			console.log("yAnimate",yAnimate);
				
	// 		}, 1000)

	// 	}

	// }, [isAnimateCanvas])

	
	useEffect(() => {
		let canvas = ref.current;
		let context = canvas.getContext('2d');

		let ratio = getPixelRatio(context);
		let width = getComputedStyle(canvas)
			.getPropertyValue('width')
			.slice(0, -2);
		let height = getComputedStyle(canvas)
			.getPropertyValue('height')
			.slice(0, -2);

		canvas.width = width * ratio;
		canvas.height = height * ratio;
		canvas.style.width = `${width}px`;
		canvas.style.height = `${height}px`;



		let requestId,
			i = 0;
		
		
		//-------------------------------------
		var maxWidth = canvas.width;
		var lineHeight = 25;
		var yAnimate = -13;
		var text = 'The two babies were already whimpering for food, but became silent when Moon-Watcher snarled at them. One of the mothers, defending the infant she could not properly feed, gave him an angry growl in return; he lacked the energy even to cuff her for her presumption.';

		context.font = '18px Arial';
		context.fillStyle = '#333';
		//-------------------------------------
		
		
		const render = () => {
			context.clearRect(0, 0, canvas.width, canvas.height);

			var y = 0;
			var x = 10;
			
			
			
			// +++++++++++++++++++++++++++++++++
			var words = text.split(' ');
			var line = '';

			for (var n = 0; n < words.length; n++) {
				var testLine = line + words[n] + ' ';
				var metrics = context.measureText(testLine);
				var testWidth = metrics.width;

				if (testWidth > maxWidth && n > 0) {

					line = words[n] + ' ';
					y += lineHeight;
				}
				else {
					line = testLine;
				}
				context.fillText(line, x, y + yAnimate);
			}
			

			console.count("fill")
			
			// +++++++++++++++++++++++++++++++++
			
			
			
			
			
			yAnimate += 1;
			requestId = requestAnimationFrame(render);
		};
		render();

		return () => {
			cancelAnimationFrame(requestId);
		};
	}, []);




	return (
		<div style={{display: "flex", justifyContent: "center"}}>
			{/* <h2>Canvas</h2> */}

			<canvas ref={ref} style={{ width: "500px", heigth: "300px", border: "1px solid #000"}}></canvas>

		</div>
	)
}
export default TestCanvas

