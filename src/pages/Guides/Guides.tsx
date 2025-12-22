import { Layout, Card, Row, Col, Typography } from 'antd'
import { useNavigate } from 'react-router-dom'
import cls from './Guides.module.scss'
import { useTranslation } from 'react-i18next'
import { guides } from './guidesData'

const { Title } = Typography


export const Guides = () => {
  const navigate = useNavigate()

  const { t } = useTranslation()


  return (
    <Layout style={{ width: '100%', flex: 1 }}>
      <Layout.Content className={cls.content}>
        <div className={cls.container}>
          <Title level={2} className={cls.title}>Guides</Title>
          <Title type='secondary' level={5} className={cls.description} >
            {t('guidesDescription')}
            <a href="https://t.me/+eHAQCdmU_EwyODA6" target="_blank" rel="noopener noreferrer">
                INC_LEMENTIA ❤️
            </a>
          </Title>
          
          <Row gutter={[24, 24]} className={cls.cardsContainer}>
            {Object.values(guides).map((guide) => (
              <Col xs={24} sm={12} md={8} lg={6} key={guide.id}>
                <Card
                  hoverable
                  cover={<img src={guide.image} alt={guide.title} />}
                  className={cls.card}
                  onClick={() => navigate(`/guides/${guide.id}`)}
                >
                  <Card.Meta
                    title={<span className={cls.cardTitle}>{guide.title}</span>}
                    description={<span className={cls.cardDescription}>{t(guide.description)}</span>}
                  />
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </Layout.Content>
    </Layout>
  )
}

