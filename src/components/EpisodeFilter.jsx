import React, { useEffect, useRef, useState } from 'react'

const EpisodeFilter = ({ onChangeFilter }) => {
	const [isDropdownActive, setIsDropdownActive] = useState(false)
	const [currentSeason, setCurrentSeason] = useState('1')
	const dropdown = useRef(null)

	useEffect(() => {
		const changeSeason = () => {
			onChangeFilter(`s0${currentSeason}`)
			closeDropdown()
		}

		changeSeason()
	}, [currentSeason])

	const closeDropdown = () => {
		setIsDropdownActive(false)
	}

	const onDocClick = event => {
		if (dropdown.current && !dropdown.current.contains(event.target)) {
			closeDropdown()
		}
	}

	useEffect(() => {
		document.addEventListener('click', onDocClick, true)
		return () => {
			document.removeEventListener('click', onDocClick, true)
		}
	}, [])

	return (
		<section className='episode-filter'>
			<div className={`custom-select ${isDropdownActive && 'active'}`} ref={dropdown}>
				<button className='select-button' onClick={() => setIsDropdownActive(!isDropdownActive)}>
					<span className='selected-value'>Season {currentSeason}</span>
					<span className='arrow'></span>
				</button>
				<ul className='select-dropdown clean-list' role='listbox'>
					<li onClick={() => setCurrentSeason('1')}> Season 1</li>
					<li onClick={() => setCurrentSeason('2')}>Season 2</li>
					<li onClick={() => setCurrentSeason('3')}>Season 3</li>
					<li onClick={() => setCurrentSeason('4')}>Season 4</li>
					<li onClick={() => setCurrentSeason('5')}>Season 5</li>
				</ul>
			</div>
		</section>
	)
}

export default EpisodeFilter
