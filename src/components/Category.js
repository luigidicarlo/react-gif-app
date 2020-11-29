import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Pulser from './Pulser';
import Gif from './Gif';
import { getGifs } from '../helpers/getGifs';

const Category = ({ category }) => {
	const [gifs, setGifs] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		setIsLoading(true);
		getGifs(category).then(gifs => {
			setIsLoading(false);
			setGifs(gifs);
		});
	}, [category]);

	return (
		<React.Fragment>
			{isLoading ? (
				<Pulser />
			) : (
				<React.Fragment>
					<h2>{category}</h2>
					{gifs.length > 0 ? (
						<React.Fragment>
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
