import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

function Search({ promiseCallback }) {
  const dispatch = useDispatch();
  const inputRef = useRef();

  const handleSubmit = event => {
    event.preventDefault();
    const enteredText = inputRef.current.value;

    dispatch(promiseCallback(enteredText));
  };

  return (
    <Form onSubmit={event => handleSubmit(event)}>
      <input placeholder="검색어를 입력해주세요." ref={inputRef} />
      <button type="submit" onClick={event => handleSubmit(event)}>
        검색
      </button>
    </Form>
  );
}

export default Search;

const Form = styled.form`
  position: sticky;
  top: 4px;

  display: flex;
  justify-content: center;
  align-items: center;
`;
