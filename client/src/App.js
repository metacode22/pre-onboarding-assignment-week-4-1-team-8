import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from './components';
import { Accounts, Login, Users } from './pages';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/admin" element={<Layout />}>
          <Route path="account" element={<Accounts />} />
          <Route path="user" element={<Users />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
