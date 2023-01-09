import React from "react";
import "./App.scss";
// import { HashRouter } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { ConfigProvider } from 'antd'
import zhCN from 'antd/es/locale/zh_CN'
import Router from './router'

function App() {
  return (
    <ConfigProvider locale={zhCN}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
  </ConfigProvider>
  );
}

export default App;
