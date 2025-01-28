import axios from 'axios';

const API_BASE_URL = 'http://transport.opendata.ch/v1/locations?query=';

const apiClient = axios.create({
    baseURL: API_BASE_URL,
    timeout: 5000,
    headers: {
      'Content-Type': 'application/json',
    },
  });

  export const getLocations = async (query: string) => {
    try {
      let url = API_BASE_URL + query;

      const response = await apiClient.get(url)

      return response.data;
    } catch (error) {
      console.error('Fehler beim Abrufen der Connections:', error);
      throw error; 
    }
  };