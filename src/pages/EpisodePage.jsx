import React, { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { setEpisode } from '../store/rick-morty.action'
import { useDispatch, useSelector } from 'react-redux'
import AllLists from '../components/AllLists'

const EpisodePage = () => {
	const params = useParams()
	const dispatch = useDispatch()
	const episode = useSelector(storeState => storeState.currEpisode)

	useEffect(() => {
		dispatch(setEpisode(params.id))
	}, [params.id])

	return (
		<section className='episode-page custom-scrollbar'>
			<div className='episode-details flex align-center justify-between'>
				<div>
					<h2>{episode.name}</h2>
					<p>{episode.air_date}</p>
				</div>

				<Link to={'/'} className='btn-back'>
					{'<'}
				</Link>
			</div>

			<AllLists data={episode.charactersList} dataType='characters' />
		</section>
	)
}

export default EpisodePage
