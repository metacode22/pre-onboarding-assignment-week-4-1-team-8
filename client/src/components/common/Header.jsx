import styled from 'styled-components';
import { useSelector } from 'react-redux';

function Header() {
  const currentPageName = useSelector(state => state.currentPageName);

  return (
    <Wrap>
      <PageName>{currentPageName}</PageName>
      <AdminUserName>Admin User</AdminUserName>
    </Wrap>
  );
}

export default Header;

const Wrap = styled.nav`
  width: 100%;
  border: 1px solid red;
  padding: 24px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const PageName = styled.div``;

const AdminUserName = styled.div``;
