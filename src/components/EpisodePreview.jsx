import React from 'react'
import { Link } from 'react-router-dom'

const EpisodePreview = ({ episode }) => {
	return (
		<section className='episode-preview'>
			<Link to={`/episode-page/${episode.id}`}> {episode.name} </Link>
			<p> Aring Date: {episode.air_date} </p>
		</section>
	)
}

export default EpisodePreview
