import React from 'react'
import waldo1 from '../assets/images/waldo1.png'
import waldo2 from '../assets/images/waldo2.jpg'
import waldo3 from '../assets/images/waldo3.jpg'
import waldo4 from '../assets/images/waldo4.jpg'

function randomWaldo() {}

export default function Waldo() {
	return (
		<div>
			<div className="container flex justify-end p-1 mt-2">
				<img src={waldo1} alt="waldo1" height={1920} width={1080} />
			</div>
			<div className="container text-right m-2">
				<button
					type="button"
					className="mr-3 border-2 bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded inline-flex items-center"
				>
					<span>Reset</span>
				</button>
				<button
					type="button"
					className="mr-3 border-2 bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded inline-flex items-center"
				>
					<span>Play Again</span>
				</button>
			</div>
		</div>
	)
}
