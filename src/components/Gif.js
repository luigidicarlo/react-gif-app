import React from 'react';
import PropTypes from 'prop-types';

const Gif = ({ url, title }) => {
	return (
		<div className="Gif animate__animated animate__fadeIn">
			<img src={url} alt={title} />
			<p>{title}</p>
		</div>
	);
};

Gif.propTypes = {
	url: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired
};

export default Gif;
