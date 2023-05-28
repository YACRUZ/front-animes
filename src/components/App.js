import './../styles/App.css';
import Header from './Header';
import LinkList from './LinkList';
import CreateLink from './CreateLink';
import { Route, Routes } from 'react-router-dom';
import Login from './Login';
import Textdavinci003 from './text-davinci-003';
import Imagesdavinci from './images-davinci';

function App() {
  return (
    <div className="center w85">
      <Header />
      <div className="ph3 pv1 background-gray">
        <Routes>
          <Route path="/" element={<LinkList/>} />
          <Route
            path="/create"
            element={<CreateLink/>}
          />
          <Route path="/login" element={<Login/>} />
          <Route path="/davinchi" element={<Textdavinci003 />} />
          <Route path="/images" element={<Imagesdavinci />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
