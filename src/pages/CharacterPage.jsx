import React, { useEffect } from 'react'
import { useParams, useNavigate, useLocation } from 'react-router-dom'
import { setCharacter, setEpisode } from '../store/rick-morty.action'
import { useDispatch, useSelector } from 'react-redux'

const CharacterPage = () => {
	const params = useParams()
	const navigate = useNavigate()
	const location = useLocation()
	const dispatch = useDispatch()

	const episode = useSelector(storeState => storeState.currEpisode)
	const character = useSelector(storeState => storeState.currCharacter)

	useEffect(() => {
		if (episode) {
			dispatch(setCharacter(params.id))
		} else {
			const episodeId = location.pathname.split('/')[2]
			dispatch(setEpisode(episodeId))
		}
	}, [params.id, episode])

	const onNext = () => {
		navigate(`/episode/${episode.id}/character/${character.nextCharacter.id}`)
	}

	const onPrev = () => {
		navigate(`/episode/${episode.id}/character/${character.prevCharacter.id}`)
	}

	return (
		<section className='character-page full-height'>
			<div className='character-card flex justify-center align-center'>
				<div className='img-wrapper flex justify-center'>
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
					<div className='flex align-center'>
						<h5> Last seen location: </h5>
						<span> {character.location?.name}</span>
					</div>

					<div>
						<h5> Was seen in episodes: </h5>
						<div className='episode-num-list flex'>
							{character.episodeList?.map((episodeNum, index) => {
								return (
									<span
										key={episodeNum + index}
										className={episodeNum == episode.id ? 'currEpisode' : 'yo'}
									>
										{episodeNum + (index === character.episodeList.length - 1 ? ' ' : ',')}
									</span>
								)
							})}
						</div>
					</div>
				</div>
			</div>
			<div className='action-btn-wrapper flex justify-between'>
				<button disabled={!!!character.prevCharacter} onClick={onPrev}>
					PREVIOUS
				</button>
				<button disabled={!!!character.nextCharacter} onClick={onNext}>
					NEXT
				</button>
			</div>
		</section>
	)
}

export default CharacterPage
