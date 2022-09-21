import axios from 'axios';
import { HTTP_METHODS } from '../../consts/api';

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
