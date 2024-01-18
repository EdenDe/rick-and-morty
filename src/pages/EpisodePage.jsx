import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

const EpisodePage = () => {
	const params = useParams()

	useEffect(() => {}, [params.id])

	return <div></div>
}

export default EpisodePage
