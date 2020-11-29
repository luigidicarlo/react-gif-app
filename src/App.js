import React, { useState } from 'react';
import AddCategory from './components/AddCategory';
import CategoriesList from './components/CategoriesList';

const App = () => {
	const [categories, setCategories] = useState([]);

	return (
		<div className="App">
			<h2>GIF Expert</h2>
			<hr />
			<AddCategory categories={categories} setCategories={setCategories} />
			<CategoriesList categories={categories} />
		</div>
	);
};

export default App;
