import { useState } from 'react'
import { Layout, Card, Row, Col, Typography, Slider, App as AntdApp, Alert } from 'antd'
import { useTranslation } from 'react-i18next'
import cls from './PosesNAngles.module.scss'
import { classNames } from '../../shared/lib/classNames/classNames'

const { Title, Paragraph } = Typography

// Import all pose images using Vite's glob import
const poseImages = import.meta.glob('../../assets/poses/p*.png', { eager: true, as: 'url' }) as Record<string, string>

const getPoseImage = (id: number): string => {
  // Find the image by matching the filename pattern
  const imageKey = Object.keys(poseImages).find(key => {
    const filename = key.split('/').pop() || ''
    return filename === `p${id}.png` || filename.startsWith(`p${id}.`)
  })
  return imageKey ? poseImages[imageKey] : ''
}

const posesData = [
  { id: 1, text: 'Full-body frontal stance, eye-level camera. Feet shoulder-width apart, weight evenly distributed. Arms relaxed at the sides. Neutral posture with no contrapposto. Clean, basic coverage.' },
  { id: 2, text: 'Three-quarter body view, camera slightly above eye level. Subject angled 30° away from camera, head turned back toward lens. One shoulder subtly forward, relaxed but intentional.' },
  { id: 3, text: 'Classic contrapposto, full-body shot at eye level. Weight settled into one hip, opposite knee soft. Shoulder line subtly tilted, creating an S-curve through the body.' },
  { id: 4, text: 'Back-facing full-body shot, camera at mid-back height. Subject looks straight ahead, away from camera. One foot slightly behind the other, creating depth and subtle motion.' },
  { id: 5, text: 'Three-quarter back view, waist-to-head framing. Subject\'s back dominates the frame while the head turns just enough to reveal partial side profile.' },
  { id: 6, text: 'Waist-up profile portrait, camera perpendicular to subject. Clean side silhouette with neck elongated and chin neutral.' },
  { id: 7, text: 'Tight close-up face shot, straight-on angle. Face centered, minimal head tilt. No shoulders dominating the frame.' },
  { id: 8, text: 'Tight close-up, three-quarter face, camera at eye level. Head rotated slightly away from camera, eyes not fully frontal.' },
  { id: 9, text: 'Close-up from slightly below, camera angled upward just a few degrees. Chin lifted minimally, emphasizing jawline without exaggeration.' },
  { id: 10, text: 'Over-the-shoulder close-up, camera positioned behind one shoulder. Face partially obscured, gaze directed past camera.' },
  { id: 11, text: 'Seated waist-up portrait, eye-level camera. Subject sits upright, shoulders squared. Hands resting naturally out of frame.' },
  { id: 12, text: 'Seated three-quarter pose, camera slightly above. One knee raised toward chest (cropped), torso leaning subtly forward.' },
  { id: 13, text: 'Seated side profile, waist-up framing. Spine straight, hands resting on thighs, gaze forward and unfocused.' },
  { id: 14, text: 'Semi-reclined waist-up pose, camera at chest height. Subject leans back supported by one arm, torso angled diagonally across frame.' },
  { id: 15, text: 'Reclined three-quarter view, cropped at mid-torso. Head tilted slightly back, neck elongated, shoulders relaxed.' },
  { id: 16, text: 'Standing mid-walk pose, upper-body-only framing. Camera at eye level. Arms mid-swing, body in motion, gaze directed off-frame.' },
  { id: 17, text: 'Paused motion pose, waist-up. Subject caught mid-turn, shoulders twisted slightly, head lagging behind the body.' },
  { id: 18, text: 'Dynamic lean-in, waist-up framing. Subject leans toward camera from hips, shoulders forward, chin slightly down.' },
  { id: 19, text: 'Arms crossed waist-up, eye-level camera. Elbows relaxed, not tight to body. Neutral expression, structured posture.' },
  { id: 20, text: 'Hands resting behind back, waist-up portrait. Chest open, shoulders slightly pulled back, head neutral.' },
  { id: 21, text: 'One hand raised near face, chest-up framing. Elbow dropped low, hand relaxed—not touching face directly.' },
  { id: 22, text: 'Back view waist-up, camera centered. Shoulder blades visible, head facing forward, neck elongated.' },
  { id: 23, text: 'Side-back angle, chest-to-head framing. Camera positioned behind subject at 45°, face barely visible.' },
  { id: 24, text: 'Overhead waist-up shot, camera directly above. Subject looks downward, shoulders framing the neck.' },
  { id: 25, text: 'Low-angle waist-up, camera below chest level. Subject looks past camera, chin neutral, posture grounded.' },
  { id: 26, text: 'Extreme crop torso shot, shoulders to upper waist only. Head partially cropped, focus on posture and garment structure.' },
  { id: 27, text: 'Three-quarter reclined close-medium, camera near floor level. One knee enters frame foreshortened, torso leaning back.' },
  { id: 28, text: 'Side-reclined close-medium, camera perpendicular. Torso supported by one arm, leg cropped at knee.' },
  { id: 29, text: 'Forward hinge pose, waist-up. Subject bends slightly at hips, spine straight, gaze down.' },
  { id: 30, text: 'Twisted torso pose, waist-up. Hips squared forward, shoulders rotated slightly.' },
  { id: 31, text: 'Camera positioned near floor, wide-angle feel. Frame starts at upper thighs and shoots upward aggressively. Hips dominate the lower half of the image, torso stretched vertically. Head slightly tilted down toward lens, eyes heavy-lidded.' },
  { id: 32, text: 'Waist-up or close-medium shot. One hand pushed directly toward the camera, fingers relaxed but close enough to distort. Face remains sharp behind the hand. No aggressive gesture—casual reach.' },
  { id: 33, text: 'Tight vertical crop. Frame cuts at lips or nose—no eyes visible. Neck elongated, shoulders squared. Minimal pose, maximum attitude.' },
  { id: 34, text: 'Waist-up shot. Subject lightly grips hair near scalp—no tension. Elbow angled outward. Head tilted slightly.' },
  { id: 35, text: 'Subject seated, legs wide (cropped). Torso upright. Camera slightly below eye level. Hands resting casually between thighs or on knees.' },
  { id: 36, text: 'Overhead shot from directly above, tight full-body crop. The subject twists the torso while keeping the hips squared, creating a corkscrew effect through the spine. One arm crosses diagonally over the chest while the other drops straight down, breaking symmetry. The head turns sharply to the side, eyes looking away from the camera. The body appears flattened against the background, almost diagrammatic.' },
  { id: 37, text: 'Close-medium shot from a sharp side angle. The subject leans aggressively toward the camera with the shoulder leading, while the hips rotate in the opposite direction. One leg steps forward and crosses slightly inward, causing imbalance. The head remains upright despite the twisted body, creating anatomical contradiction. The pose should feel tense and slightly uncomfortable.' },
  { id: 38, text: 'Tight waist-up portrait, camera angled slightly above. The subject pulls both shoulders forward while pushing the chest backward, collapsing the upper torso inward. Neck retracts subtly, chin pulled down. Eyes look upward toward the lens, creating an unsettling contrast between submission and control.' },
  { id: 39, text: 'Close-medium shot from directly above. The subject reaches one arm straight upward toward the lens, fingers relaxed but elongated. The opposite shoulder collapses downward, creating diagonal asymmetry. The head turns away, refusing eye contact.' },
  { id: 40, text: 'Low-angle waist-up shot. The subject presses the shoulders backward while the neck juts forward aggressively. Chin is slightly raised. Arms hang loosely, creating contrast between tension and release.' },
  { id: 41, text: 'Medium shot from a sharp diagonal angle. The subject twists the torso toward the camera while the hips rotate away. One shoulder is aggressively forward, dominating the frame. The head tilts slightly down, eyes looking sideways.' },
  { id: 42, text: 'Extreme low-angle full-body shot from behind, camera placed near floor level and angled upward between the legs. The subject stands in a wide stance with knees slightly unlocked, pelvis pushed back toward the lens to exaggerate hips and thighs through foreshortening. The torso twists subtly so the shoulders angle toward the camera while maintaining a grounded, stable posture. The head turns downward over the shoulder, chin slightly tucked, eyes looking back into the lens with controlled dominance.' },
  { id: 43, text: 'Close-medium shot with strong foreshortening. The subject reaches one knee toward the camera, cropped at the edge of frame. Upper body leans back, supported by invisible balance.' },
  { id: 44, text: 'Full-body shot, camera eye-level. The subject twists the torso diagonally while the legs remain straight and parallel. One shoulder raised higher than the other. Head tilted downward.' },
  { id: 45, text: 'Waist-up low-angle shot. Subject arches the lower back subtly, pushing chest forward while hips remain back. Arms hang loosely along the sides to expose torso lines. Neck elongated, chin lifted slightly.' },
  { id: 46, text: 'Full-body side profile, camera at thigh height. One knee bends inward while the other leg stays straight, creating a sculpted hip curve. Torso leans back slightly, emphasizing waist-to-hip contrast.' },
  { id: 47, text: 'Close-up from below. Subject tilts head back just enough to expose the throat. Lips relaxed, eyes angled downward into the lens. Shoulders remain squared and tense.' },
  { id: 48, text: 'Extreme low-angle three-quarter shot. Subject shifts weight into one hip while pushing pelvis toward the lens. Upper body twists away, elongating the torso. Head turns back over the shoulder.' },
  { id: 49, text: 'Low-angle waist-up shot. Subject pushes chest forward while drawing the chin inward. Neck compresses slightly. Arms remain relaxed and close to the torso.' },
  { id: 50, text: 'Waist-up shot, camera tilted. Subject arches spine laterally, creating a curved silhouette. One arm raised overhead, cropped at elbow.' },
  { id: 51, text: 'Back view close-medium shot. Subject arches lower back, accentuating glute curve. Head turned sharply toward camera. Shoulders squared.' },
  { id: 52, text: 'Overhead full-body shot. Subject lies flat on their back with one knee bent and the other leg extended straight. Hips are subtly tilted to break symmetry. Head turned slightly to the side, neck elongated.' },
  { id: 53, text: 'Close-medium shot from above. Subject lies on stomach with hips grounded and upper body lifted slightly on forearms. Lower back arched gently. Head tilted downward, eyes looking up.' },
  { id: 54, text: 'Low-angle floor-level shot from the side. Subject lies on one hip with knees stacked and bent. Upper torso twists backward, opening the chest. One shoulder presses into the surface.' },
  { id: 55, text: 'Three-quarter overhead shot. Subject lies diagonally with one leg bent and crossing the body. Torso twists opposite direction. Head turned away.' },
  { id: 56, text: 'Side-profile reclining pose. Subject lies on one hip with top leg extended long. Waist elongated. Upper body leans backward slightly.' },
  { id: 57, text: 'Low-angle diagonal shot. Subject lies flat with one knee raised toward the camera. Pelvis leads the frame. Head turned away, neck exposed.' },
  { id: 58, text: 'Close-medium dynamic shot from above. Subject folds forward suddenly while pulling shoulders back, freezing mid-collapse. One knee rises into frame. Neck elongated, face partially cropped.' },
  { id: 59, text: 'Overhead flash capture, harsh and direct. Subject pivots suddenly on one foot, pelvis rotating forward while shoulders spin away. One arm lifts instinctively toward the light, partially obscuring the frame. Motion feels reactive, not posed.' },
  { id: 60, text: 'close-medium shot of a semi-reclined pose in soft three-quarter view. The subject leans back, torso angled low, supported by one arm. One leg is bent or tucked back, while the other leg is fully extended toward the camera, foreshortened, with the knee or thigh cropped by the left edge of the frame. Head turned slightly toward the viewer, with one hand resting near the temple. The framing must feel close and immersive — no full-body shot. Emphasize depth and perspective in the extended leg while keeping the overall posture relaxed but intentional.' },
  { id: 61, text: 'Create a close-medium shot of a semi-reclined pose in clean side profile. The torso must lean back, supported by one arm, and the head turned slightly with one hand lifted to the temple. One leg is extended diagonally forward into the left side of the frame. The frame must intersect the leg at or just above the knee — no full-body shot. The composition must feel zoomed-in and intimate, with the figure dominating the frame. Prioritize clarity of pose and side silhouette.' },
  { id: 62, text: 'Extreme low-angle full-body shot, camera positioned near floor level. Subject stands in a wide stance with hips pushed slightly back, knees softly bent. Pelvis leads the frame while the upper body recedes. Head turns downward toward the lens, gaze heavy and controlled.' },
  { id: 63, text: 'Three-quarter body straight-on shot, camera positioned at mid-torso height with a neutral angle. Subject stands with weight shifted onto one hip, pelvis slightly angled while the upper body remains mostly frontal. One arm lifts overhead with the elbow bent, fabric draped above the head, while the opposite arm bends inward with the hand resting near the side of the head. Shoulders stay asymmetrical, creating tension between the raised and lowered sides. Head tilts subtly forward, chin slightly down, gaze directed straight into the camera.' },
  { id: 64, text: 'Low-angle three-quarter body shot, cropped from head to platform soles, camera positioned near floor level and angled upward. Subject holds a deep squat with knees bent sharply and hips dropped low between the heels. One leg extends forward toward the camera, foot dominating the foreground, while the opposite leg stays tucked beneath the body. Torso leans slightly back with shoulders relaxed, arms resting across the knees with one hand reaching outward. Head tilts subtly to the side, chin neutral, gaze directed off-camera.' },
  { id: 65, text: 'Full-body side-profile shot, cropped from head to heels, camera positioned at mid-leg height with a neutral angle. Subject stands with legs straight and feet grounded, folding deeply forward at the hips into an extreme forward bend. One arm reaches down to grasp the ankle while the opposite hand extends to the floor for balance. Spine curves dramatically with the pelvis lifted high above the shoulders. Head hangs inverted beneath the torso, chin tucked, eyes looking sideways toward the camera.' },
  { id: 66, text: 'Side-profile full-body shot, cropped from head to raised foot, camera positioned at floor level with a neutral angle. Subject lies on the back with shoulders and head grounded, pelvis lifted into a bridge. One leg is bent with the foot planted on the floor while the opposite leg extends straight upward, perpendicular to the ground. Hands rest on the hips, stabilizing the lifted pelvis. Head turns slightly toward the camera, chin neutral, eyes looking sideways into the lens.' },
  { id: 67, text: 'Extreme low-angle full-body shot, cropped from raised hand to upper thighs, camera positioned directly below the subject and angled straight upward. Subject stands with hips pushed back and torso leaning forward over the lens, creating strong foreshortening through the pelvis. One arm bends overhead with the elbow pointed outward, while the opposite arm folds behind the head. Legs remain straight and grounded, framing the lower edge of the composition. Head tilts downward toward the camera, chin slightly tucked, gaze directed past the lens.' },
  { id: 68, text: 'Waist-up portrait from slightly above. Subject collapses one shoulder inward while pulling the opposite shoulder back, compressing the chest diagonally. Spine curves subtly sideways instead of forward. Chin lowers while eyes look upward, creating tension between submission and control.' },
  { id: 69, text: 'Side-profile full-body shot. Subject bends one knee deeply while keeping the other leg rigid and straight. Pelvis tilts backward as the upper torso leans forward, creating a broken hinge at the waist. Head tilts backward, splitting the body into opposing planes.' },
  { id: 70, text: 'Overhead full-body shot. Subject twists through the floor plane as if rolling from one movement into the next. Hips and shoulders face opposing directions. One arm reaches outward and exits frame, creating graphic asymmetry.' },
  { id: 71, text: 'Extreme close-up portrait shot, cropped from the top of the head to the upper shoulder, presented with a 90-degree rotated orientation. Camera is positioned very close at face height relative to the subject, but the frame is turned so the head appears sideways. Subject tilts the head downward, cheek resting near the shoulder, creating a compressed neck line. Eyes are closed, lashes visible in profile, with facial features aligned horizontally due to the rotation. Neck curves softly into the frame, emphasizing the diagonal flow created by the rotated composition.' },
  { id: 72, text: 'Extreme close-up portrait shot, cropped from forehead to lips, presented with a 90-degree rotated orientation. Camera is positioned very close at face height, but the frame is turned so the face appears sideways across the image. Subject lies on the side with the head tilted into the frame, cheek slightly compressed. One hand lifts to the face, fingers resting across the lips and lower cheek, partially obscuring the mouth. Eyes look directly into the lens, gaze steady and intimate within the rotated composition.' }
]

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

