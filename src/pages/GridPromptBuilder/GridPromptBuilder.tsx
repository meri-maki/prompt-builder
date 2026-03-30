/**
 * Interactive guide page for building 2x2 campaign grid prompts for Nano Banana.
 * Users assign composition presets or poses-guide prompts to each slot and get a ready-to-copy prompt.
 */
import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { Alert, App as AntdApp, Button, Card, Col, Input, Layout, Modal, Row, Switch, Tabs, Typography } from 'antd'
import { Trans, useTranslation } from 'react-i18next'
import { classNames } from '../../shared/lib/classNames/classNames'
import presetExamplesSourceFrame from '../../assets/grid/preset-examples-source-frame.webp'
import { getPoseImage, posesData } from '../PosesNAngles/posesData'
import cls from './GridPromptBuilder.module.scss'
import { gridPresetCategoryOrder, gridPresets, type GridPresetCategory } from './gridPresetsData'

const { Title, Text, Paragraph } = Typography

type GridSlotKey = 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight'
type GridSlots = Record<GridSlotKey, string | null>

type PickerTabKey = GridPresetCategory | 'poses'

type SlotContent =
  | { type: 'grid'; preset: (typeof gridPresets)[number] }
  | { type: 'pose'; id: number; text: string; image: string }
  | null

const POSE_SLOT_PREFIX = 'pose:'

const slotOrder: GridSlotKey[] = ['topLeft', 'topRight', 'bottomLeft', 'bottomRight']

const slotPromptPrefix: Record<GridSlotKey, string> = {
  topLeft: 'top left image',
  topRight: 'top right image',
  bottomLeft: 'bottom left image',
  bottomRight: 'bottom right image',
}

const slotLabelKey: Record<GridSlotKey, string> = {
  topLeft: 'gridSlotTopLeft',
  topRight: 'gridSlotTopRight',
  bottomLeft: 'gridSlotBottomLeft',
  bottomRight: 'gridSlotBottomRight',
}

const initialSlots: GridSlots = {
  topLeft: null,
  topRight: null,
  bottomLeft: null,
  bottomRight: null,
}

/**
 * Default suffix appended to the grid prompt for reference consistency (Global Style Keeper).
 */
const DEFAULT_GLOBAL_STYLE_SUFFIX =
  'Maintain strict visual consistency with the reference image: preserve character/product identity, specific material textures, signature color palette, and the overall aesthetic mood across all four frames. Vary the posing unless the exact pose is specified.'

/**
 * Returns whether a slot string encodes a pose-guide selection.
 */
const isPoseSlotValue = (value: string | null): value is string => Boolean(value?.startsWith(POSE_SLOT_PREFIX))

/**
 * Parses pose id from a pose slot value (e.g. pose:12 -> 12).
 */
const getPoseIdFromSlotValue = (value: string): number | null => {
  const raw = value.slice(POSE_SLOT_PREFIX.length)
  const id = Number(raw)
  return Number.isFinite(id) ? id : null
}

/**
 * Resolves slot storage string to grid preset or pose content for UI and prompt text.
 */
const resolveSlotContent = (
  value: string | null,
  presetsById: Record<string, (typeof gridPresets)[number]>
): SlotContent => {
  if (!value) {
    return null
  }

  if (isPoseSlotValue(value)) {
    const poseId = getPoseIdFromSlotValue(value)
    if (poseId == null) {
      return null
    }

    const pose = posesData.find((item) => item.id === poseId)
    if (!pose) {
      return null
    }

    return { type: 'pose', id: poseId, text: pose.text, image: getPoseImage(poseId) }
  }

  const preset = presetsById[value]
  if (!preset) {
    return null
  }

  return { type: 'grid', preset }
}

/**
 * Returns a shuffled copy of an array using Fisher-Yates.
 */
const shuffle = <T,>(items: T[]): T[] => {
  const list = [...items]

  for (let index = list.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1))
    const nextValue = list[index]
    list[index] = list[randomIndex]
    list[randomIndex] = nextValue
  }

  return list
}

export const GridPromptBuilder = () => {
  const { t, i18n } = useTranslation()
  const { message } = AntdApp.useApp()

  const [slots, setSlots] = useState<GridSlots>(initialSlots)
  const [activeSlot, setActiveSlot] = useState<GridSlotKey | null>(null)
  const [isPickerOpen, setIsPickerOpen] = useState(false)
  const [sourceFrameVisibleInPicker, setSourceFrameVisibleInPicker] = useState(false)
  const [activePickerTab, setActivePickerTab] = useState<PickerTabKey>('closeup')
  const [poseSearch, setPoseSearch] = useState('')
  const [globalStyleKeeperOn, setGlobalStyleKeeperOn] = useState(true)
  const [globalStyleKeeperSuffix, setGlobalStyleKeeperSuffix] = useState(DEFAULT_GLOBAL_STYLE_SUFFIX)

  const presetsById = useMemo(() => {
    return gridPresets.reduce<Record<string, (typeof gridPresets)[number]>>((accumulator, preset) => {
      accumulator[preset.id] = preset
      return accumulator
    }, {})
  }, [])

  const isRu = i18n.language.startsWith('ru')

  const filteredPoses = useMemo(() => {
    const query = poseSearch.trim().toLowerCase()
    if (!query) {
      return posesData
    }

    return posesData.filter(
      (pose) =>
        pose.text.toLowerCase().includes(query) || String(pose.id).includes(query.replace(/^#/, ''))
    )
  }, [poseSearch])

  useEffect(() => {
    if (!isPickerOpen) {
      setPoseSearch('')
      setSourceFrameVisibleInPicker(false)
    }
  }, [isPickerOpen])

  const hasSelectedPreset = useMemo(() => {
    return slotOrder.some((slotKey) => Boolean(slots[slotKey]))
  }, [slots])

  const buildSlotDescription = (slotKey: GridSlotKey): string => {
    const resolved = resolveSlotContent(slots[slotKey], presetsById)
    const baseDescription =
      resolved?.type === 'grid'
        ? resolved.preset.description
        : resolved?.type === 'pose'
          ? resolved.text
          : '[choose shot preset]'
    return `${slotPromptPrefix[slotKey]} is ${baseDescription}`
  }

  const slotDescriptions = slotOrder.map((slotKey) => buildSlotDescription(slotKey)).join(', ')
  const gridBody = `A visual campaign grid of 4 images: ${slotDescriptions}.`
  const globalSuffixTrimmed = globalStyleKeeperSuffix.trim()
  const globalSuffixPart =
    globalStyleKeeperOn && globalSuffixTrimmed ? ` ${globalSuffixTrimmed}` : ''
  const renderedPrompt = `${gridBody}${globalSuffixPart}`

  /**
   * Opens the shot preset picker for a selected grid slot.
   */
  const openPicker = (slotKey: GridSlotKey) => {
    setActiveSlot(slotKey)
    setIsPickerOpen(true)
  }

  /**
   * Assigns the selected grid preset to the currently active slot.
   */
  const handlePresetPick = (presetId: string) => {
    if (!activeSlot) {
      return
    }

    setSlots((previous) => ({
      ...previous,
      [activeSlot]: presetId,
    }))
    setIsPickerOpen(false)
    setActiveSlot(null)
  }

  /**
   * Assigns a poses-guide prompt to the active slot.
   */
  const handlePosePick = (poseId: number) => {
    if (!activeSlot) {
      return
    }

    setSlots((previous) => ({
      ...previous,
      [activeSlot]: `${POSE_SLOT_PREFIX}${poseId}`,
    }))
    setIsPickerOpen(false)
    setActiveSlot(null)
  }

  /**
   * Copies generated prompt to clipboard with fallback.
   */
  const handleCopy = async () => {
    if (!hasSelectedPreset) {
      message.warning(t('nothingToCopy'))
      return
    }

    try {
      await navigator.clipboard.writeText(renderedPrompt)
      message.success(t('gridPromptCopied'))
    } catch {
      try {
        const textarea = document.createElement('textarea')
        textarea.value = renderedPrompt
        textarea.style.position = 'fixed'
        textarea.style.left = '-9999px'
        document.body.appendChild(textarea)
        textarea.focus()
        textarea.select()
        document.execCommand('copy')
        document.body.removeChild(textarea)
        message.success(t('gridPromptCopied'))
      } catch {
        message.error(t('gridPromptCopyFailed'))
      }
    }
  }

  /**
   * Randomly fills all four slots with unique grid presets (not poses).
   */
  const handleRandomize = () => {
    const randomPresets = shuffle(gridPresets).slice(0, 4)

    setSlots({
      topLeft: randomPresets[0]?.id ?? null,
      topRight: randomPresets[1]?.id ?? null,
      bottomLeft: randomPresets[2]?.id ?? null,
      bottomRight: randomPresets[3]?.id ?? null,
    })
  }

  /**
   * Clears all slot selections.
   */
  const handleClear = () => {
    setSlots(initialSlots)
  }

  const gridTabItems = gridPresetCategoryOrder.map((category) => {
    const presets = gridPresets.filter((preset) => preset.category === category)

    return {
      key: category,
      label: t(`gridCategory${category.charAt(0).toUpperCase()}${category.slice(1)}`),
      children: (
        <div className={cls.presetPickerScroll}>
          <Row gutter={[12, 12]}>
            {presets.map((preset) => (
              <Col xs={12} sm={12} md={8} lg={6} key={preset.id}>
                <button type="button" className={cls.presetCardButton} onClick={() => handlePresetPick(preset.id)}>
                  <Card className={cls.presetCard} hoverable>
                    <img src={preset.image} alt={preset.name} className={cls.presetCardImage} />
                    <Text className={cls.presetCardTitle}>{isRu ? preset.nameRu : preset.name}</Text>
                  </Card>
                </button>
              </Col>
            ))}
          </Row>
        </div>
      ),
    }
  })

  const tabItems = [
    ...gridTabItems,
    {
      key: 'poses',
      label: t('gridCategoryPoses'),
      children: (
        <div className={cls.posesPickerWrap}>
          <Input.Search
            allowClear
            value={poseSearch}
            onChange={(e) => setPoseSearch(e.target.value)}
            placeholder={t('gridPoseSearchPlaceholder')}
            className={cls.posesSearch}
          />
          <div className={cls.posesPickerScroll}>
            <Row gutter={[12, 12]}>
              {filteredPoses.map((pose) => (
                <Col xs={12} sm={8} md={6} lg={6} key={pose.id}>
                  <button type="button" className={cls.presetCardButton} onClick={() => handlePosePick(pose.id)}>
                    <Card className={cls.presetCard} hoverable>
                      <img src={getPoseImage(pose.id)} alt={`Pose ${pose.id}`} className={cls.presetCardImage} />
                      <Text className={cls.presetCardTitle}>#{pose.id}</Text>
                      <Paragraph ellipsis={{ rows: 2 }} className={cls.poseCardSnippet}>
                        {pose.text}
                      </Paragraph>
                    </Card>
                  </button>
                </Col>
              ))}
            </Row>
          </div>
          <Link className={cls.posesGuideLink} to="/guides/posesnangles">
            {t('gridPoseOpenGuide')}
          </Link>
        </div>
      ),
    },
  ]

  return (
    <Layout style={{ width: '100%', flex: 1 }}>
      <Layout.Content className={cls.content}>
        <div className={cls.container}>
          <div className={cls.descriptionContainer}>
            <Title level={1} className={cls.title}>
              {t('gridPromptTitle')}
            </Title>
            <Paragraph className={cls.subtitle}>{t('gridPromptDescription')}</Paragraph>

            <Alert
              type="info"
              className={cls.descriptionAlert}
              message={
                <div className={cls.description}>
                  <div className={cls.descriptionSection}>
                    <div className={cls.descriptionTitle}>{t('gridPromptInstructionsTitle')}</div>
                  </div>
                  <div className={cls.descriptionSection}>
                    <div className={cls.descriptionItem}>{t('gridPromptInstructionsLine1')}</div>
                  </div>
                  <div className={cls.descriptionSection}>
                    <div className={cls.descriptionItem}>{t('gridPromptInstructionsLine2')}</div>
                  </div>
                  <div className={cls.descriptionSection}>
                    <div className={cls.descriptionItem}>{t('gridPromptInstructionsLine3')}</div>
                  </div>
                  <div className={cls.descriptionSection}>
                    <div className={cls.descriptionItem}>
                      <Trans
                        i18nKey="gridPromptInstructionsLine4"
                        components={{
                          posesLink: <Link className={cls.instructionLink} to="/guides/posesnangles" />,
                        }}
                      />
                    </div>
                  </div>
                </div>
              }
            />
          </div>

          <div className={cls.grid}>
            {slotOrder.map((slotKey) => {
              const content = resolveSlotContent(slots[slotKey], presetsById)

              return (
                <button
                  type="button"
                  key={slotKey}
                  onClick={() => openPicker(slotKey)}
                  className={classNames(cls.slot, {
                    [cls.slotEmpty]: !content,
                    [cls.slotFilled]: Boolean(content),
                  })}
                >
                  {content?.type === 'grid' ? (
                    <>
                      <img src={content.preset.image} alt={content.preset.name} className={cls.slotImage} />
                      <div className={cls.slotLabelWrap}>
                        <Text className={cls.slotTitle}>{t(slotLabelKey[slotKey])}</Text>
                        <Text className={cls.slotPresetTitle}>{isRu ? content.preset.nameRu : content.preset.name}</Text>
                      </div>
                    </>
                  ) : content?.type === 'pose' ? (
                    <>
                      <img src={content.image} alt={`Pose ${content.id}`} className={cls.slotImage} />
                      <div className={cls.slotLabelWrap}>
                        <Text className={cls.slotTitle}>{t(slotLabelKey[slotKey])}</Text>
                        <Text className={cls.slotPresetTitle}>#{content.id}</Text>
                      </div>
                    </>
                  ) : (
                    <div className={cls.slotEmptyState}>
                      <Text className={cls.slotTitle}>{t(slotLabelKey[slotKey])}</Text>
                      <Text className={cls.slotChoose}>{`+ ${t('gridChooseShot')}`}</Text>
                    </div>
                  )}
                </button>
              )
            })}
          </div>

          <div className={cls.controls}>
            <Button onClick={handleRandomize}>{t('gridPromptRandomize')}</Button>
            <Button onClick={handleClear}>{t('gridPromptClear')}</Button>
          </div>

          <div className={cls.outputPanel}>
            <Text strong>{t('gridPromptOutputLabel')}</Text>
            <Input.TextArea value={renderedPrompt} autoSize={{ minRows: 4, maxRows: 7 }} readOnly />
            <div className={cls.globalStyleKeeper}>
              <div className={cls.switchWrap}>
                <Switch checked={globalStyleKeeperOn} onChange={setGlobalStyleKeeperOn} />
                <Text strong>{t('gridGlobalStyleKeeperLabel')}</Text>
              </div>
              <Text type="secondary" className={cls.globalStyleKeeperHint}>
                {t('gridGlobalStyleKeeperHint')}
              </Text>
              <Input.TextArea
                value={globalStyleKeeperSuffix}
                onChange={(event) => setGlobalStyleKeeperSuffix(event.target.value)}
                placeholder={DEFAULT_GLOBAL_STYLE_SUFFIX}
                autoSize={{ minRows: 3, maxRows: 6 }}
                className={cls.globalStyleKeeperInput}
              />
            </div>
            <Button type="primary" onClick={handleCopy}>
              {t('gridPromptCopy')}
            </Button>
          </div>
        </div>
      </Layout.Content>

      <Modal
        open={isPickerOpen}
        title={t('gridPromptPickerTitle')}
        onCancel={() => setIsPickerOpen(false)}
        footer={null}
        width={980}
        styles={{
          header: {
            position: 'sticky',
            top: 0,
            zIndex: 10,
            background: 'white',
            borderBottom: '1px solid #f0f0f0',
            paddingBottom: '16px',
          },
          body: {
            maxHeight: 'calc(100vh - 100px)',
            overflowY: 'auto',
            padding: '24px',
          },
        }}
      >
        <div className={cls.modalSourceFrameToggleRow}>
          <Button type="link" size="small" onClick={() => setSourceFrameVisibleInPicker((previous) => !previous)}>
            {sourceFrameVisibleInPicker ? t('gridPresetSourceFrameHide') : t('gridPresetSourceFrameShow')}
          </Button>
        </div>
        {sourceFrameVisibleInPicker && (
          <div className={cls.modalSourceFrameBlock}>
            <img
              src={presetExamplesSourceFrame}
              alt={t('gridPresetSourceFrameTitle')}
              className={cls.modalSourceFrameImage}
            />
            <div className={cls.modalSourceFrameText}>
              <Text strong className={cls.modalSourceFrameHeading}>
                {t('gridPresetSourceFrameTitle')}
              </Text>
              <Paragraph className={cls.modalSourceFrameCaption} type="secondary">
                {t('gridPresetSourceFrameCaption')}
              </Paragraph>
            </div>
          </div>
        )}
        <Text className={cls.pickerSlotLabel}>
          {activeSlot ? `${t('gridPromptSelectPreset')} ${t(slotLabelKey[activeSlot])}` : t('gridPromptSelectPreset')}
        </Text>
        <Tabs
          activeKey={activePickerTab}
          onChange={(key) => setActivePickerTab(key as PickerTabKey)}
          items={tabItems}
        />
      </Modal>
    </Layout>
  )
}
