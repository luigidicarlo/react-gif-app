import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import AddCategory from '../../components/AddCategory';

describe('AddCategory component tests', () => {
	const setCategories = jest.fn();
	const categories = [];
	let wrapper = shallow(
		<AddCategory setCategories={setCategories} categories={categories} />
	);

	beforeEach(() => {
		jest.clearAllMocks();
		wrapper = shallow(
			<AddCategory setCategories={setCategories} categories={categories} />
		);
	});

	test('should render correctly', () => {
		expect(wrapper).toMatchSnapshot();
	});

	test('should change input text', () => {
		const value = 'Testing';
		wrapper.find('input').simulate('change', { target: { value } });
		expect(wrapper.find('input').prop('value')).toBe(value);
	});

	test('should not submit data', () => {
		wrapper.find('form').simulate('submit', { preventDefault: () => {} });

		expect(setCategories).not.toHaveBeenCalled();
	});

	test('should call setCategory and clear the input', async () => {
		const value = 'This is a test';

    wrapper.find('input').simulate('change', { target: { value } });
    wrapper.find('form').simulate('submit', { preventDefault: () => {} });

		expect(setCategories).toHaveBeenCalled();
		expect(wrapper.find('input').prop('value')).toBe('');
	});
});
