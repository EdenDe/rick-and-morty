import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
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
		<section className='episode-page'>
			<h2>{episode.name}</h2>
			<h3>{episode.air_date}</h3>
			<AllLists data={episode.characters} dataType='characters' />
		</section>
	)
}

export default EpisodePage
