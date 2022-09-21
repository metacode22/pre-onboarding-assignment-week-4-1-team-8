import { LOGIN } from '../../consts/api';
import http from './base';

export const signin = (email, password) => {
  return http.post({
    url: LOGIN,
    data: { email, password },
    headers: {},
  });
};
