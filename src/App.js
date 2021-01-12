
import './App.css';
import Home from './Components/Dasboards/Home';
import Footer from './Components/Footer/Footer';
import Nav from './Components/Navbar/Nav';
import {Switch,Route} from 'react-router-dom';
import Products from './Components/Dasboards/Products';
import Cart from './Components/Dasboards/Cart';
import UserDetail from './Components/Dasboards/UserDetail'
function App() {
	return (
		<>
				<Nav/>
				<Switch>
					<Route path='/' exact component={Home}/>
					<Route path='/urunler' exact component={Products} />
					<Route path='/sepet' exact component={Cart}/>
					<Route path='/hesabim' export component={UserDetail}/>
				</Switch>
				
				<Footer/>

		</>
	);
}

export default App;
