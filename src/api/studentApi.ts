import axiosClient from './axiosClient';

const studentApi = {
	getAll: () => {
		const url = '/students';

		return axiosClient.get(url);
	},
};

export default studentApi;
