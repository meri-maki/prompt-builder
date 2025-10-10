import { useCallback, useMemo, useState } from 'react'
import { Button, Card, Col, Divider, Form, Input, Row, Space, Typography, message } from 'antd'
import './App.css'
import type { FormValues, SectionDef, Preset } from './types/prompt'
import { presets } from './presets/presets'

const App = () => {
  const [form] = Form.useForm<FormValues>()
  const [output, setOutput] = useState('')
  const [copying, setCopying] = useState(false)
  const [presetsCollapsed, setPresetsCollapsed] = useState(false)

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
    message.success('Preset applied')
  }, [form])

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
      message.success('Rendered text copied to clipboard')
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
        message.success('Rendered text copied to clipboard')
      } catch {
        message.error('Failed to copy to clipboard')
      }
    } finally {
      setCopying(false)
    }
  }, [])

  const onFinish = useCallback(
    async (values: FormValues) => {
      const compiled = buildOutput(values)
      setOutput(compiled)
      if (compiled) {
        await copyToClipboard(compiled)
      } else {
        message.info('Nothing to copy — please fill at least one block')
      }
    },
    [buildOutput, copyToClipboard]
  )

  const onReset = useCallback(() => {
    form.resetFields()
    setOutput('')
  }, [form])

  return (
    <div>
      <Card
        title="Presets"
        size="small"
        style={{ marginBottom: 16 }}
        extra={(
          <Button type="link" onClick={() => setPresetsCollapsed((v) => !v)}>
            {presetsCollapsed ? 'Expand' : 'Collapse'}
          </Button>
        )}
      >
        {!presetsCollapsed && (
          <Row gutter={12} wrap={true} style={{  gap: 8, padding: 12 }} className='presets-row'>
            {presets.map((p) => (
              <Col key={p.id} flex="1 1 20%" style={{ maxWidth: 350 }}>
                <Card
                  hoverable
                  style={{ cursor: 'pointer', width: '100%' }}
                  cover={<img src={p.img} alt={p.title} style={{ height: 250, width: '100%', objectFit: 'cover' }} />}
                  onClick={() => applyPreset(p)}
                  styles={{ body: { padding: 12 } }}
                >
                  <Card.Meta title={p.title}/>
                </Card>
              </Col>
            ))}
          </Row>
        )}
      </Card>

      <Typography.Title level={3} style={{ marginBottom: 16, color: 'white' }}>Prompt Builder</Typography.Title>
      <Row gutter={[16, 16]}>
        <Col xs={24} md={14}>
          <Card title="Input Blocks" bordered>
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
                            placeholder={`Enter ${field.label.toLowerCase()}...`}
                          />
                        </Form.Item>
                      </Col>
                    ))}
                  </Row>
                  <Divider style={{ margin: '8px 0 16px' }} />
                </div>
              ))}

              <Form.Item>
                <Space>
                  <Button type="primary" htmlType="submit" loading={copying}>
                    Render & Copy
                  </Button>
                  <Button htmlType="button" onClick={onReset} disabled={copying}>
                    Reset
                  </Button>
                </Space>
              </Form.Item>
            </Form>
          </Card>
        </Col>

        <Col xs={24} md={10}>
          <Card title="Rendered Output" bordered>
            {output ? (
              <>
                <Typography.Paragraph copyable={{ text: output }} style={{ whiteSpace: 'pre-wrap' }}>
                  {output}
                </Typography.Paragraph>
                <Divider />
                <Typography.Text type="secondary">Auto-copied on submit. Use the copy button above to copy again.</Typography.Text>
              </>
            ) : (
              <Typography.Text type="secondary">No output yet. Fill the form and click "Render & Copy".</Typography.Text>
            )}
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default App
