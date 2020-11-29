import '@testing-library/jest-dom';
import { getGifs } from '../../helpers/getGifs';

describe('getGifs helper tests', () => {
	test('should return 10 elements', async () => {
		const category = 'Digimon';
		const gifs = await getGifs(category);

		expect(gifs.length).toBe(10);
	});

	test('should return an empty array', async () => {
		const gifs = await getGifs('');

		expect(gifs.length).toBe(0);
	});
});
