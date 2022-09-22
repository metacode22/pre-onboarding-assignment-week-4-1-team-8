import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { ACCESS_TOKEN } from '../../consts';
import { removeStorageItem } from '../../lib/util';

function Logout() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    removeStorageItem(ACCESS_TOKEN);
    navigate('/');
  };

  return <Wrap onClick={handleButtonClick}>로그아웃</Wrap>;
}

export default Logout;

const Wrap = styled.div`
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
