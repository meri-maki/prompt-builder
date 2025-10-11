import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'antd/dist/reset.css'
import { ConfigProvider, App as AntdApp } from 'antd'
import './index.css'
import App from './App.tsx'
import './i18n'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ConfigProvider>
      <AntdApp>
        <App />
      </AntdApp>
    </ConfigProvider>
  </StrictMode>,
)
