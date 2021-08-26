import React, { useState, useEffect } from 'react';
import axiosInstance from './Store/Actions/users';
import { useHistory } from 'react-router-dom';

export default function Logout() {
	const history = useHistory();

	useEffect(() => {
		const response = axiosInstance.post('user/logout/blacklist/', {
			refresh_token: localStorage.getItem('refresh_token'),
		});
		localStorage.removeItem('access_token');
		localStorage.removeItem('refresh_token');
		axiosInstance.defaults.headers['Authorization'] = null;
		history.push('/login');
	});
	return <div>Logout</div>}