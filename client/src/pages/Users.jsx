import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { PaginationBar, Search, UserList } from '../components';
import { getTotalPage } from '../lib/apis';
import { getUsers, searchUsers } from '../store/users';

const INITIAL_LIMIT = 20;

function Users() {
  const { data, loading, error } = useSelector(state => state.users.users);
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  
  useEffect(() => {
    const fetchTotalPage = async INITIAL_LIMIT => {
      const totalPageFromFetch = await getTotalPage(INITIAL_LIMIT);
      setTotalPage(totalPageFromFetch);
    };

    fetchTotalPage(INITIAL_LIMIT);
  }, [data]);

  useEffect(() => {
    dispatch(getUsers({ page: currentPage, limit: INITIAL_LIMIT }));
  }, [currentPage, dispatch]);

  if (loading) return <div>Loading...</div>;
  if (!data) return <div>No Data!</div>;
  if (error) return <div>Error..!</div>;
  return (
    <Wrap>
      <Search promiseCallback={searchUsers} />
      <UserList users={data.data} />
      <PaginationBar
        totalPage={totalPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </Wrap>
  );
}

export default Users;

const Wrap = styled.div`
  width: 100%;
  position: relative;
  overflow-y: scroll;
`;
