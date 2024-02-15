import { useEffect, useState } from 'react';
import { useHttp } from "./hooks/http.hook";
import './App.css';
import Layer from './components/Layer/Layer';

function App() {

	const { request } = useHttp();

  	const [services, setServices] = useState([]);
	const [isLoaded, setIsLoaded] = useState(false)

	useEffect((() => {
		request("http://localhost:3001/services")
			.then(res => setServices(res))
			.finally(setIsLoaded(true))
	}), [])

	if (services && Array.isArray(services)) {
		const elements = services.map((service, i) => {
			if (!service.head) {
				return <Layer key={i} service={service} services={services}/>
			} 	
		})

		return (
			<div className="App">
				<ul className='list'>
					{isLoaded ? elements : <div>Loading...</div>}
				</ul>		
			</div>
		);
	} else {
		return (
			<div>Неверный тип данных или данные не существоют</div>
		)
	}	
}

export default App;
