import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadEpisodes, setFilterBy } from '../store/rick-morty.action'
import AllLists from '../components/AllLists'
import EpisodeFilter from '../components/EpisodeFilter'

const MainPage = () => {
	const dispatch = useDispatch()
	const episodes = useSelector(storeState => storeState.episodes)

	useEffect(() => {
		dispatch(loadEpisodes())
	}, [dispatch])

	const onChangeFilter = filterBy => {
		dispatch(setFilterBy(filterBy))
		dispatch(loadEpisodes())
	}

	return (
		<section className='main-page'>
			<EpisodeFilter onChangeFilter={onChangeFilter} />
			<div className='custom-scrollbar'>
				<AllLists data={episodes} dataType='episode' />
			</div>
		</section>
	)
}

export default MainPage
