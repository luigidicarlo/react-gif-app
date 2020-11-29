import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import Category from '../../components/Category';
import { useFetchGifs } from '../../hooks/useFetchGifs';

jest.mock('../../hooks/useFetchGifs');

describe('Category component tests', () => {
	const category = 'goku';

	test('should render component', () => {
    useFetchGifs.mockReturnValue({
      data: [],
      isLoading: true
    });
		const wrapper = shallow(<Category category={category} />);
		expect(wrapper).toMatchSnapshot();
	});

	test('should show category name wrapped around h2 element', () => {
    useFetchGifs.mockReturnValue({
      data: [],
      isLoading: true
    });
		const wrapper = shallow(<Category category={category} />);
		expect(wrapper.find('h2').text()).toBe(category);
	});

	test('should show items when images are loaded with useFetchGifs', () => {
		const gifs = [
			{
				id: 'asd123',
				url:
					'https://media1.giphy.com/media/yo3TC0yeHd53G/giphy.gif?cid=9fa2fab1u3a8ric1mrrawbgllanuj0odcpgtjg42lurqvl8c&rid=giphy.gif',
				title: 'goku'
      },
      {
				id: '789qwe',
				url:
					'https://media1.giphy.com/media/yo3TC0yeHd53G/giphy.gif?cid=9fa2fab1u3a8ric1mrrawbgllanuj0odcpgtjg42lurqvl8c&rid=giphy.gif',
				title: 'goku'
			}
		];

		useFetchGifs.mockReturnValue({
			data: gifs,
			isLoading: false
    });
    
    const wrapper = shallow(<Category category={category} />);

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('Pulser').exists()).toBe(false);
    expect(wrapper.find('Gif').length).toBe(gifs.length);
	});
});
