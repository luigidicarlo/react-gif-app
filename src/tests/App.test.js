import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import App from '../App';

describe('App component tests', () => {
	test('should render component', () => {
		const wrapper = shallow(<App />);
		expect(wrapper).toMatchSnapshot();
	});

	test('should render two default categories', () => {
		const defaultCategories = ['Dragon Ball', 'Hunter X Hunter'];
		const wrapper = shallow(<App defaultCategories={defaultCategories} />);
		expect(wrapper.find('CategoriesList').prop('categories').length).toBe(
			defaultCategories.length
		);
	});
});
