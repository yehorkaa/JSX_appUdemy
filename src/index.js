import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
// цсс в данной работе мы тоже по кусочкам разбили и применили к каждому из джс файлов свой
import './index.css';
// этот файл принимает в себя app.js функцию и рендерит на экран 
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
