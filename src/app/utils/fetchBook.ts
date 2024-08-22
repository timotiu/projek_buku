export async function getBooks() {
    const url = 'https://freebooks-api2.p.rapidapi.com/fetchEbooks/horror/2';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'c5cd7dc69amshe6f8212a58e05d3p18b957jsnbb9f37248549',
		'x-rapidapi-host': 'freebooks-api2.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.json();
	return result;
} catch (error) {
	console.error(error);
}
}