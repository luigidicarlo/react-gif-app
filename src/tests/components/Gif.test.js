import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import Gif from '../../components/Gif';

describe('Gif component tests', () => {
	const testGifUrl =
		'https://media1.giphy.com/media/yo3TC0yeHd53G/giphy.gif?cid=9fa2fab1u3a8ric1mrrawbgllanuj0odcpgtjg42lurqvl8c&rid=giphy.gif';
	const testGifTitle = 'Test Gif';
	let wrapper = shallow(<Gif url={testGifUrl} title={testGifTitle} />);

	beforeEach(() => {
		wrapper = shallow(<Gif url={testGifUrl} title={testGifTitle} />);
	});

	test('should render component', () => {
		expect(wrapper).toMatchSnapshot();
	});

	test('should show a p tag with the passed title', () => {
		const p = wrapper.find('p');
		expect(p.text().trim()).toBe(testGifTitle);
	});

	test('should show an img tag with correct attributes', () => {
		const img = wrapper.find('img');
		const imgProps = img.props();

		expect(imgProps.src).toBe(testGifUrl);
		expect(imgProps.alt).toBe(testGifTitle);
	});

	test('should have classNames animate__animated and animate__fadeIn', () => {
		const desiredClasses = 'animate__animated animate__fadeIn';
		const divClassNames = wrapper.find('div').prop('className');

		expect(divClassNames.includes(desiredClasses)).toBe(true);
	});
});
