import logo from './../logo.svg';
import './../styles/App.css';
import Header from './Header';
import LinkList from './LinkList';
import CreateLink from './CreateLink';
import { Route, Routes } from 'react-router-dom';

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
        </Routes>
      </div>
    </div>
  );
}

export default App;
