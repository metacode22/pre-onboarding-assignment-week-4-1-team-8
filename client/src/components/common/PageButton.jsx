import styled from 'styled-components';
import { palette } from '../../styles';

function PageButton({ pageNumber, active, setCurrentPage }) {
  return (
    <Wrap
      onClick={() => {
        setCurrentPage(pageNumber);
      }}
      active={active}
    >
      {pageNumber}
    </Wrap>
  );
}

export default PageButton;

const Wrap = styled.div`
  cursor: pointer;
  width: 24px;
  height: 32px;
  margin: auto 8px;
  border: 1px solid ${palette.shallowGray};
  border-radius: 4px;
  line-height: 32px;
  text-align: center;
  background-color: ${props => props.active ? palette.skyblue : palette.white};

  :hover {
    background-color: ${props => !props.active && palette.shallowGray};
  }
`;
