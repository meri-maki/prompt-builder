import { useState } from 'react'
import { Layout, Card, Row, Col, Typography, Slider, App as AntdApp, Alert } from 'antd'
import { useTranslation } from 'react-i18next'
import cls from './PosesNAngles.module.scss'
import { classNames } from '../../shared/lib/classNames/classNames'
import { getPoseImage, posesData } from './posesData'

const { Title, Paragraph } = Typography

export const PosesNAngles = () => {
  const { message } = AntdApp.useApp()
  const { t } = useTranslation()
  const [cardSpan, setCardSpan] = useState(6)

  const allowedValues = [12, 8, 6, 3]

  const handleSliderChange = (value: number) => {
    // Find the closest allowed value
    const closest = allowedValues.reduce((prev, curr) => 
      Math.abs(curr - value) < Math.abs(prev - value) ? curr : prev
    )
    setCardSpan(closest)
  }

  const handleCardClick = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text)
      message.success('Prompt copied to clipboard!')
    } catch {
      try {
        const textarea = document.createElement('textarea')
        textarea.value = text
        textarea.style.position = 'fixed'
        textarea.style.left = '-9999px'
        document.body.appendChild(textarea)
        textarea.focus()
        textarea.select()
        document.execCommand('copy')
        document.body.removeChild(textarea)
        message.success('Prompt copied to clipboard!')
      } catch {
        message.error('Failed to copy to clipboard')
      }
    }
  }

  return (
    <Layout style={{ width: '100%', flex: 1 }}>
      <Layout.Content className={cls.content}>
        <div className={cls.container}>
          <div className={cls.descriptionContainer}>
            <Title level={1} className={cls.title}>POSES'N'ANGLES</Title>
            
            <Alert
              message={
                <div className={cls.description}>
                  <div className={cls.descriptionSection}>
                    <div className={cls.descriptionTitle}>{t('posesHowToUseTitle')}</div>
                  </div>
                  <div className={cls.descriptionSection}>
                    <div className={cls.descriptionItem}>{t('posesImagesClickable')}</div>
                  </div>
                  <div className={cls.descriptionSection}>
                    <div className={cls.descriptionItem}>{t('posesPromptDirectUse')}</div>
                  </div>
                  
                  <div className={cls.descriptionSection}>
                    <div className={cls.descriptionTitle}>{t('posesBestResultsTitle')}</div>
                  </div>
                  <div className={cls.descriptionSection}>
                    <div className={cls.descriptionItem}>{t('posesEditGeneration')}</div>
                  </div>
                  <div className={cls.descriptionSection}>
                    <div className={cls.descriptionItem}>{t('posesUpscale')}</div>
                  </div>
                  <div className={cls.descriptionSection}>
                    <div className={cls.descriptionItem}>{t('posesTwoAngles')}</div>
                  </div>
                </div>
              }
              type="info"
              className={cls.descriptionAlert}
            />
            <div className={cls.sliderContainer}>
              <span className={cls.sliderLabel}>ZOOM</span>
              <Slider
                min={3}
                max={12}
                step={1}
                value={cardSpan}
                onChange={handleSliderChange}
                tooltip={{ formatter: null }}
                marks={{
                  3: '',
                  6: '',
                  8: '',
                  12: ''
                }}
                className={cls.slider}
              />
            </div>
          </div>
          
          <Row gutter={[12, 12]} className={cls.cardsContainer}>
            {posesData.map((pose) => (
              <Col xs={24} sm={cardSpan} md={cardSpan} lg={cardSpan} key={pose.id}>
                <Card
                  className={classNames(cls.card, {[cls.card3]: cardSpan === 3})}
                  hoverable
                  onClick={() => handleCardClick(pose.text)}
                  cover={
                    <img 
                      src={getPoseImage(pose.id)}
                      alt={`Pose ${pose.id}`}
                      className={cls.cardImage}
                      style={{ aspectRatio: '9/16', objectFit: 'cover', 
                        height: '100%',
                       }}
                    />
                  }
                >

                    <Card.Meta
                      description={<Paragraph copyable className={cls.cardText}>{pose.text}</Paragraph>}
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

