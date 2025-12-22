import { useCallback, useMemo, useState, useEffect } from 'react'
import { Button, Card, Col, Collapse, Divider, Form, Input, Layout, Row, Space, Modal, Checkbox, FloatButton, App as AntdApp, Tag, Empty } from 'antd'
import { useTranslation } from 'react-i18next'
import type { FormValues, SectionDef, Preset, PresetTag } from '../../types/prompt'
import { presets } from '../../presets/presets'
import { CopyOutlined, DeleteOutlined, FileAddOutlined, FileTextOutlined, LockOutlined, UnlockOutlined, ControlOutlined  } from '@ant-design/icons'
import { useFormStore } from '../../shared/store/useFormStore'
import '../../App.css'

export const Builder = () => {
  const { t } = useTranslation()
  const { message } = AntdApp.useApp()
  
  // Use Zustand store for persistent state
  const { formData, lockedFields, setFormData, setLockedFields, resetForm } = useFormStore()
  
  // Convert lockedFields array to Set for easier checking
  const lockedFieldsSet = useMemo(() => new Set(lockedFields), [lockedFields])

  const [form] = Form.useForm<FormValues>()
  
  // Sync form with store data on mount and when formData changes
  useEffect(() => {
    if (Object.keys(formData).length > 0) {
      form.setFieldsValue(formData as FormValues)
    }
  }, [form, formData])
  
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
  const [pasteModalVisible, setPasteModalVisible] = useState(false)
  const [parsedData, setParsedData] = useState<Partial<FormValues> | null>(null)
  const [pasteSelectedSections, setPasteSelectedSections] = useState<string[]>([
    'shot',
    'lensEffects',
    'subject',
    'scene',
    'visualDetails',
    'cinematography',
    'textElements',
    'style'
  ])
  const [selectedFilterTags, setSelectedFilterTags] = useState<PresetTag[]>([])

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

  const filteredPresets = useMemo(() => {
    if (selectedFilterTags.length === 0) {
      return presets
    }
    return presets.filter((preset) => {
      return selectedFilterTags.every((tag) => preset.tags?.includes(tag))
    })
  }, [selectedFilterTags])

  const toggleFilterTag = useCallback((tag: PresetTag) => {
    setSelectedFilterTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    )
  }, [])

  const filterTags: { tag: PresetTag; label: string }[] = [
    { tag: 'bw', label: 'BLACK&WHITE' },
    { tag: 'non-portrait', label: 'NON-PORTRAIT' },
    { tag: 'faceless', label: 'FACELESS' },
    { tag: 'male', label: 'MALE' }
  ]

  const applyPreset = useCallback((preset: Preset) => {
    const valuesToApply: Partial<FormValues> = {}
    Object.keys(preset.values).forEach((sectionKey) => {
      const sectionValue = preset.values[sectionKey as keyof FormValues] as Record<string, string> | undefined
      if (sectionValue) {
        const section = sections.find(s => s.key === sectionKey)
        if (section) {
          const filteredSection: Record<string, string> = {}
          section.fields.forEach((field) => {
            const fieldPath = `${sectionKey}.${field.key}`
            if (!lockedFieldsSet.has(fieldPath) && sectionValue[field.key]) {
              filteredSection[field.key] = sectionValue[field.key]
            }
          })
          if (Object.keys(filteredSection).length > 0) {
            (valuesToApply as Record<string, unknown>)[sectionKey] = filteredSection
          }
        }
      }
    })
    
    form.setFieldsValue(valuesToApply as FormValues)
    // Sync to store
    const newFormData = form.getFieldsValue()
    setFormData(newFormData)
    message.success(t('presetApplied'))
    setPresetsCollapsed(true)
  }, [form, t, message, sections, lockedFieldsSet, setFormData])

  const openChooseModal = useCallback((preset: Preset) => {
    setSelectedPreset(preset)
    setSelectedSections(['shot', 'lensEffects', 'subject', 'scene', 'visualDetails', 'cinematography', 'textElements', 'style'])
    setModalVisible(true)
  }, [])

  const handleModalOk = useCallback(() => {
    if (!selectedPreset) return
    
    const valuesToApply: Partial<FormValues> = {}
    selectedSections.forEach((sectionKey) => {
      const sectionValue = selectedPreset.values[sectionKey as keyof FormValues] as Record<string, string> | undefined
      if (sectionValue) {
        const section = sections.find(s => s.key === sectionKey)
        if (section) {
          const filteredSection: Record<string, string> = {}
          section.fields.forEach((field) => {
            const fieldPath = `${sectionKey}.${field.key}`
            if (!lockedFieldsSet.has(fieldPath) && sectionValue[field.key]) {
              filteredSection[field.key] = sectionValue[field.key]
            }
          })
          if (Object.keys(filteredSection).length > 0) {
            (valuesToApply as Record<string, unknown>)[sectionKey] = filteredSection
          }
        }
      }
    })
    
    form.setFieldsValue(valuesToApply as FormValues)
    // Sync to store
    const newFormData = form.getFieldsValue()
    setFormData(newFormData)
    message.success(t('presetApplied'))
    setModalVisible(false)
    setPresetsCollapsed(true)
  }, [selectedPreset, selectedSections, form, t, message, sections, lockedFieldsSet, setFormData])

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

  const handlePasteModalOk = useCallback(() => {
    if (!parsedData) return
    
    const valuesToApply: Partial<FormValues> = {}
    pasteSelectedSections.forEach((sectionKey) => {
      const sectionValue = parsedData[sectionKey as keyof FormValues] as Record<string, string> | undefined
      if (sectionValue) {
        const section = sections.find(s => s.key === sectionKey)
        if (section) {
          const filteredSection: Record<string, string> = {}
          section.fields.forEach((field) => {
            const fieldPath = `${sectionKey}.${field.key}`
            if (!lockedFieldsSet.has(fieldPath) && sectionValue[field.key]) {
              filteredSection[field.key] = sectionValue[field.key]
            }
          })
          if (Object.keys(filteredSection).length > 0) {
            (valuesToApply as Record<string, unknown>)[sectionKey] = filteredSection
          }
        }
      }
    })
    
    form.setFieldsValue(valuesToApply as FormValues)
    // Sync to store
    const newFormData = form.getFieldsValue()
    setFormData(newFormData)
    message.success(t('pasteSuccess'))
    setPasteModalVisible(false)
    setParsedData(null)
  }, [parsedData, pasteSelectedSections, form, t, message, sections, lockedFieldsSet, setFormData])

  const handlePasteModalCancel = useCallback(() => {
    setPasteModalVisible(false)
    setParsedData(null)
  }, [])

  const handlePasteSectionToggle = useCallback((sectionKey: string) => {
    setPasteSelectedSections(prev => 
      prev.includes(sectionKey) 
        ? prev.filter(k => k !== sectionKey)
        : [...prev, sectionKey]
    )
  }, [])

  const handlePasteSelectAll = useCallback(() => {
    const allSections = ['shot', 'lensEffects', 'subject', 'scene', 'visualDetails', 'cinematography', 'textElements', 'style']
    if (pasteSelectedSections.length === allSections.length) {
      setPasteSelectedSections([])
    } else {
      setPasteSelectedSections(allSections)
    }
  }, [pasteSelectedSections])

  const englishLabels = useMemo(() => ({
    sections: {
      shot: 'SHOT',
      lensEffects: 'LENS EFFECTS',
      subject: 'SUBJECT',
      scene: 'SCENE',
      visualDetails: 'VISUAL DETAILS',
      cinematography: 'CINEMATOGRAPHY',
      textElements: 'TEXT ELEMENTS',
      style: 'STYLE',
    },
    fields: {
      composition: 'Composition',
      cameraSettings: 'Camera Settings',
      filmGrain: 'Film Grain',
      optics: 'Optics',
      artifacts: 'Artifacts',
      depthOfField: 'Depth of Field',
      description: 'Description',
      wardrobe: 'Wardrobe',
      grooming: 'Grooming',
      location: 'Location',
      timeOfDay: 'Time of Day',
      environment: 'Environment',
      action: 'Action',
      props: 'Props',
      physics: 'Physics',
      lighting: 'Lighting',
      tone: 'Tone',
      colorPalette: 'Color Palette',
      visibleText: 'Visible Text',
      typography: 'Typography',
      placement: 'Placement',
      visualAesthetic: 'Visual Aesthetic',
    },
  }), [])

  const buildOutput = useCallback((values: FormValues) => {
    const lines: string[] = []
    sections.forEach((section) => {
      const sectionValue = values[section.key] as Record<string, string | undefined> | undefined
      if (!sectionValue) return
      const bullets: string[] = []
      section.fields.forEach((field) => {
        const raw = sectionValue[field.key]
        if (raw && raw.trim()) {
          const englishFieldLabel = englishLabels.fields[field.key as keyof typeof englishLabels.fields] || field.key
          bullets.push(`• ${englishFieldLabel}: ${raw.trim()}`)
        }
      })
      if (bullets.length > 0) {
        const englishSectionLabel = englishLabels.sections[section.key as keyof typeof englishLabels.sections] || section.key
        lines.push(`${englishSectionLabel}:  ${bullets.join('  ')}`)
      }
    })
    return lines.join('\n\n')
  }, [sections, englishLabels])

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

  // Save form data to store whenever it changes
  const handleFormValuesChange = useCallback(() => {
    const currentFormData = form.getFieldsValue()
    setFormData(currentFormData)
  }, [form, setFormData])

  const onReset = useCallback(() => {
    form.resetFields()
    resetForm()
  }, [form, resetForm])

  const toggleFieldLock = useCallback((sectionKey: string, fieldKey: string) => {
    const fieldPath = `${sectionKey}.${fieldKey}`
    const isLocked = lockedFieldsSet.has(fieldPath)
    if (isLocked) {
      setLockedFields(lockedFields.filter(f => f !== fieldPath))
    } else {
      setLockedFields([...lockedFields, fieldPath])
    }
  }, [lockedFieldsSet, lockedFields, setLockedFields])

  const lockAllInSection = useCallback((sectionKey: string) => {
    const section = sections.find(s => s.key === sectionKey)
    if (!section) return
    
    const newLockedFields = [...lockedFields]
    section.fields.forEach((field) => {
      const fieldPath = `${sectionKey}.${field.key}`
      if (!newLockedFields.includes(fieldPath)) {
        newLockedFields.push(fieldPath)
      }
    })
    setLockedFields(newLockedFields)
  }, [sections, lockedFields, setLockedFields])

  const unlockAllInSection = useCallback((sectionKey: string) => {
    const section = sections.find(s => s.key === sectionKey)
    if (!section) return
    
    const sectionFieldPaths = section.fields.map(f => `${sectionKey}.${f.key}`)
    setLockedFields(lockedFields.filter(f => !sectionFieldPaths.includes(f)))
  }, [sections, lockedFields, setLockedFields])

  const unlockAll = useCallback(() => {
    setLockedFields([])
  }, [setLockedFields])

  const clearSection = useCallback((sectionKey: string) => {
    const section = sections.find(s => s.key === sectionKey)
    if (!section) return
    
    const fieldsToClear: Record<string, string> = {}
    section.fields.forEach((field) => {
      const fieldPath = `${sectionKey}.${field.key}`
      if (!lockedFieldsSet.has(fieldPath)) {
        fieldsToClear[field.key] = ''
      }
    })
    
    if (Object.keys(fieldsToClear).length > 0) {
      const currentValues = form.getFieldValue(sectionKey as keyof FormValues) || {}
      form.setFieldsValue({
        [sectionKey as keyof FormValues]: { ...currentValues, ...fieldsToClear }
      } as FormValues)
      // Sync to store
      const newFormData = form.getFieldsValue()
      setFormData(newFormData)
    }
  }, [form, sections, lockedFieldsSet, setFormData])

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
      
      const valuesToApply: Partial<FormValues> = {}
      Object.keys(found).forEach((sectionKey) => {
        const sectionValue = found[sectionKey as keyof FormValues] as Record<string, string> | undefined
        if (sectionValue) {
          const section = sections.find(s => s.key === sectionKey)
          if (section) {
            const filteredSection: Record<string, string> = {}
            section.fields.forEach((field) => {
              const fieldPath = `${sectionKey}.${field.key}`
              if (!lockedFieldsSet.has(fieldPath) && sectionValue[field.key]) {
                filteredSection[field.key] = sectionValue[field.key]
              }
            })
            if (Object.keys(filteredSection).length > 0) {
              (valuesToApply as Record<string, unknown>)[sectionKey] = filteredSection
            }
          }
        }
      })
      
      form.setFieldsValue(valuesToApply as FormValues)
      // Sync to store
      const newFormData = form.getFieldsValue()
      setFormData(newFormData)
      message.success(t('pasteSuccess'))
    } catch {
      message.error(t('pasteClipboardFailed'))
    }
  }, [form, t, message, sections, lockedFieldsSet, setFormData])

  const parseClipboardToFormPartial = useCallback(async () => {
    try {
      const text = await navigator.clipboard.readText()
      
      if (!text || text.trim().length === 0) {
        message.error(t('clipboardEmpty'))
        return
      }

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
      
      setParsedData(found)
      setPasteSelectedSections(Object.keys(found) as string[])
      setPasteModalVisible(true)
    } catch {
      message.error(t('pasteClipboardFailed'))
    }
  }, [t, message])

  return (
    <Layout style={{ width: '100%', flex: 1 }}>
      <Layout.Content style={{ padding: 0, paddingTop: 76, fontSize: '16px', width: '100%' }}>
        <Col span={16} style={{ maxWidth: '100%', flex: 1 }}>
            <Form form={form} layout="vertical" onFinish={onFinish} onValuesChange={handleFormValuesChange} initialValues={formData} autoComplete="off" size='middle' style={{ width: '100%' }}>
              <Collapse 
                defaultActiveKey={sections.map(s => s.key)}
                style={{ background: 'transparent', border: 'none' }}
              >
                {sections.map((section) => {
                  const sectionFields = section.fields.map(f => `${section.key}.${f.key}`)
                  const allLocked = sectionFields.every(path => lockedFieldsSet.has(path))
                  const someLocked = sectionFields.some(path => lockedFieldsSet.has(path))
                  
                  return (
                    <Collapse.Panel 
                      key={section.key}
                      header={<Space style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }}><span style={{ fontSize: '20px', fontWeight: 600 }}>{section.label}</span></Space>}
                      extra={
                        <Space >
                          {someLocked && (
                            <Button 
                              size="small" 
                              onClick={(e) => {
                                e.stopPropagation()
                                unlockAllInSection(section.key)
                              }}
                              style={{ fontSize: '14px' }}
                              icon={<UnlockOutlined />}
                            >
                              {t('unlockAll')}
                            </Button>
                          )}
                          {!allLocked && (
                            <Button 
                              size="small" 
                              onClick={(e) => {
                                e.stopPropagation()
                                lockAllInSection(section.key)
                              }}
                              style={{ fontSize: '14px' }}
                              icon={<LockOutlined />}
                            >
                              {t('lockAll')}
                            </Button>
                          )}
                          <Button 
                            size="small" 
                            onClick={(e) => {
                              e.stopPropagation()
                              clearSection(section.key)
                            }}
                            style={{ fontSize: '14px' }}
                          >
                            {t('clear')}
                          </Button>
                        </Space>
                      }
                      style={{ marginBottom: 8,  border: '1px solid #d9d9d9', borderRadius: 8 }}
                    >
                      <Row gutter={[8, 4]}>
                        {section.fields.map((field) => {
                          const fieldPath = `${section.key}.${field.key}`
                          const isLocked = lockedFieldsSet.has(fieldPath)
                          
                          return (
                            <Col span={24} key={field.key}>
                              <Form.Item 
                                name={[section.key as string, field.key as string]} 
                                label={
                                  <Space style={{ width: '100%', justifyContent: 'space-between' }} size={4}>
                                    <span style={{ fontSize: '16px', fontWeight: 500 }}>{field.label}</span>
                                    <Button
                                      type="text"
                                      size="small"
                                      icon={isLocked ? <LockOutlined /> : <UnlockOutlined />}
                                      onClick={() => toggleFieldLock(section.key, field.key)}
                                      style={{ 
                                        color: isLocked ? '#ff4d4f' : '#8c8c8c',
                                        padding: '0 4px'
                                      }}
                                    />
                                  </Space>
                                }
                                style={{ marginBottom: 12 }}
                              >
                                <Input.TextArea
                                  allowClear
                                  showCount
                                  autoSize={{ minRows: 2, maxRows: 6 }}
                                  placeholder={`${field.label}...`}
                                  style={{ fontSize: '15px' }}
                                  disabled={isLocked}
                                  onPaste={(e) => {
                                    if (isLocked) {
                                      e.preventDefault()
                                    }
                                  }}
                                />
                              </Form.Item>
                            </Col>
                          )
                        })}
                      </Row>
                    </Collapse.Panel>
                  )
                })}
              </Collapse>
            </Form>

        </Col>
      </Layout.Content>

      <Modal
        title={
          <div>
            <div style={{ fontSize: '24px', fontWeight: 600, marginBottom: 16 }}>{t('imagePresets')}</div>
            <Space style={{ width: '100%', flexWrap: 'wrap' }}>
              {filterTags.map(({ tag, label }) => (
                <Tag
                  key={tag}
                  onClick={() => toggleFilterTag(tag)}
                  style={{
                    cursor: 'pointer',
                    padding: '4px 12px',
                    fontSize: '14px',
                    userSelect: 'none'
                  }}
                  color={selectedFilterTags.includes(tag) ? 'blue' : 'default'}
                >
                  {label}
                </Tag>
              ))}
            </Space>
          </div>
        }
        open={!presetsCollapsed}
        onCancel={() => setPresetsCollapsed(true)}
        footer={null}
        width="100vw"
        style={{ top: 0, maxWidth: '100vw', paddingBottom: 0 }}
        styles={{
          header: {
            position: 'sticky',
            top: 0,
            zIndex: 10,
            background: 'white',
            borderBottom: '1px solid #f0f0f0',
            paddingBottom: '16px'
          },
          body: { 
            maxHeight: 'calc(100vh - 200px)', 
            overflowY: 'auto',
            padding: '24px'
          }
        }}
      >
        {filteredPresets.length === 0 ? (
          <Empty
            description={<span style={{ fontSize: '16px', color: '#666' }}>No presets match the selected filters</span>}
            style={{ margin: '60px 0' }}
          />
        ) : (
          <Row gutter={[16, 16]} style={{ display: 'flex', flexWrap: 'wrap', gap: 16 }}>
            {filteredPresets.map((p) => (
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
        )}
      </Modal>
<FloatButton
        icon={<ControlOutlined style={{ }} />}
        onClick={() => setPresetsCollapsed((v) => !v)}
        style={{ right: 24, bottom: 390 }}
        shape="square"
        type="primary"
        className='float-button'
        description={<span style={{ fontSize: '14px' }}>{t('presets')}</span>}
      />
      <FloatButton
        icon={<FileAddOutlined style={{ }} />}
        onClick={parseClipboardToForm}
        style={{ right: 24, bottom: 320 }}
        shape="square"
        className='float-button'
        description={<span style={{ fontSize: '14px' }}>{t('paste')}</span>}
      />
      <FloatButton
        icon={<FileTextOutlined style={{ }} />}
        onClick={parseClipboardToFormPartial}
        style={{ right: 24, bottom: 250}}
        shape="square"
        className='float-button'
        description={<span style={{ fontSize: '14px' }}>{t('partialPaste')}</span>}
      />
      <FloatButton
        icon={<DeleteOutlined style={{ color: '#ff4d4f'}} />}
        onClick={onReset}
        style={{ right: 24, bottom: 180 }}
        shape="square"
        className='float-button'
        description={<span style={{ fontSize: '14px' }}>{t('reset')}</span>}
      />
        {lockedFields.length > 0 && (
          <FloatButton
            icon={<UnlockOutlined style={{ }} />}
            onClick={unlockAll}
            style={{ right: 24, bottom: 40 }}
            shape="square"
            className='float-button'
            description={<span style={{ fontSize: '14px' }}>{t('unlockAll')}</span>}
          />
        )}
      <FloatButton
        icon={<CopyOutlined style={{ }} />}
        type="primary"
        onClick={handleRenderAndCopy}
        style={{ right: 24, bottom: 110 }}
        shape="square"
        className='float-button'
        description={<span style={{ fontSize: '14px' }}>{t('copy')}</span>}
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

      <Modal
        title={<span style={{ fontSize: '20px' }}>{t('selectSectionsToPaste')}</span>}
        open={pasteModalVisible}
        onOk={handlePasteModalOk}
        onCancel={handlePasteModalCancel}
        okText={t('applySelected')}
        cancelText={t('cancel')}
        width={800}
      >
        <Space direction="vertical" style={{ width: '100%', fontSize: '16px' }}>
          <Checkbox
            checked={pasteSelectedSections.length === sections.length}
            indeterminate={pasteSelectedSections.length > 0 && pasteSelectedSections.length < sections.length}
            onChange={handlePasteSelectAll}
            style={{ fontSize: '16px' }}
          >
            <strong style={{ fontSize: '16px' }}>{t('selectAll')}</strong>
          </Checkbox>
          <Divider style={{ margin: '12px 0' }} />
          <Space direction="vertical" style={{ width: '100%' }}>
            {sections.map((section) => {
              const sectionData = parsedData?.[section.key as keyof FormValues] as Record<string, string> | undefined
              const hasContent = sectionData && Object.values(sectionData).some(value => value && value.trim())
              
              if (!hasContent) return null
              
              return (
                <div key={section.key} style={{ border: '1px solid #d9d9d9', borderRadius: '8px', padding: '12px', marginBottom: '8px' }}>
                  <Checkbox
                    checked={pasteSelectedSections.includes(section.key)}
                    onChange={() => handlePasteSectionToggle(section.key)}
                    style={{ fontSize: '16px', marginBottom: '8px' }}
                  >
                    <span style={{ fontSize: '16px', fontWeight: 600 }}>{section.label}</span>
                  </Checkbox>
                  <div style={{ marginLeft: '24px', fontSize: '14px', color: '#666' }}>
                    {section.fields.map((field) => {
                      const value = sectionData?.[field.key]
                      if (!value || !value.trim()) return null
                      
                      return (
                        <div key={field.key} style={{ marginBottom: '4px' }}>
                          <strong>{field.label}:</strong> {value}
                        </div>
                      )
                    })}
                  </div>
                </div>
              )
            })}
          </Space>
        </Space>
      </Modal>
    </Layout>
  )
}
