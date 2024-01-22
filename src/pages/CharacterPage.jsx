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
		<section className='character-page full-height'>
			<div className='character-card flex'>
				<div className='img-wrapper'>
					<img src={character.image} alt={character.name} />
				</div>
				<div className='character-details flex flex-col'>
					<h2>{character.name}</h2>
					<div className='flex align-center'>
						<h5> Status: </h5>
						<span> {character.status}</span>
					</div>
					<div className='flex align-center'>
						<h5> Species: </h5>
						<span> {character.species}</span>
					</div>

					<div>
						<h5> Was seen in episodes: </h5>
						<div className='episode-num-list flex'>
							{character.episodeList?.map((episodeNum, index) => {
								return (
									<span key={episodeNum + index}>
										{episodeNum + (index === character.episodeList.length - 1 ? ' ' : ',')}
									</span>
								)
							})}
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default CharacterPage
