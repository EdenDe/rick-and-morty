import React from 'react'
import { Link } from 'react-router-dom'

const CharacterPreview = ({ character }) => {
	return (
		<section className='character-preview'>
			<Link to={`/character/${character.id}`}>
				<div className='img-wrapper' data-name={character.name}>
					<img src={character.image} alt={character.name} />
				</div>
			</Link>
		</section>
	)
}

export default CharacterPreview
