import MainPage from './pages/MainPage'
import './assets/scss/global.scss'
import { Routes, Route, HashRouter as Router } from 'react-router-dom'
import EpisodePage from './pages/EpisodePage'

function App() {
	return (
		<Router>
			<section className='main-layout'>
				{/* <AppHeader /> */}

				<main className='main-container-layout'>
					<Routes>
						<Route path='/episode-page/:id' element={<EpisodePage />} />
						<Route path='/' element={<MainPage />} />
					</Routes>
				</main>
			</section>
		</Router>
	)
}

export default App
