import { useCallback, useMemo, useState } from 'react'
import { Button, Card, Col, Collapse, Divider, Form, Input, Layout, Row, Space, Typography, Modal, Checkbox, FloatButton, App as AntdApp } from 'antd'
import { useTranslation } from 'react-i18next'
import './App.css'
import type { FormValues, SectionDef, Preset } from './types/prompt'
import { presets } from './presets/presets'
import { CopyOutlined, DeleteOutlined, FileAddOutlined, GlobalOutlined } from '@ant-design/icons'

const App = () => {
  const { t, i18n } = useTranslation()
  const { message } = AntdApp.useApp()
  const [form] = Form.useForm<FormValues>()
  const [presetsCollapsed, setPresetsCollapsed] = useState(true)
  const [modalVisible, setModalVisible] = useState(false)
  const [selectedPreset, setSelectedPreset] = useState<Preset | null>(null)
  const [selectedSections, setSelectedSections] = useState<string[]>([
    'shot',
    'lensEffects',
    'subject',
    'scene',
    'visualDetails',
    'cinematography',
    'textElements',
    'style'
  ])

  const toggleLanguage = useCallback(() => {
    const newLang = i18n.language === 'en' ? 'ru' : 'en'
    i18n.changeLanguage(newLang)
  }, [i18n])

  const sections = useMemo<SectionDef[]>(
    () => [
      {
        key: 'shot' as const,
        label: t('shot'),
        fields: [
          { key: 'composition' as const, label: t('composition') },
          { key: 'cameraSettings' as const, label: t('cameraSettings') },
          { key: 'filmGrain' as const, label: t('filmGrain') }
        ]
      },
      {
        key: 'lensEffects' as const,
        label: t('lensEffects'),
        fields: [
          { key: 'optics' as const, label: t('optics') },
          { key: 'artifacts' as const, label: t('artifacts') },
          { key: 'depthOfField' as const, label: t('depthOfField') }
        ]
      },
      {
        key: 'subject' as const,
        label: t('subject'),
        fields: [
          { key: 'description' as const, label: t('description') },
          { key: 'wardrobe' as const, label: t('wardrobe') },
          { key: 'grooming' as const, label: t('grooming') }
        ]
      },
      {
        key: 'scene' as const,
        label: t('scene'),
        fields: [
          { key: 'location' as const, label: t('location') },
          { key: 'timeOfDay' as const, label: t('timeOfDay') },
          { key: 'environment' as const, label: t('environment') }
        ]
      },
      {
        key: 'visualDetails' as const,
        label: t('visualDetails'),
        fields: [
          { key: 'action' as const, label: t('action') },
          { key: 'props' as const, label: t('props') },
          { key: 'physics' as const, label: t('physics') }
        ]
      },
      {
        key: 'cinematography' as const,
        label: t('cinematography'),
        fields: [
          { key: 'lighting' as const, label: t('lighting') },
          { key: 'tone' as const, label: t('tone') },
          { key: 'colorPalette' as const, label: t('colorPalette') }
        ]
      },
      {
        key: 'textElements' as const,
        label: t('textElements'),
        fields: [
          { key: 'visibleText' as const, label: t('visibleText') },
          { key: 'typography' as const, label: t('typography') },
          { key: 'placement' as const, label: t('placement') }
        ]
      },
      {
        key: 'style' as const,
        label: t('style'),
        fields: [
          { key: 'visualAesthetic' as const, label: t('visualAesthetic') }
        ]
      }
    ],
    [t]
  )

  // presets are imported from ./presets/presets

  const applyPreset = useCallback((preset: Preset) => {
    form.setFieldsValue(preset.values)
    message.success(t('presetApplied'))
    setPresetsCollapsed(true)
  }, [form, t, message])

  const openChooseModal = useCallback((preset: Preset) => {
    setSelectedPreset(preset)
    setSelectedSections(['shot', 'lensEffects', 'subject', 'scene', 'visualDetails', 'cinematography', 'textElements', 'style'])
    setModalVisible(true)
  }, [])

  const handleModalOk = useCallback(() => {
    if (!selectedPreset) return
    
    const valuesToApply: Partial<FormValues> = {}
    selectedSections.forEach((sectionKey) => {
      const sectionValue = selectedPreset.values[sectionKey as keyof FormValues]
      if (sectionValue) {
        (valuesToApply as Record<string, unknown>)[sectionKey] = sectionValue
      }
    })
    
    form.setFieldsValue(valuesToApply as FormValues)
    message.success(t('presetApplied'))
    setModalVisible(false)
    setPresetsCollapsed(true)
  }, [selectedPreset, selectedSections, form, t, message])

  const handleModalCancel = useCallback(() => {
    setModalVisible(false)
  }, [])

  const handleSectionToggle = useCallback((sectionKey: string) => {
    setSelectedSections(prev => 
      prev.includes(sectionKey) 
        ? prev.filter(k => k !== sectionKey)
        : [...prev, sectionKey]
    )
  }, [])

  const handleSelectAll = useCallback(() => {
    const allSections = ['shot', 'lensEffects', 'subject', 'scene', 'visualDetails', 'cinematography', 'textElements', 'style']
    if (selectedSections.length === allSections.length) {
      setSelectedSections([])
    } else {
      setSelectedSections(allSections)
    }
  }, [selectedSections])

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
    }
  }, [t, message])

  const onFinish = useCallback(
    async (values: FormValues) => {
      const compiled = buildOutput(values)
      if (compiled) {
        await copyToClipboard(compiled)
      } else {
        message.info(t('nothingToCopy'))
      }
    },
    [buildOutput, copyToClipboard, t, message]
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
  }, [form, buildOutput, copyToClipboard, t, message])

  const parseClipboardToForm = useCallback(async () => {
    try {
      const text = await navigator.clipboard.readText()
      
      if (!text || text.trim().length === 0) {
        message.error(t('clipboardEmpty'))
        return
      }

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
        message.error(t('noValidSections'))
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
        message.error(t('noDataParsed'))
        return
      }
      form.setFieldsValue(found as FormValues)
      message.success(t('pasteSuccess'))
    } catch {
      message.error(t('pasteClipboardFailed'))
    }
  }, [form, t, message])

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Layout.Header style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', position: 'fixed', left: 0, right: 0, top: 0, zIndex: 100, background: 'black', padding: '0 16px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', maxWidth: 1280, margin: '0 auto' }}>

        <Typography.Title level={2} style={{ margin: 0, color: 'white', fontSize: '28px' }} className='bbh'>{t('title')}</Typography.Title>
        <Space>
          <Button 
            onClick={toggleLanguage} 
            style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: '15px' }} 
            ghost
            icon={<GlobalOutlined />}
          >
            {i18n.language.toUpperCase()}
          </Button>
          <Button onClick={() => setPresetsCollapsed((v) => !v)} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: '15px' }} ghost>
            <span>{t('presets')}</span>
          
          </Button>
        </Space>
        
        </div>
      </Layout.Header>

      <Layout style={{ width: '100%', flex: 1 }}>
        <Layout.Content style={{ padding: 0, paddingTop: 76, fontSize: '16px', width: '100%' }}>
            <Col span={16} style={{ maxWidth: '100%', flex: 1 }}>
              <Card style={{ width: '100%' }}>
                <Form form={form} layout="vertical" onFinish={onFinish} autoComplete="off" size='middle' style={{ width: '100%' }}>
                  <Collapse 
                    defaultActiveKey={sections.map(s => s.key)}
                    style={{ background: 'transparent', border: 'none' }}
                  >
                    {sections.map((section) => (
                      <Collapse.Panel 
                        key={section.key}
                        header={<span style={{ fontSize: '20px', fontWeight: 600 }}>{section.label}</span>}
                        style={{ marginBottom: 8, border: '1px solid #d9d9d9', borderRadius: 8 }}
                      >
                        <Row gutter={[8, 4]}>
                          {section.fields.map((field) => (
                            <Col span={24} key={field.key}>
                              <Form.Item 
                                name={[section.key as string, field.key as string]} 
                                label={<span style={{ fontSize: '16px', fontWeight: 500 }}>{field.label}</span>}
                                style={{ marginBottom: 12 }}
                              >
                                <Input.TextArea
                                  allowClear
                                  showCount
                                  autoSize={{ minRows: 2, maxRows: 6 }}
                                  placeholder={`${field.label}...`}
                                  style={{ fontSize: '15px' }}
                                />
                              </Form.Item>
                            </Col>
                          ))}
                        </Row>
                      </Collapse.Panel>
                    ))}
                  </Collapse>
                </Form>
              </Card>
            </Col>

        </Layout.Content>

      </Layout>

      <Modal
        title={<span style={{ fontSize: '24px', fontWeight: 600 }}>{t('imagePresets')}</span>}
        open={!presetsCollapsed}
        onCancel={() => setPresetsCollapsed(true)}
        footer={null}
        width="100vw"
        style={{ top: 0, maxWidth: '100vw', paddingBottom: 0 }}
        styles={{
          body: { 
            maxHeight: 'calc(100vh - 110px)', 
            overflowY: 'auto',
            padding: '24px'
          }
        }}
      >
        <Row gutter={[16, 16]} style={{ display: 'flex', flexWrap: 'wrap', gap: 16 }}>
          {presets.map((p) => (
            <Card
              key={p.id}
              hoverable
              style={{ flex: '1 1 280px', minWidth: '280px', maxWidth: '400px' }}
              cover={<img src={p.img} alt={p.title} style={{ width: '100%', aspectRatio: '3/4', objectFit: 'contain', backgroundColor: '#f0f0f0' }} />}
              styles={{ body: { padding: 8 } }}
            >
              <Card.Meta title={<span style={{ fontSize: '16px', fontWeight: 500 }}>{p.title}</span>}/>
              <Space style={{ marginTop: 12, width: '100%', justifyContent: 'space-between' }}>
                <Button type="primary" onClick={() => applyPreset(p)} style={{ fontSize: '15px' }}>
                  {t('copyAll')}
                </Button>
                <Button onClick={() => openChooseModal(p)} style={{ fontSize: '15px' }}>
                  {t('options')}
                </Button>
              </Space>
            </Card>
          ))}
        </Row>
      </Modal>

      <FloatButton
        icon={<FileAddOutlined style={{ }} />}
        tooltip={<span style={{ fontSize: '14px' }}>{t('paste')}</span>}
        onClick={parseClipboardToForm}
        style={{ right: 24, bottom: 220, width: 60, height: 60 }}
        shape="circle"
      />
      <FloatButton
        icon={<DeleteOutlined style={{ color: '#ff4d4f'}} />}
        tooltip={<span style={{ fontSize: '14px' }}>{t('reset')}</span>}
        onClick={onReset}
        style={{ right: 24, bottom: 140, width: 60, height: 60 }}
        shape="circle"
      />
      <FloatButton
        icon={<CopyOutlined style={{ }} />}
        tooltip={<span style={{ fontSize: '14px' }}>{t('copy')}</span>}
        type="primary"
        onClick={handleRenderAndCopy}
        style={{ right: 24, bottom: 60, width: 60, height: 60 }}
        shape="circle"
      />

      <Modal
        title={<span style={{ fontSize: '20px' }}>{`${t('selectSections')} ${selectedPreset?.title || 'preset'}`}</span>}
        open={modalVisible}
        onOk={handleModalOk}
        onCancel={handleModalCancel}
        okText={t('applySelected')}
        cancelText={t('cancel')}
        width={600}
      >
        <Space direction="vertical" style={{ width: '100%', fontSize: '16px' }}>
          <Checkbox
            checked={selectedSections.length === sections.length}
            indeterminate={selectedSections.length > 0 && selectedSections.length < sections.length}
            onChange={handleSelectAll}
            style={{ fontSize: '16px' }}
          >
            <strong style={{ fontSize: '16px' }}>{t('selectAll')}</strong>
          </Checkbox>
          <Divider style={{ margin: '12px 0' }} />
          <Space direction="vertical" style={{ width: '100%' }}>
            {sections.map((section) => (
              <Checkbox
                key={section.key}
                checked={selectedSections.includes(section.key)}
                onChange={() => handleSectionToggle(section.key)}
                style={{ fontSize: '16px' }}
              >
                <span style={{ fontSize: '16px' }}>{section.label}</span>
              </Checkbox>
            ))}
          </Space>
        </Space>
      </Modal>
    </Layout>
  )
}

export default App
