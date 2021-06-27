import React from 'react'
import axios from 'axios';
// import socket from '../socket'

function JoinBlock({onLogin}){
	const [roomId, setRoomId] = React.useState('');
	const [userName, setUserName] = React.useState('');
	const [isLoading, setLoading] = React.useState(false);
	const onEnter = ()=>{
		if(!roomId || !userName){
			alert('неверные данные');
		}
		const obj = {
			roomId,
			userName
		}
		setLoading(true)
		axios.post('/rooms', obj)
		onLogin(obj)
	}

	return(
		<div className="join-block">
			<input
				type="text"
				placeholder="room id"
				value={roomId}
				onChange={e =>{setRoomId(e.target.value)}}/>
			<input
				type="text"
				placeholder="user name"
				value={userName}
				onChange={e =>{setUserName(e.target.value)}}/>
			<button disabled={isLoading}
					onClick={onEnter}
			        className="btn btn-success">
				{isLoading ? 'Вход...' : 'Войти'}
			</button>
		</div>
	)
}

export default JoinBlock