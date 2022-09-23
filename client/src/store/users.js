import * as apis from '../lib/apis';
import {
  createPromiseThunk,
  handleAsyncAction,
  reducerUtils,
} from '../lib/util/asyncUtils';

const GET_USERS = 'GET_USERS';
const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS';
const GET_USERS_ERROR = 'GET_USERS_ERROR';

const SEARCH_USERS = 'SEARCH_USERS';
const SEARCH_USERS_SUCCESS = 'SEARCH_USERS_SUCCESS';
const SEARCH_USERS_ERROR = 'SEARCH_USERS_ERROR';

export const getUsers = createPromiseThunk(GET_USERS, apis.getUsers);
export const searchUsers = createPromiseThunk(SEARCH_USERS, apis.searchUsers);

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
    case SEARCH_USERS:
    case SEARCH_USERS_SUCCESS:
    case SEARCH_USERS_ERROR:
      return handleAsyncAction(SEARCH_USERS, 'users')(state, action);
    default:
      return state;
  }
}
