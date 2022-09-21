import Sider from './Sider';
import Header from './Header';
import styled from 'styled-components';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';

function Layout() {
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
