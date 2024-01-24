import rick from '../assets/img/Rick.png'
import morty from '../assets/img/Morty.png'

const Logo = () => {
	return (
		<h1 className='logo'>
			<span>
				R
				<img src={rick} alt='i' />
				ck
			</span>
			<span>and</span>
			<span>
				M
				<img src={morty} alt='o' />
				rty
			</span>
		</h1>
	)
}

export default Logo
