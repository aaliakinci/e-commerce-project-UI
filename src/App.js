
import './App.css';
import Home from './Components/Dasboards/Home';
import Footer from './Components/Footer';
import Nav from './Components/Navbar/Nav/index';
import {Switch,Route} from 'react-router-dom';
import Products from './Components/Dasboards/Products';
import Cart from './Components/Dasboards/Cart';
import UserDetail from './Components/Dasboards/UserDetail'
import Register from './Components/Register'
import Login from './Components/Login'
import ProductDetail from './Components/ProductDetail'
function App() {
	return (
		<>
				<Nav/>
				<Switch>
					<Route path='/' exact component={Home}/>
					<Route path='/urunler' exact component={Products} />
					<Route path='/sepet' exact component={Cart}/>
					<Route path='/hesabim'  component={UserDetail}/>
					<Route path='/urun-detayi/:id'  component={ProductDetail}/>
					<Route path='/uye-girisi' exact component={Login}/>
					<Route path='/kayit-ol' exact component={Register}/>
				</Switch>
				
				<Footer/>

		</>
	);
}

export default App;
