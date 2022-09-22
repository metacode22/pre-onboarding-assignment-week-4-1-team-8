import styled from 'styled-components';
import useGetCurrentPageName from '../../hooks/useGetCurrentPageName';
import { ACCOUNT, ACCOUNT_LIST, USER_LIST } from '../../consts';

function Header() {
  const currentPageName = useGetCurrentPageName();

  return (
    <Wrap>
      <PageName>
        {currentPageName === ACCOUNT ? ACCOUNT_LIST : USER_LIST}
      </PageName>
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
