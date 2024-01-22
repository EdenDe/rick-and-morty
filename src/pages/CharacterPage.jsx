import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { setCharacter } from '../store/rick-morty.action'
import { useDispatch, useSelector } from 'react-redux'

const CharacterPage = () => {
	const params = useParams()
	const character = useSelector(storeState => storeState.currCharacter)
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(setCharacter(params.id))
	}, [params.id])

	console.log(character.episodeList)

	return (
		<div>
			{character.name}
			{character.status}
			{character.species}
			{character.episodeList?.map(episodeNum => {
				return <p> {episodeNum} </p>
			})}
		</div>
	)
}

export default CharacterPage
