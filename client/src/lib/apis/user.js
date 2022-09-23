import { ACCOUNTS, USERS, USER_SETTING } from '../../consts/api';
import http from './base';

export const getUsers = ({ page, limit }) => {
  return http.get({
    url: USERS,
    params: {
      _page: page,
      _limit:limit
    }
  });
};

export const getTotalPage = async limit => {
  const response = await http.get({
    url: USERS,
  });
  const totalPage = Math.ceil(response.data.length / limit);

  return totalPage;
};

export const getUserDetail = async uuid => {
  const response = await http.get({
    url: USER_SETTING,
    params: {
      uuid: uuid
    }
  });
  const allowMarketingPush = response?.data[0]?.allow_marketing_push;
  const isActive = response?.data[0]?.is_active;

  return [allowMarketingPush, isActive];
};

export const getUsersAccount = async userId => {
  const response = await http.get({
    url: ACCOUNTS,
    params: {
      user_id: userId
    }
  });
  const accountNumber = response.data.length;

  return accountNumber;
};
