import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Layout, Space } from 'antd'
import { Header } from './widgets/Header/Header'
import { Builder } from './pages/Builder/Builder'
import { Guides } from './pages/Guides/Guides'
import { PosesNAngles } from './pages/PosesNAngles/PosesNAngles'

const App = () => {
  return (
    <BrowserRouter>
      <Layout style={{ minHeight: '100vh' }}>
        <Header />
        
        <Routes>
          <Route path="/" element={<Builder />} />
          <Route path="/builder" element={<Builder />} />
          <Route path="/guides" element={<Guides />} />
          <Route path="/guides/posesnangles" element={<PosesNAngles />} />
        </Routes>

        <Layout.Footer style={{ 
          textAlign: 'center', 
          padding: '16px',
          background: '#f0f0f0',
          borderTop: '1px solid #d9d9d9'
        }}>
          <Space>
            <span style={{ fontSize: '14px', color: '#666' }}>
              ❤️ Made by{' '}
              <a 
                href="https://t.me/inc_lementia" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ color: '#8e1305' }}
              >
                @inc_lementia
              </a>
            </span>
            <span style={{ color: '#d9d9d9' }}>|</span>
            <a 
              href="https://boosty.to/inc_lementia" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ fontSize: '14px', color: '#8e1305' }}
            >
              Boosty
            </a>
            <span style={{ color: '#d9d9d9' }}>|</span>
            <a 
              href="https://www.instagram.com/inc_lementia" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ fontSize: '14px', color: '#8e1305' }}
            >
              Instagram
            </a>
            <span style={{ color: '#d9d9d9' }}>|</span>
            <a 
              href="https://t.me/tribute/app?startapp=dAvp" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ fontSize: '14px', color: '#8e1305' }}
            >
              ⭐ Support
            </a>
          </Space>
        </Layout.Footer>
      </Layout>
    </BrowserRouter>
  )
}

export default App
