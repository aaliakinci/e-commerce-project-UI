
import './App.css';
import Home from './Components/Dasboards/Home';
import Footer from './Components/Footer/Footer';
import Nav from './Components/Navbar/Nav';
import {Switch,Route} from 'react-router-dom';

function App() {
	return (
		<div>
				<Nav/>
				<Switch>
					<Route path='/' exact component={Home}/>
				</Switch>
				
				<Footer/>

		</div>
	);
}

export default App;
