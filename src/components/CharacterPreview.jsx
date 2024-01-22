import React from 'react'
import { Link } from 'react-router-dom'

const CharacterPreview = ({ character }) => {
	return (
		<div>
			<Link to={`/character-page/${character.id}`}>
				<img src={character.image} alt={character.name} />
			</Link>
		</div>
	)
}

export default CharacterPreview
