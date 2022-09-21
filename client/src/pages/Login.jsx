import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { ACCESS_TOKEN, ADMIN, FOOTER } from '../consts';
import { signin } from '../lib/apis';
import { getStorageItem, setStorageItem } from '../lib/util';

function Login() {
  const navigate = useNavigate();

  const handleSubmit = async event => {
    event.preventDefault();
    const { emailField, passwordField } = event.currentTarget;
    const email = emailField.value;
    const password = passwordField.value;

    try {
      const result = await signin(email, password);
      const {
        data: { accessToken },
      } = result;
      setStorageItem(ACCESS_TOKEN, accessToken);
      navigate(ADMIN);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (getStorageItem(ACCESS_TOKEN)) navigate(ADMIN);
  }, []);

  return (
    <Wrap>
      <ContentWrap>
        <h1>로그인</h1>
        <Form onSubmit={handleSubmit}>
          <label>
            <p>ID</p>
            <input
              type="email"
              name="emailField"
              placeholder="manager@admin.com"
              required
            ></input>
          </label>
          <label>
            <p>Password</p>
            <input
              type="password"
              name="passwordField"
              placeholder="12345678!@"
              required
            ></input>
          </label>
          <button type="submit">로그인</button>
        </Form>
      </ContentWrap>
      <Footer>{FOOTER}</Footer>
    </Wrap>
  );
}

export default Login;

const Wrap = styled.main`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ContentWrap = styled.div`
  width: 520px;
  height: 390px;
  padding: 24px;
  border: 1px solid #e2e5e6;
  border-radius: 16px;
`;

const Form = styled.form`
  height: 80%;
  display: flex;
  flex-direction: column;

  justify-content: space-around;
`;

const Footer = styled.footer`
  margin-top: 24px;
`;
