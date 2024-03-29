import React from 'react'
import EpisodePreview from './EpisodePreview'
import CharacterPreview from './CharacterPreview'

const AllLists = ({ data, dataType }) => {
	return (
		<section className='all-list custom-scrollbar'>
			{data?.map(data => {
				if (dataType === 'episode') return <EpisodePreview episode={data} key={data.id} />
				return <CharacterPreview character={data} key={data.id} />
			})}
		</section>
	)
}

export default AllLists
