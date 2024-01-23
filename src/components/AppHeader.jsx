import React from 'react'
import rick from '../assets/img/Rick.png'
import morty from '../assets/img/Morty.png'
import { Link } from 'react-router-dom'

const AppHeader = () => {
	const Logo = () => {
		return (
			<h1>
				<span>
					R
					<img src={rick} alt='i' />
					ck
				</span>
				<span>and</span>
				<span>
					M
					<img src={morty} alt='o' />
					rty
				</span>
			</h1>
		)
	}

	return (
		<section className='app-header flex justify-center align-center'>
			<Link to='/'>
				<Logo />
			</Link>
		</section>
	)
}

export default AppHeader
