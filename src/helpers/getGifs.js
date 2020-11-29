export const getGifs = async (category) => {
	const baseUrl = 'https://api.giphy.com/v1/gifs/search';
	const apiKey = 'MHd0gjVMwY5UpulmdobDKBE0mIDSqueG';
	const url = `${baseUrl}?limit=10&api_key=${apiKey}&q=`;
	const resp = await fetch(`${url}${encodeURI(category)}`);
	const { data } = await resp.json();
	const images = data.map(image => ({
		id: image.id,
		url: image.images?.downsized_medium.url,
		title: image.title
	}));

	return images;
};
