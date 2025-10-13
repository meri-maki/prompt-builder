import { useCallback, useMemo, useState } from 'react'
import { Button, Card, Col, Divider, Form, Input, Layout, Row, Space, Typography, message } from 'antd'
import { useTranslation } from 'react-i18next'
import './App.css'
import type { FormValues, SectionDef, Preset } from './types/prompt'
import { presets } from './presets/presets'
import {  ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons'

const App = () => {
  const { t } = useTranslation()
  const [form] = Form.useForm<FormValues>()
  const [copying, setCopying] = useState(false)
  const [presetsCollapsed, setPresetsCollapsed] = useState(true)

  const sections = useMemo<SectionDef[]>(
    () => [
      {
        key: 'shot' as const,
        label: 'SHOT',
        fields: [
          { key: 'composition' as const, label: 'Composition' },
          { key: 'cameraSettings' as const, label: 'Camera Settings' },
          { key: 'filmGrain' as const, label: 'Film Grain' }
        ]
      },
      {
        key: 'lensEffects' as const,
        label: 'LENS EFFECTS',
        fields: [
          { key: 'optics' as const, label: 'Optics' },
          { key: 'artifacts' as const, label: 'Artifacts' },
          { key: 'depthOfField' as const, label: 'Depth of Field' }
        ]
      },
      {
        key: 'subject' as const,
        label: 'SUBJECT',
        fields: [
          { key: 'description' as const, label: 'Description' },
          { key: 'wardrobe' as const, label: 'Wardrobe' },
          { key: 'grooming' as const, label: 'Grooming' }
        ]
      },
      {
        key: 'scene' as const,
        label: 'SCENE',
        fields: [
          { key: 'location' as const, label: 'Location' },
          { key: 'timeOfDay' as const, label: 'Time of Day' },
          { key: 'environment' as const, label: 'Environment' }
        ]
      },
      {
        key: 'visualDetails' as const,
        label: 'VISUAL DETAILS',
        fields: [
          { key: 'action' as const, label: 'Action' },
          { key: 'props' as const, label: 'Props' },
          { key: 'physics' as const, label: 'Physics' }
        ]
      },
      {
        key: 'cinematography' as const,
        label: 'CINEMATOGRAPHY',
        fields: [
          { key: 'lighting' as const, label: 'Lighting' },
          { key: 'tone' as const, label: 'Tone' },
          { key: 'colorPalette' as const, label: 'Color Palette' }
        ]
      },
      {
        key: 'textElements' as const,
        label: 'TEXT ELEMENTS',
        fields: [
          { key: 'visibleText' as const, label: 'Visible Text' },
          { key: 'typography' as const, label: 'Typography' },
          { key: 'placement' as const, label: 'Placement' }
        ]
      },
      {
        key: 'style' as const,
        label: 'STYLE',
        fields: [
          { key: 'visualAesthetic' as const, label: 'Visual Aesthetic' }
        ]
      }
    ],
    []
  )

  // presets are imported from ./presets/presets

  const applyPreset = useCallback((preset: Preset) => {
    form.setFieldsValue(preset.values)
    message.success(t('presetApplied'))
  }, [form, t])

  const buildOutput = useCallback((values: FormValues) => {
    const lines: string[] = []
    sections.forEach((section) => {
      const sectionValue = values[section.key] as Record<string, string | undefined> | undefined
      if (!sectionValue) return
      const bullets: string[] = []
      section.fields.forEach((field) => {
        const raw = sectionValue[field.key]
        if (raw && raw.trim()) {
          bullets.push(`• ${field.label}: ${raw.trim()}`)
        }
      })
      if (bullets.length > 0) {
        lines.push(`${section.label}:  ${bullets.join('  ')}`)
      }
    })
    return lines.join('\n\n')
  }, [sections])

  const copyToClipboard = useCallback(async (text: string) => {
    try {
      setCopying(true)
      await navigator.clipboard.writeText(text)
      message.success(t('renderedCopied'))
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
        message.success(t('renderedCopied'))
      } catch {
        message.error('Failed to copy to clipboard')
      }
    } finally {
      setCopying(false)
    }
  }, [t])

  const onFinish = useCallback(
    async (values: FormValues) => {
      const compiled = buildOutput(values)
      if (compiled) {
        await copyToClipboard(compiled)
      } else {
        message.info(t('nothingToCopy'))
      }
    },
    [buildOutput, copyToClipboard, t]
  )

  const onReset = useCallback(() => {
    form.resetFields()
  }, [form])

  const handleRenderAndCopy = useCallback(async () => {
    const values = form.getFieldsValue(true) as FormValues
    const compiled = buildOutput(values)
    if (compiled) {
      await copyToClipboard(compiled)
    } else {
      message.info(t('nothingToCopy'))
    }
  }, [form, buildOutput, copyToClipboard, t])

  const parseClipboardToForm = useCallback(async () => {
    try {
      const text = await navigator.clipboard.readText()
      // Simple section-based parse using labels we render
      const sectionMap: Record<string, keyof FormValues> = {
        'SHOT': 'shot',
        'LENS EFFECTS': 'lensEffects',
        'SUBJECT': 'subject',
        'SCENE': 'scene',
        'VISUAL DETAILS': 'visualDetails',
        'CINEMATOGRAPHY': 'cinematography',
        'TEXT ELEMENTS': 'textElements',
        'STYLE': 'style',
      }

      const fieldLabelToKey: Record<string, string> = {
        'Composition': 'composition',
        'Camera Settings': 'cameraSettings',
        'Film Grain': 'filmGrain',
        'Optics': 'optics',
        'Artifacts': 'artifacts',
        'Depth of Field': 'depthOfField',
        'Description': 'description',
        'Wardrobe': 'wardrobe',
        'Grooming': 'grooming',
        'Location': 'location',
        'Time of Day': 'timeOfDay',
        'Environment': 'environment',
        'Action': 'action',
        'Props': 'props',
        'Physics': 'physics',
        'Lighting': 'lighting',
        'Tone': 'tone',
        'Color Palette': 'colorPalette',
        'Visible Text': 'visibleText',
        'Typography': 'typography',
        'Placement': 'placement',
        'Visual Aesthetic': 'visualAesthetic',
      }

      // Split into sections by known headers
      const found: Partial<FormValues> = {}
      const sectionRegex = /(SHOT|LENS EFFECTS|SUBJECT|SCENE|VISUAL DETAILS|CINEMATOGRAPHY|TEXT ELEMENTS|STYLE):/g
      const indices: { name: string; start: number; end: number }[] = []
      let m: RegExpExecArray | null
      while ((m = sectionRegex.exec(text)) !== null) {
        indices.push({ name: m[1], start: m.index, end: 0 })
      }
      if (indices.length === 0) {
        message.error(t('pasteError'))
        return
      }
      indices.forEach((s, i) => { s.end = i < indices.length - 1 ? indices[i + 1].start : text.length })
      for (const sec of indices) {
        const rawSection = text.slice(sec.start, sec.end)
        const sectionName = sec.name
        const sectionKey = sectionMap[sectionName]
        if (!sectionKey) continue

        // Extract bullets like: • Label: value
        const itemRegex = /•\s*([^:]+):\s*([^•\n\r]+)/g
        const sectionObj: Record<string, string> = {}
        let it: RegExpExecArray | null
        while ((it = itemRegex.exec(rawSection)) !== null) {
          const label = it[1].trim()
          const value = it[2].trim()
          const key = fieldLabelToKey[label]
          if (key) sectionObj[key] = value
        }
        if (Object.keys(sectionObj).length > 0) {
          (found as Record<string, unknown>)[sectionKey] = sectionObj as unknown
        }
      }

      if (Object.keys(found).length === 0) {
        message.error(t('pasteError'))
        return
      }
      form.setFieldsValue(found as FormValues)
      message.success(t('pasteSuccess'))
    } catch {
      message.error(t('pasteError'))
    }
  }, [form, t])

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Layout.Header style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', position: 'fixed', left: 0, right: 0, top: 0, zIndex: 100, background: 'black', padding: '0 16px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', maxWidth: 1280, margin: '0 auto' }}>

        <Typography.Title level={2} style={{ margin: 0, color: 'white' }} className='bbh'>{t('title')}</Typography.Title>
        <Button onClick={() => setPresetsCollapsed((v) => !v)} style={{ display: 'flex', alignItems: 'center', gap: 8 }} size='small' ghost>
          <span>{t('presets')}</span>
         {presetsCollapsed ? <ArrowRightOutlined /> : <ArrowLeftOutlined />}
        </Button>
        
        </div>
      </Layout.Header>

      <Layout>
        <Layout.Content style={{ padding: 16, paddingBottom: 96, paddingTop: 76 }}>
          <Row gutter={[16, 16]}>
            <Col span={24}>
              <Card>
                <Form form={form} layout="vertical" onFinish={onFinish} autoComplete="off">
                  {sections.map((section) => (
                    <div key={section.key}>
                      <Typography.Title level={5} style={{ marginTop: 8 }}>{section.label}</Typography.Title>
                      <Row gutter={[12, 12]}>
                        {section.fields.map((field) => (
                          <Col span={24} key={field.key}>
                            <Form.Item name={[section.key as string, field.key as string]} label={field.label}>
                              <Input.TextArea
                                allowClear
                                showCount
                                autoSize={{ minRows: 2, maxRows: 6 }}
                                placeholder={`${field.label}...`}
                              />
                            </Form.Item>
                          </Col>
                        ))}
                      </Row>
                      <Divider style={{ margin: '8px 0 16px' }} />
                    </div>
                  ))}
                </Form>
              </Card>
            </Col>
          </Row>
        </Layout.Content>

        <Layout.Sider
          collapsible
          collapsed={presetsCollapsed}
          collapsedWidth={0}
          trigger={null}
          width={'100%'}
          style={{ position: 'fixed', right: 0, top: 64, bottom: 64, zIndex: 200, background: 'transparent', padding: 16, overflow: 'auto' }}
        >
          <Card title={t('imagePresets')} size="small">
            <Row gutter={[16, 16]} style={{ flexWrap: 'wrap', gap: 16 }}>
              {presets.map((p) => (
                <Card
                  key={p.id}
                  hoverable
                  style={{ cursor: 'pointer',flex: '1 0 auto' }}
                  cover={<img src={p.img} alt={p.title} style={{ height: 300, objectFit: 'cover', width: '100%' }} />}
                  onClick={() => applyPreset(p)}
                  styles={{ body: { padding: 8 }, }}
                >
                  <Card.Meta title={p.title}/>
                </Card>
              ))}
            </Row>
          </Card>
        </Layout.Sider>
      </Layout>

      <Layout.Footer style={{ position: 'fixed', left: 0, right: 0, bottom: 0, zIndex: 100, padding: '12px 16px' }}>
        <Row justify="space-between" align="middle">
          <Col>
              <Button onClick={parseClipboardToForm}>{t('paste')}</Button>
          </Col>
          <Col>
            <Space>
              <Button type="primary" onClick={handleRenderAndCopy} loading={copying}>{t('copy')}</Button>
              <Button onClick={onReset} disabled={copying}>{t('reset')}</Button>
            </Space>
          </Col>
        </Row>
      </Layout.Footer>
    </Layout>
  )
}

export default App
