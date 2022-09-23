import styled from 'styled-components';
import UserListItem from './UserListItem';

function UserList({ users }) {
  return (
    <Wrap>
      {users.map(user => (
        <UserListItem key={user.id} user={user} />
      ))}
    </Wrap>
  );
}

export default UserList;

const Wrap = styled.div`
  width: 100%;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
