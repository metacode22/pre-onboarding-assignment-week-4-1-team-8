import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { ACCOUNT, ACCOUNT_LIST, USER, USER_LIST } from '../../consts';
import useGetCurrentPageName from '../../hooks/useGetCurrentPageName';
import { palette } from '../../styles';
import Logout from './Logout';

function Sider() {
  const currentPageName = useGetCurrentPageName();
  const navigate = useNavigate();

  const handleButtonClick = pageName => {
    pageName === ACCOUNT_LIST ? navigate(ACCOUNT) : navigate(USER);
  };

  return (
    <Wrap>
      <div>Logo</div>
      <ButtonWrap
        active={currentPageName === ACCOUNT}
        onClick={() => handleButtonClick(ACCOUNT_LIST)}
      >
        {ACCOUNT_LIST}
      </ButtonWrap>
      <ButtonWrap
        active={currentPageName === USER}
        onClick={() => handleButtonClick(USER_LIST)}
      >
        {USER_LIST}
      </ButtonWrap>
      <Logout />
    </Wrap>
  );
}

export default Sider;

const Wrap = styled.aside`
  width: 100%;
`;

const ButtonWrap = styled.div`
  height: 3em;
  cursor: pointer;
  background-color: ${props =>
    props.active ? palette.skyblue : palette.white};

  display: flex;
  justify-content: center;
  align-items: center;

  :hover {
    background-color: ${props => !props.active && palette.shallowGray};
  }
`;
