import axios from 'axios';

const instance = axios.create({
	baseURL: 'https://us-central1-aquari-zon.cloudfunctions.net/api',
});

export default instance;
