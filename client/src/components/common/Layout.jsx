import Sider from './Sider';
import Header from './Header';
import styled from 'styled-components';
import { Outlet, useNavigate } from 'react-router-dom';
import Footer from './Footer';
import { useEffect } from 'react';
import { getStorageItem } from '../../lib/util';
import { ACCESS_TOKEN, HOME } from '../../consts';

function Layout() {
  const navigate = useNavigate();

  useEffect(() => {
    const accessToken = getStorageItem(ACCESS_TOKEN);

    if (!accessToken) {
      navigate(HOME);
    }
  });

  return (
    <OuterWrap>
      <Sider />
      <InnerWrap>
        <Header />
        <Outlet />
        <Footer />
      </InnerWrap>
    </OuterWrap>
  );
}

export default Layout;

const OuterWrap = styled.div`
  width: 100vw;
  height: 100vh;
  
  display: grid;
  grid-template-columns: 0.5fr 2fr;
`;

const InnerWrap = styled.div`
  width: 100%;

  display: grid;
  grid-template-rows: 80px 1fr 80px;
`;
