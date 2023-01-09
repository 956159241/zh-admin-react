import React from "react";
import "./App.scss";
// import { HashRouter } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { ConfigProvider } from 'antd'
import zhCN from 'antd/es/locale/zh_CN'
import Router from './router'
import store from '../src/store/index.js'

function App() {
  return (
    <ConfigProvider locale={zhCN}>
        <Provider store={store}>
          <BrowserRouter>
            <Router />
          </BrowserRouter>
        </Provider>
      </ConfigProvider>
  );
}

export default App;
