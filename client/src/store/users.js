import * as apis from '../lib/apis';
import {
  createPromiseThunk,
  handleAsyncAction,
  reducerUtils,
} from '../lib/util/asyncUtils';

const GET_USERS = 'GET_USERS';
const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS';
const GET_USERS_ERROR = 'GET_USERS_ERROR';

export const getUsers = createPromiseThunk(GET_USERS, apis.getUsers);

const initialState = {
  users: reducerUtils.initial(),
  user: reducerUtils.initial(),
};

export default function users(state = initialState, action) {
  switch (action.type) {
    case GET_USERS:
    case GET_USERS_SUCCESS:
    case GET_USERS_ERROR:
      return handleAsyncAction(GET_USERS, 'users')(state, action);
    default:
      return state;
  }
}
