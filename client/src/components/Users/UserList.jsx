import UserListItem from './UserListItem';

function UserList({ users }) {
  return users.map(user => <UserListItem key={user.id} user={user} />);
}

export default UserList;
