import styled from 'styled-components';
import PageButton from './PageButton';

function PaginationBar({ totalPage, currentPage, setCurrentPage }) {
  const pageNumbers = [];

  for (let i = 1; i <= totalPage; i++) pageNumbers.push(i);

  return (
    <Wrap>
      {pageNumbers.map(pageNumber => (
        <PageButton
          key={pageNumber}
          pageNumber={pageNumber}
          active={pageNumber === currentPage}
          setCurrentPage={setCurrentPage}
        />
      ))}
    </Wrap>
  );
}

export default PaginationBar;

const Wrap = styled.div`
  position: sticky;
  bottom: 5%;

  display: flex;
  justify-content: center;
  align-items: center;
`;
