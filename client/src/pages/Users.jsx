import { useEffect } from 'react';
import styled from 'styled-components';
import { getUsers } from '../lib/apis';

function Users() {
  useEffect(() => {
    getUsers().then(res => console.log(res));
  }, [])
  return <Wrap>Users</Wrap>;
}

export default Users;

const Wrap = styled.main``;
