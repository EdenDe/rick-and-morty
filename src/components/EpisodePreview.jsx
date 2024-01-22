import React from 'react'
import { Link } from 'react-router-dom'

const EpisodePreview = ({ episode }) => {
	return (
		<section className='episode-preview flex flex-col space-between'>
			<Link to={`/episode-page/${episode.id}`}>
				<h2>{episode.name}</h2>
			</Link>
			<p>
				Aring Date:
				<span>{episode.air_date}</span>
			</p>
		</section>
	)
}

export default EpisodePreview
