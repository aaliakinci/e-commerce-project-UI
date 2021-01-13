import {useEffect } from 'react';
import cookie from 'js-cookie';
import jwt_decode from 'jwt-decode';
import { connect } from 'react-redux';
import { getCommentsByUserId } from '../../redux/actions/commentsActions';
function MyComments({userComments,getCommentsByUserId}) {
	const myCookie = cookie.getJSON('yazilimdunyasi');
	const auth = myCookie.Authorization;
	const userToken = myCookie.Authorization.substr(6);
	const decoded = jwt_decode(userToken);
	useEffect(() => {
		getCommentsByUserId(decoded._id,auth);
	}, []);
	console.log(userComments.user);
	return (
 
		<div className="container">
			<div className="row">
				<div className="col-md-12 card-deck">
				{userComments.map((comment) => (
					<div className="card m-1" style={{width:'18rem'}}>
						<div className="card-header">
							<p className="text-hide">Yorum</p>
						</div>
						<div className="card-body">
						<p className="card-text">{comment.title}</p>
						<hr/>
							<p className="card-text">
						
							{comment.body}
							</p>
						</div>
						 <div className="card-footer">
							<p className="text-muted text-right"> {comment.user.map(user=>(<p>- {user.name} {user.surname}</p>))	}</p>
						 </div>
					</div>
				))}
				</div>
				
			</div>
		</div>
	);
}

const mapStateToProps = state => {
	return {
		userComments : state.userCommentsReducer
	}
}
const mapDispatchToProps = dispatch => {
	return {
		getCommentsByUserId : (user_id,auth) => dispatch(getCommentsByUserId(user_id,auth))
	}
}



export default connect(mapStateToProps,mapDispatchToProps)(MyComments)