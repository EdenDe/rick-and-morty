import MainPage from './pages/MainPage'
import './assets/scss/global.scss'
import { Routes, Route, HashRouter as Router } from 'react-router-dom'

function App() {
	return (
		<Router>
			<section className='main-layout'>
				{/* <AppHeader /> */}

				<main className='main-container-layout'>
					<Routes>
						<Route path='/' element={<MainPage />} />
					</Routes>
				</main>

				<footer className='full footer flex auto-center'>
					<section>Copyright 2023 &copy;</section>
				</footer>
			</section>
		</Router>
	)
}

export default App
