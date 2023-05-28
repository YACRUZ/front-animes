import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { setContext } from '@apollo/client/link/context';
import { AUTH_TOKEN } from './Constants';


// 1
import {
  ApolloProvider,
  ApolloClient,
  createHttpLink,
  InMemoryCache
} from '@apollo/client';

// 2
const httpLink = createHttpLink({
  uri: 'http://localhost:8000/graphql/'
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem(AUTH_TOKEN);
  return {
    headers: {
      ...headers,
      authorization: token ? `JWT ${token}` : ''
    }
  };
});

// 3
const client = new ApolloClient({
  //link: httpLink,
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <ApolloProvider client={client}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ApolloProvider>
  <footer >
          <p className="text-center">Creado por: 
            Yahir Jesus Jacome Cogco
          </p>
          <div className="cont-center">
            <a href="https://www.facebook.com/yahir.jesus.779"><img src="https://www.facebook.com/images/fb_icon_325x325.png" height="50px" width="50px" alt="Facebook"/></a>
            <a href="https://www.youtube.com/channel/UC0nPwl62QIktOw3ZkktDHrw"><img src="https://www.transparentpng.com/thumb/youtube-logo/hd-youtube-logo-image-0.png" height="50px" width="50px" alt="YouTube"/></a>
            <a href="https://github.com/YACRUZ"><img src="https://www.transparentpng.com/thumb/logos/github-logo-png-rtT9Sy.png" height="50px" width="50px" alt="GitHub"/></a>
          </div>
          <div>
            <p className="text-center">S20006732</p>
          </div>
        </footer>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
