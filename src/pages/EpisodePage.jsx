import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { setEpisode, setCharacters } from '../store/rick-morty.action'
import { useDispatch, useSelector } from 'react-redux'
import AllLists from '../components/AllLists'

const EpisodePage = () => {
	const params = useParams()
	const dispatch = useDispatch()
	const episode = useSelector(storeState => storeState.currEpisode)
	const characters = useSelector(storeState => storeState.characters)

	useEffect(() => {
		dispatch(setEpisode(params.id))
		dispatch(setCharacters())
	}, [params.id])

	if (!episode) {
		console.log('hi!', episode)
		return <div></div>
	}

	return (
		<section className='episode-page'>
			<h2>{episode.name}</h2>
			<h3>{episode.air_date}</h3>
			<AllLists data={characters} dataType='characters' />
		</section>
	)
}

export default EpisodePage
