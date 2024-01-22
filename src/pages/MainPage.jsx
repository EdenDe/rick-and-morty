import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadEpisodes, setFilterBy } from '../store/rick-morty.action'
import AllLists from '../components/AllLists'

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
		<section>
			<select onChange={el => onChangeFilter(el.target.value)}>
				<option value='s01'>Season 1</option>
				<option value='s02'>Season 2</option>
				<option value='s03'>Season 3</option>
				<option value='s04'>Season 4</option>
				<option value='s05'>Season 5</option>
			</select>
			<AllLists data={episodes} dataType='episode' />
		</section>
	)
}

export default MainPage
