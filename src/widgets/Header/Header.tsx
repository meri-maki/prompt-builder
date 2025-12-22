import { Layout, Space, Button } from 'antd'
import { GlobalOutlined } from '@ant-design/icons'
import { useTranslation } from 'react-i18next'
import { Link, useLocation } from 'react-router-dom'
import { classNames } from '../../shared/lib/classNames/classNames'
import cls from './Header.module.scss'

export const Header = () => {
  const { i18n } = useTranslation()
  const location = useLocation()

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'ru' : 'en'
    i18n.changeLanguage(newLang)
  }

  const isBuilderActive = location.pathname === '/' || location.pathname === '/builder'
  const isGuidesActive = location.pathname.startsWith('/guides')

  const handleLogoClick = () => {
    window.open('https://t.me/+eHAQCdmU_EwyODA6', '_blank')
  }

  return (
    <Layout.Header className={cls.Header}>
      <div className={cls.container}>
        <div className={cls.leftSection}>
          <img src={'/inc.png'} alt="logo" className={cls.logo} onClick={handleLogoClick}/>
        </div>
        <div className={cls.rightSection}>
          <Space className={cls.navigation} >
            <Link 
              to="/" 
              className={classNames(cls.navLink, {}, [isBuilderActive ? cls.active : ''])}
            >
              Prompt Builder
            </Link>
            <Link 
              to="/guides" 
              className={classNames(cls.navLink, {}, [isGuidesActive ? cls.active : ''])}
            >
              Guides
            </Link>
          </Space>
          <Space size={2}>
            <Button 
              onClick={toggleLanguage} 
              className={cls.langButton}
              ghost
              size='small'
              icon={<GlobalOutlined />}
            >
              {i18n.language.toUpperCase()}
            </Button>
          </Space>
        </div>
      </div>
    </Layout.Header>
  )
}

