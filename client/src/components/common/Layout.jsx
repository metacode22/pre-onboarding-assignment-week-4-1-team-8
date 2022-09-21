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

const OuterWrap = styled.div``;

const InnerWrap = styled.div``;
