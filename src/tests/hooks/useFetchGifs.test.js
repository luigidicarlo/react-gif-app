import '@testing-library/jest-dom';
import { useFetchGifs } from '../../hooks/useFetchGifs';
import { renderHook } from '@testing-library/react-hooks';

describe('useFetchGifs custom hook tests', () => {
	test('should return initial state', async () => {
		const category = 'goku';
		const { result, waitForNextUpdate } = renderHook(() =>
			useFetchGifs(category)
		);
		const { data, isLoading } = result.current;
    await waitForNextUpdate();
    
		expect(data.length).toBe(0);
		expect(isLoading).toBe(true);
	});

	test('should return an array of images and isLoading should be false', async () => {
		const category = 'goku';
		const { result, waitForNextUpdate } = renderHook(() =>
			useFetchGifs(category)
		);
		await waitForNextUpdate();

    const { data, isLoading } = result.current;
    
    expect(data.length).toBe(10);
    expect(isLoading).toBe(false);
	});
});
