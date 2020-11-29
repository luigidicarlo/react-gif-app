import React from 'react';
import PropTypes from 'prop-types';
import Pulser from './Pulser';
import Gif from './Gif';
import { useFetchGifs } from '../hooks/useFetchGifs';

const Category = ({ category }) => {
	const { data: gifs, isLoading } = useFetchGifs(category);

	return (
		<React.Fragment>
			<h2>{category}</h2>

			{isLoading && <Pulser />}

			{gifs.length > 0 && (
				<React.Fragment>
					<div className="gif-list">
						{gifs.map(gif => (
							<Gif key={gif.id} {...gif} />
						))}
					</div>
				</React.Fragment>
			)}

			{!gifs.length && (
				<React.Fragment>
					{!isLoading && <h4>No GIF images were found</h4>}
				</React.Fragment>
			)}
		</React.Fragment>
	);
};

Category.propTypes = {
	category: PropTypes.string.isRequired
};

export default Category;
