import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AccountList, Layout, UserList } from './components';
import { Login } from './pages';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/admin" element={<Layout />}>
          <Route path="account" element={<AccountList />} />
          <Route path="user" element={<UserList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
