import React, { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { setEpisode } from '../store/rick-morty.action'
import { useDispatch, useSelector } from 'react-redux'
import AllLists from '../components/AllLists'

const EpisodePage = () => {
	const params = useParams()
	const dispatch = useDispatch()
	const episode = useSelector(storeState => storeState.currEpisode)
	const navigate = useNavigate()

	useEffect(() => {
		dispatch(setEpisode(params.id))
	}, [params.id])

	const onBack = () => {
		navigate(-1)
	}

	return (
		<section className='episode-page custom-scrollbar'>
			<h2>{episode.name}</h2>
			<div className='flex align-center justify-between'>
				<h3>{episode.air_date}</h3>
				<button className='btn-back' onClick={onBack}>
					{'<'}
				</button>
			</div>

			<AllLists data={episode.characters} dataType='characters' />
		</section>
	)
}

export default EpisodePage
