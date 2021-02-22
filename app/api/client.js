import { create } from 'apisauce';

const apiClient = create({
  baseURL: 'http://192.168.0.115:9000/api'
});

export default apiClient;