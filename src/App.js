import MainPage from './pages/MainPage'
import './assets/scss/global.scss'
import { Routes, Route, HashRouter as Router } from 'react-router-dom'
import EpisodePage from './pages/EpisodePage'
import CharacterPage from './pages/CharacterPage'
import AppHeader from './components/AppHeader'
import AppFooter from './components/AppFooter'
import { useEffect, useState } from 'react'
import { cookieService } from './helpers/cookie.service'

function App() {
	const [theme, setTheme] = useState(cookieService.getCookie('theme'))

	useEffect(() => {}, [])

	return (
		<Router>
			<section className={`main-layout ${theme}-theme`}>
				<AppHeader setTheme={setTheme} />

				<main className='route-view'>
					<Routes>
						<Route path='/episode/:id/character/:id' element={<CharacterPage />} />
						<Route path='/episode/:id' element={<EpisodePage />} />
						<Route path='/' element={<MainPage />} />
					</Routes>
				</main>

				<AppFooter />
			</section>
		</Router>
	)
}

export default App
