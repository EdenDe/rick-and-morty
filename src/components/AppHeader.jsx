import React from 'react'

import { Link } from 'react-router-dom'
import Logo from './Logo'

const AppHeader = ({ setTheme }) => {
	const onToggleTheme = () => {
		setTheme(preTheme => (preTheme === 'light' ? 'dark' : 'light'))
	}
	return (
		<section className='app-header full'>
			<Link to='/'>
				<Logo />
			</Link>
			<button className='btn-toggle-theme' onClick={onToggleTheme}></button>
		</section>
	)
}

export default AppHeader
