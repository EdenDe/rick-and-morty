import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadEpisodes, setFilterBy } from '../store/rick-morty.action'
import AllLists from '../components/AllLists'
import EpisodeFilter from '../components/EpisodeFilter'

const MainPage = () => {
	const dispatch = useDispatch()
	const episodes = useSelector(storeState => storeState.episodes)
	const filterBy = useSelector(storeState => storeState.filterBy)

	useEffect(() => {
		dispatch(loadEpisodes())
	}, [dispatch])

	const onChangeFilter = filterBy => {
		dispatch(setFilterBy(filterBy))
		dispatch(loadEpisodes())
	}

	return (
		<section className='main-page full-height'>
			<EpisodeFilter onChangeFilter={onChangeFilter} filter={filterBy} />
			<AllLists data={episodes} dataType='episode' />
		</section>
	)
}

export default MainPage
