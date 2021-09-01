import React from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';

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

const Circle = () => {
	let ref = useRef();

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
		// canvas.width = 500
		// canvas.height = 500
		// // canvas.style.width = `${width}px`;
		// // canvas.style.height = `${height}px`;

		//-------------------------------------
		var maxWidth = canvas.width;
		var lineHeight = 25;
		var yAnimate = -13;
		var text = 'The two babies were already whimpering for food, but became silent when Moon-Watcher snarled at them. One of the mothers, defending the infant she could not properly feed, gave him an angry growl in return; he lacked the energy even to cuff her for her presumption. The two babies were already whimpering for food, but became silent when Moon-Watcher snarled at them. One of the mothers, defending the infant she could not properly feed, gave him an angry growl in return; he lacked the energy even to cuff her for her presumption. The two babies were already whimpering for food, but became silent when Moon-Watcher snarled at them. One of the mothers, defending the infant she could not properly feed, gave him an angry growl in return; he lacked the energy even to cuff her for her presumption.';

		context.font = '20pt "Courier Prime"';
		// context.fillStyle = '#3f9';
		//-------------------------------------

		let requestId,
			i = 0;

		var y = 0 + 30;
		var x = 0;


		// +++++++++++++++++++++++++++++++++
		var words = text.split(' ');
		var lines = [];
		var line = '';

		for (var n = 0; n < words.length; n++) {
			var testLine = line + words[n] + ' ';
			var metrics = context.measureText(testLine);
			console.log(metrics);

			var testWidth = metrics.width;

			if (testWidth > maxWidth && n > 0) {
				
				line = line.split('');
				// console.log('line', line);
				lines.push(line);

				line = words[n] + ' ';

			} else {
				line = testLine;
			}
		}

		line = line.split('');
		lines.push(line)
		// context.fillText(line, x, y + yAnimate);
		// +++++++++++++++++++++++++++++++++


		// const symbols = lines.map((line, index) => {
		// 	return (
		// 		line.split('')
		// 	)
		// })





		const render = () => {
			if (yAnimate > -700) {
				context.clearRect(0, 0, canvas.width, canvas.height);

				for (i = 0; i < lines.length; i++) {
					// context.shadowColor = 0;
					// context.shadowBlur = 0;
					// context.shadowOffsetX = 0;
					// context.shadowOffsetY = 0;
					context.fillStyle = 'red';
					// debugger
					console.log(`lines ${i}`,lines[i]);
					
					const lineRender = lines[i].join('')
					context.fillText(lineRender, x, y);

					// context.fillStyle = 'blue';
					// context.shadowColor = '#999';
					// context.shadowBlur = 3;
					// context.shadowOffsetX = 2;
					// context.shadowOffsetY = 2;
					// context.strokeText(lines[i], x, y + yAnimate + 10);

					y = y + 30
				}
				y = 30
			}
			// yAnimate = yAnimate - 1
			requestId = requestAnimationFrame(render);
		};
		render();

		return () => {
			cancelAnimationFrame(requestId);
		};
	}, []);

	return (
		<canvas
			ref={ref}
			style={{ width: '500px', height: '500px' }}
		/>
	);
};

export default Circle;


