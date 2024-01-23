import MainPage from './pages/MainPage'
import './assets/scss/global.scss'
import { Routes, Route, HashRouter as Router } from 'react-router-dom'
import EpisodePage from './pages/EpisodePage'
import CharacterPage from './pages/CharacterPage'
import AppHeader from './components/AppHeader'
import Footer from './components/Footer'

function App() {
	return (
		<Router>
			<section className='main-layout'>
				<AppHeader />

				<main className='route-view'>
					<Routes>
						<Route path='/character/:id' element={<CharacterPage />} />
						<Route path='/episode/:id' element={<EpisodePage />} />
						<Route path='/' element={<MainPage />} />
					</Routes>
				</main>

				<Footer />
			</section>
		</Router>
	)
}

export default App
