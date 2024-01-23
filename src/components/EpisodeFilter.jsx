import React, { useEffect, useRef, useState } from 'react'

const EpisodeFilter = ({ onChangeFilter, filter }) => {
	const [isDropdownActive, setIsDropdownActive] = useState(false)
	const dropdown = useRef(null)

	const closeDropdown = () => setIsDropdownActive(false)

	const changeSeason = value => {
		onChangeFilter(value)
		closeDropdown()
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
					<span className='selected-value'>Season {filter}</span>
					<span className='arrow'></span>
				</button>
				<ul className='select-dropdown clean-list' role='listbox'>
					<li onClick={() => changeSeason('1')}>Season 1</li>
					<li onClick={() => changeSeason('2')}>Season 2</li>
					<li onClick={() => changeSeason('3')}>Season 3</li>
					<li onClick={() => changeSeason('4')}>Season 4</li>
					<li onClick={() => changeSeason('5')}>Season 5</li>
				</ul>
			</div>
		</section>
	)
}

export default EpisodeFilter
