import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { PaginationBar, UserList } from '../components';
import { getTotalPage } from '../lib/apis';
import { getUsers } from '../store/users';

const INITIAL_LIMIT = 20;

function Users() {
  const { data, loading, error } = useSelector(state => state.users.users);
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);

  useEffect(() => {
    const fetchTotalPage = async () => {
      const totalPageFromFetch = await getTotalPage(INITIAL_LIMIT);
      setTotalPage(totalPageFromFetch);
    };

    fetchTotalPage();
  }, [data]);

  useEffect(() => {
    dispatch(getUsers({ page: currentPage, limit: INITIAL_LIMIT }));
  }, [currentPage]);

  if (loading) return <div>Loading...</div>;
  if (!data) return <div>No Data!</div>;
  if (error) return <div>Error..!</div>;
  return (
    <Wrap>
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
  position: relative;
  overflow-y: scroll;
`;
