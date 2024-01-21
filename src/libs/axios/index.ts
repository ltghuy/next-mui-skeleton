import { API_ROUTES } from '@/constants/apiRoutes';
import axios, { AxiosInstance } from 'axios';

export const apiInstance: AxiosInstance = axios.create({
  baseURL: API_ROUTES.BASE,
  timeout: 0,
});
