import React, { useState } from 'react';
import PropTypes from 'prop-types';

const AddCategory = ({ categories, setCategories }) => {
	const [category, setCategory] = useState('');
	const [formError, setFormError] = useState('');

	const onChangeCategoryHandler = e => {
		setCategory(String(e.target.value));
	};

	const onFormSubmitHandler = e => {
		e.preventDefault();

		if (category.trim().length <= 0) {
			setFormError('You must enter a category name');
			setTimeout(() => {
				setFormError('');
			}, 1500);
			return;
		}

		const existingCategory = categories.find(
			cat => cat.toUpperCase() === category.toUpperCase()
		);

		if (existingCategory) {
			setFormError('The category already exists');
			setTimeout(() => {
				setFormError('');
			}, 1500);
			return;
		}

		setCategories([category, ...categories]);
		setCategory('');
	};

	return (
		<React.Fragment>
			<form onSubmit={onFormSubmitHandler}>
				<label htmlFor="category">Category</label>
				&nbsp;
				<input
					type="text"
					name="category"
					onChange={onChangeCategoryHandler}
					value={category}
				/>
				<button type="submit">Add</button>
			</form>
			{formError.length > 0 ? (
				<span className="text-red">{formError}</span>
			) : null}
		</React.Fragment>
	);
};

AddCategory.propTypes = {
	categories: PropTypes.array.isRequired,
	setCategories: PropTypes.func.isRequired
};

export default AddCategory;
