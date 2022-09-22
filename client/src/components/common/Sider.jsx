import styled from 'styled-components';
import Logout from './Logout';

function Sider() {
  
  const handleButtonClick = () => {
    
  }
  
  return (
    <Wrap>
      <div>Logo</div>
      <ButtonWrap>계좌 목록</ButtonWrap>
      <ButtonWrap>사용자</ButtonWrap>
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
