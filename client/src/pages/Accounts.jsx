import styled from 'styled-components';
import { AccountList, PaginationBar } from '../components';

function Accounts() {
  return (
    <Wrap>
      <AccountList />
      <PaginationBar />
    </Wrap>
  );
}

export default Accounts;

const Wrap = styled.div`
  position: relative;
  overflow-y: scroll;
`;
