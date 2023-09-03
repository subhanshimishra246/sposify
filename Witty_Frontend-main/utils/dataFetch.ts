import { API_URL, StrapiApiToken } from "./tokens";

export const fetchDataFromAPI = async (endpoint: any) => {
	const options = {
		method: "GET",
		headers: {
			Authorization: "Bearer " + StrapiApiToken,
		},
	};
	const res = await fetch(`${API_URL}${endpoint}`, options);
	const data = await res.json();
	return data;
};
