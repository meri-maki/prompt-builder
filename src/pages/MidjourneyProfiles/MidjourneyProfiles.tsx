/**
 * Guide page: Midjourney Personalization (--p) moodboards with one-click copy for each code and the shared base prompt.
 */
import { useState } from 'react'
import { Layout, Card, Row, Col, Typography, Slider, App as AntdApp, Alert } from 'antd'
import { useTranslation } from 'react-i18next'
import cls from './MidjourneyProfiles.module.scss'
import { classNames } from '../../shared/lib/classNames/classNames'
import {
  formatProfileFlag,
  midjourneyProfileItems,
  midjourneyProfilesBasePrompt,
} from './midjourneyProfilesData'

const { Title, Paragraph } = Typography

export const MidjourneyProfiles = () => {
  const { message } = AntdApp.useApp()
  const { t } = useTranslation()
  const [cardSpan, setCardSpan] = useState(6)

  const allowedValues = [12, 8, 6, 3]

  const handleSliderChange = (value: number) => {
    const closest = allowedValues.reduce((prev, curr) =>
      Math.abs(curr - value) < Math.abs(prev - value) ? curr : prev,
    )
    setCardSpan(closest)
  }

  const copyText = async (text: string, successKey: string) => {
    try {
      await navigator.clipboard.writeText(text)
      message.success(t(successKey))
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
        message.success(t(successKey))
      } catch {
        message.error(t('pasteClipboardFailed'))
      }
    }
  }

  return (
    <Layout style={{ width: '100%', flex: 1 }}>
      <Layout.Content className={cls.content}>
        <div className={cls.container}>
          <div className={cls.descriptionContainer}>
            <Title level={1} className={cls.title}>
              {t('midjourneyProfilesPageTitle')}
            </Title>

            <Alert
              message={
                <div className={cls.description}>
                  <div className={cls.descriptionSection}>
                    <div className={cls.descriptionTitle}>{t('midjourneyProfilesHowToTitle')}</div>
                  </div>
                  <div className={cls.descriptionSection}>
                    <div className={cls.descriptionItem}>{t('midjourneyProfilesClickCard')}</div>
                  </div>
                  <div className={cls.descriptionSection}>
                    <div className={cls.descriptionItem}>{t('midjourneyProfilesCopyableField')}</div>
                  </div>
                  <div className={cls.descriptionSection}>
                    <div className={cls.descriptionItem}>{t('midjourneyProfilesUseInMj')}</div>
                  </div>
                </div>
              }
              type="info"
              className={cls.descriptionAlert}
            />

            <Card className={cls.basePromptCard}>
              <div className={cls.basePromptLabel}>{t('midjourneyProfilesBasePromptLabel')}</div>
              <Card.Meta
                description={
                  <Paragraph
                    copyable={{ text: midjourneyProfilesBasePrompt, tooltips: false }}
                    className={cls.basePromptText}
                  >
                    {midjourneyProfilesBasePrompt}
                  </Paragraph>
                }
              />
            </Card>

            <div className={cls.cont}>
              <div className={cls.sliderContainer}>
                <span className={cls.sliderLabel}>{t('midjourneyProfilesZoom')}</span>
                <Slider
                  min={3}
                  max={12}
                  step={1}
                  value={cardSpan}
                  onChange={handleSliderChange}
                  tooltip={{ formatter: null }}
                  marks={{ 3: '', 6: '', 8: '', 12: '' }}
                  className={cls.slider}
                />
              </div>
            </div>
          </div>

          <Row gutter={[12, 12]}>
            {midjourneyProfileItems.map((item) => {
              const flag = formatProfileFlag(item.code)
              return (
                <Col xs={24} sm={cardSpan} md={cardSpan} lg={cardSpan} key={item.id}>
                  <Card
                    className={classNames(cls.card, { [cls.card3]: cardSpan === 3 })}
                    hoverable
                    onClick={() => copyText(flag, 'mjProfileCodeCopied')}
                    cover={
                      <img
                        src={item.image}
                        alt={flag}
                        className={cls.cardImage}
                        style={{ aspectRatio: '9/16', objectFit: 'cover', height: '100%' }}
                      />
                    }
                  >
                    <Card.Meta
                      description={
                        <Paragraph
                          copyable={{ text: flag, tooltips: false }}
                          className={cls.cardCode}
                          onClick={(e) => e.stopPropagation()}
                        >
                          {flag}
                        </Paragraph>
                      }
                    />
                  </Card>
                </Col>
              )
            })}
          </Row>
        </div>
      </Layout.Content>
    </Layout>
  )
}
