import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { ACCOUNT, ACCOUNT_LIST, ADMIN, USER, USER_LIST } from '../../consts';
import { setPageName } from '../../store/currentPageName';

import Logout from './Logout';

function Sider() {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleButtonClick = (event, pageName) => {
    event.target.classList.add('active');
    console.log(event.target.classList);
    dispatch(setPageName(pageName));

    pageName === ACCOUNT_LIST
      ? navigate(`${ADMIN}/${ACCOUNT}`)
      : navigate(`${ADMIN}/${USER}`);
  };

  return (
    <Wrap>
      <div>Logo</div>
      <ButtonWrap onClick={event => handleButtonClick(event, ACCOUNT_LIST)}>
        {ACCOUNT_LIST}
      </ButtonWrap>
      <ButtonWrap onClick={event => handleButtonClick(event, USER_LIST)}>
        {USER_LIST}
      </ButtonWrap>
      <Logout />
    </Wrap>
  );
}

export default Sider;

const Wrap = styled.aside`
  width: 100%;
  border: 1px solid black;
`;

const ButtonWrap = styled.div`
  border: 1px solid black;
  height: 3em;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  :hover {
    background-color: #e2e5e6;
  }
`;
