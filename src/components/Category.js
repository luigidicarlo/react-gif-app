import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Pulser from './Pulser';
import Gif from './Gif';

const Category = ({ category }) => {
	const [gifs, setGifs] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	const getGifs = async () => {
		setIsLoading(true);
		const baseUrl = 'https://api.giphy.com/v1/gifs/search';
		const apiKey = 'MHd0gjVMwY5UpulmdobDKBE0mIDSqueG';
		const url = `${baseUrl}?limit=10&api_key=${apiKey}&q=`;
		const resp = await fetch(`${url}${category}`);
		const { data } = await resp.json();
		const images = data.map(image => ({
			id: image.id,
			url: image.images?.downsized_medium.url,
			title: image.title
		}));

		return images;
	};

	useEffect(() => {
		getGifs().then(gifs => {
			setIsLoading(false);
			setGifs(gifs);
		});
	}, []);

	return (
		<React.Fragment>
			{isLoading ? (
				<Pulser />
			) : (
				<React.Fragment>
					{gifs.length > 0 ? (
						<React.Fragment>
							<h2>{category}</h2>
							<div className="gif-list">
								{gifs.map(gif => <Gif key={gif.id} {...gif} />)}
							</div>
						</React.Fragment>
					) : (
						<h4>No GIF images were found</h4>
					)}
				</React.Fragment>
			)}
		</React.Fragment>
	);
};

Category.propTypes = {
	category: PropTypes.string.isRequired
};

export default Category;
