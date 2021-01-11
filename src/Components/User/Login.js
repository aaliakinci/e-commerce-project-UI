import React,{useState} from 'react';
import { Link } from 'react-router-dom';

 function Login() {
	const [email, setEmail] = useState();
	const [password, setPassword] = useState()

	const handleChange = e =>{
		const name  = e.target.name;
		const value = e.target.value;
		setEmail({[name]:value});
		setPassword({[name]:value});
	 
	}
	const handleSubmit = e => {
		e.preventDefault();
	 
	}

	return (
		<li className="drop-down">
			<Link to="/uye-girisi">
				<i className="fa fa-user-circle" aria-hidden="true" style={{ fontSize: '24px' }} /> Üye Girişi
			</Link>
			<ul className="p-0">
			<li className="text-hide float-none">Yazılım Dünyası</li>
				<li className=" p-4" style={{border:'3px solid #213b52'}}>
					<form onSubmit={(e)=>handleSubmit(e)}>
						<div className="form-group">
							<label htmlFor="email" className="font-smaller" style={{fontSize:'14px'}}>E-posta Adresiniz</label>
							<input
								type="email"
								className="form-control"
								id="email"
								name="email"
								style={{height:'25px'}}
								onChange={(e)=>handleChange(e)}
							/>
						</div>
						<div className="form-group my-2">
							<label htmlFor="password" style={{fontSize:'14px'}}>Şifreniz</label>
							<input
								type="password"
								className="form-control"
								id="password"
								name="password"
								style={{height:'25px'}}
								onChange={(e)=>handleChange(e)}
							/>
						</div>
						<button type="submit" className="btn btn-block my-2" style={{backgroundColor:'#213b52',color:'white'}}>Giriş</button>
					</form>
				</li>
			</ul>
		</li>
	);
}
export default Login