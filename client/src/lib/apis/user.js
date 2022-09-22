import { USERS } from '../../consts/api';
import http from './base';

export const getUsers = ({ page, limit }) => {
  return http.get({
    url: `${USERS}?_page=${page}&_limit=${limit}`,
  });
};

export const getTotalPage = async limit => {
  const response = await http.get({
    url: USERS,
  });
  const totalPage = Math.ceil(response.data.length / limit);

  return totalPage;
};
