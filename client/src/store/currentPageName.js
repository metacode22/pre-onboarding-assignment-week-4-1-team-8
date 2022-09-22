import { ACCOUNT_LIST, USER_LIST } from '../consts';

const initialState = '';

export const setPageName = pageName => ({ type: pageName });

export default function currentPageName(state = initialState, action) {
  switch (action.type) {
    case ACCOUNT_LIST:
      return ACCOUNT_LIST;
    case USER_LIST:
      return USER_LIST;
    default:
      return '';
  }
}
