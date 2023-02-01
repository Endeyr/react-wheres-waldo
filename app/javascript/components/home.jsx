import React from 'react'
import Waldo from './waldo'

export default function Home() {
	return (
		<div className=" bg-indigo-50">
			<header
				className="bg-white dark:bg-gray-900
				flex justify-between  items-center space-x-4 p-4"
			>
				<div className="text-2xl font-bold text-gray-800 hover:text-gray-700 dark:text-white dark:hover:text-gray-300 lg:text-3xl m-2">
					Where's Waldo?
				</div>
				<div className="m-2">
					<span className="m-2">Timer: 0:00</span>
					<span className="m-2">Score: 0 out of 4</span>
				</div>
			</header>
			<div className="container m-2">
				<div>
					<span>What is your name?</span>
				</div>
				<span className="font-bold">Rules:</span>
				<p className="">Here are the rules to the game</p>
				<button
					type="button"
					className="mr-3 border-2 bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded inline-flex items-center"
				>
					<span className="font-bold">Play!</span>
				</button>
			</div>
			<footer>
				<p className="text-center  py-4 bg-white">
					Create By &copy; Aaron Thompson
				</p>
			</footer>
		</div>
	)
}
