import { useState, useEffect } from 'react';
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = category => {
	const [state, setState] = useState({
		data: [],
		isLoading: true
	});

	useEffect(() => {
		getGifs(category).then(gifs => {
			setState({
				data: gifs,
				isLoading: false
			});
		});
	}, [category]) ;

	return state;
};
