import axios from 'axios';
import { HTTP_METHODS } from '../../consts/api';
import { ACCESS_TOKEN } from '../../consts/storage';
import { getStorageItem } from '../util/storage';

const axiosInstance = axios.create({
  headers: {
    'Content-Type': 'application/json',
  },
});

const handleRequest = config => {
  const token = getStorageItem(ACCESS_TOKEN);

  return token
    ? {
        ...config,
        headers: {
          ...config.headers,
          Authorization: `Bearer ${token}`,
        },
      }
    : config;
};

const createApiMethod = (axiosInstance, methodType) => config => {
  return axiosInstance({ ...handleRequest(config), method: methodType });
};

const http = {
  get: createApiMethod(axiosInstance, HTTP_METHODS.GET),
  post: createApiMethod(axiosInstance, HTTP_METHODS.POST),
  put: createApiMethod(axiosInstance, HTTP_METHODS.PUT),
  delete: createApiMethod(axiosInstance, HTTP_METHODS.DELETE),
};

export default http;
