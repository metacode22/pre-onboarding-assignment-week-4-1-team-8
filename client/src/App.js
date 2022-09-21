import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from './components';
import { Accounts, Login, Users } from './pages';
import { HOME, ADMIN, ACCOUNT, USER } from './consts';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={HOME} element={<Login />} />
        <Route path={ADMIN} element={<Layout />}>
          <Route path={ACCOUNT} element={<Accounts />} />
          <Route path={USER} element={<Users />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
