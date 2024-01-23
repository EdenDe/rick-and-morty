import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { Provider } from 'react-redux'
import { store } from './store/store'
import { Helmet, HelmetProvider } from 'react-helmet-async'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<React.StrictMode>
		<HelmetProvider>
			<Provider store={store}>
				<App>
					<Helmet>
						<title>Rick and Morty</title>
						<link rel='icon' type='image/png' href='../src/assets/img/logo.png' />
					</Helmet>
				</App>
			</Provider>
		</HelmetProvider>
	</React.StrictMode>
)
