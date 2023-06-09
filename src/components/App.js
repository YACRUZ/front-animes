import './../styles/App.css';
import Header from './Header';
import LinkList from './LinkList';
import CreateLink from './CreateLink';
import { Route, Routes } from 'react-router-dom';
import Login from './Login';
import Openai from './openai';
import { useTranslation } from "react-i18next";
import Search from './Search';

function App() {
  const { t } = useTranslation();
  return (
    <div className="center w85">
      <Header />
      {t("hello_welcome_to_react")}
      <div className="ph3 pv1 background-gray">
        <Routes>
          <Route path="/" element={<LinkList/>} />
          <Route
            path="/create"
            element={<CreateLink/>}
          />
          <Route path="/login" element={<Login/>} />
          <Route path="/search"element={<Search/>}/>
          <Route path="/openai" element={<Openai />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
