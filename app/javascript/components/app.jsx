import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './home'

export default function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="*" element={<Home />}></Route>
			</Routes>
		</BrowserRouter>
	)
}

const root = ReactDOM.createRoot(document.getElementById('app'))
root.render(<App />)
