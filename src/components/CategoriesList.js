import React from 'react';
import PropTypes from 'prop-types';
import Category from './Category';

const CategoriesList = ({ categories }) => {
	return (
		<React.Fragment>
			{categories.length > 0 ? (
				categories.map(cat => <Category category={cat} key={cat} />)
			) : (
				<h2>Nothing to show</h2>
			)}
		</React.Fragment>
	);
};

CategoriesList.propTypes = {
	categories: PropTypes.array.isRequired
};

export default CategoriesList;
