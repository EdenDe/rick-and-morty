import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const CharacterPreview = ({ character }) => {
	const location = useLocation()

	return (
		<section className='character-preview'>
			<Link to={`${location.pathname}/character/${character.id}`}>
				<div className='img-wrapper' data-name={character.name}>
					<img src={character.image} alt={character.name} />
				</div>
			</Link>
		</section>
	)
}

export default CharacterPreview
