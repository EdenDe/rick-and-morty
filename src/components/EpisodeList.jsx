import React from 'react'
import EpisodePreview from './EpisodePreview'

const EpisodeList = ({ episodes }) => {
	return (
		<section className='episode-list'>
			{episodes?.map(episode => {
				return <EpisodePreview episode={episode} key={episode.id} />
			})}
		</section>
	)
}

export default EpisodeList
