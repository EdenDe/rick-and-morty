import React from 'react'

const EpisodePreview = ({ episode }) => {
	return (
		<section className='episode-preview'>
			<h3> {episode.name} </h3>
			<p> Aring Date: {episode.air_date} </p>
		</section>
	)
}

export default EpisodePreview
