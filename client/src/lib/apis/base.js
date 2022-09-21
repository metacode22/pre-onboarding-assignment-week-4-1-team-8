import axios from 'axios';
import { BASE_URL, HTTP_METHODS } from '../../consts/api';
import { ACCESS_TOKEN } from '../../consts/storage';
import { getStorageItem } from '../util';

const axiosInstance = axios.create({});

const createApiMethod = (axiosInstance, methodType) => config => {
  return axiosInstance({ ...config, method: methodType });
};

const http = {
  get: createApiMethod(axiosInstance, HTTP_METHODS.GET),
  post: createApiMethod(axiosInstance, HTTP_METHODS.POST),
  put: createApiMethod(axiosInstance, HTTP_METHODS.PUT),
  delete: createApiMethod(axiosInstance, HTTP_METHODS.DELETE),
};

export default http;
