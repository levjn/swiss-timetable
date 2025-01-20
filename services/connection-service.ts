import axios from 'axios';
import { TransportRequest } from '../Interfaces/TransportRequest';

const API_BASE_URL = 'http://transport.opendata.ch/v1/connections';

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getPost = async (transportRequest: TransportRequest) => {
    try {
      let url: string = '';
      url = url + '?from=' + transportRequest.from + '&to=' +transportRequest.to
      if (transportRequest.date) {
        url = url + '&date=' + transportRequest.date
      }
      if (transportRequest.time) {
        url = url + '&time=' + transportRequest.time
      }
      if (transportRequest.isArrivalTime) {
        url = url + '&isArrivalTime=' + transportRequest.isArrivalTime
      }

      const response = await apiClient.get(API_BASE_URL + url);
      
      return response.data;
    } catch (error) {
      console.error('Fehler beim Abrufen der Connections:', error);
      throw error; 
    }
  };