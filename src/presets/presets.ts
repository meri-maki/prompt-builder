import prompt1Img from '../assets/prompt1.webp'
import prompt2Img from '../assets/prompt2.png'
import prompt3Img from '../assets/prompt3.png'
import type { Preset } from '../types/prompt'
import prompt4Img from '../assets/prompt4.webp'
import prompt5Img from '../assets/prompt5.webp'
import prompt6Img from '../assets/prompt6.webp'
import prompt7Img from '../assets/prompt7.webp'
import prompt8Img from '../assets/prompt8.webp'
import prompt9Img from '../assets/prompt9.webp'
import prompt10Img from '../assets/prompt10.webp'
import prompt11Img from '../assets/prompt11.webp'
import prompt12Img from '../assets/prompt12.webp'
import prompt13Img from '../assets/prompt13.png'
import prompt14Img from '../assets/prompt14.webp'
import prompt15Img from '../assets/prompt15.webp'
import prompt16Img from '../assets/prompt16.png'
import prompt17Img from '../assets/prompt17.png'
import prompt18Img from '../assets/prompt18.png'
import prompt19Img from '../assets/prompt19.png'
import prompt20Img from '../assets/prompt20.png'
import prompt21Img from '../assets/prompt21.png'
import prompt22Img from '../assets/prompt22.png'
import prompt23Img from '../assets/prompt23.png'
import prompt24Img from '../assets/prompt24.png'
import prompt25Img from '../assets/prompt25.png'
import prompt26Img from '../assets/prompt26.png'
import prompt27Img from '../assets/prompt27.png'
import prompt28Img from '../assets/prompt28.png'
import prompt29Img from '../assets/prompt29.png'
import prompt30Img from '../assets/prompt30.png'
import prompt31Img from '../assets/prompt31.png'
import prompt32Img from '../assets/prompt32.png'
import prompt33Img from '../assets/prompt33.png'
import prompt34Img from '../assets/prompt34.png'
import prompt35Img from '../assets/prompt35.png'
import prompt36Img from '../assets/prompt36.png'
import prompt37Img from '../assets/prompt37.png'
import prompt38Img from '../assets/prompt38.png'
import prompt39Img from '../assets/prompt39.png'
import prompt40Img from '../assets/prompt40.png'
import prompt41Img from '../assets/prompt41.png'
import prompt42Img from '../assets/prompt42.png'
import prompt43Img from '../assets/prompt43.png'
import prompt44Img from '../assets/prompt44.png'
import prompt45Img from '../assets/prompt45.png'
import prompt46Img from '../assets/prompt46.png'
import prompt47Img from '../assets/prompt47.png'
import prompt48Img from '../assets/prompt48.png'
import prompt49Img from '../assets/prompt49.png'
import prompt50Img from '../assets/prompt50.png'

export const presets: Preset[] = [
  {
    id: 'prompt1',
    title: 'Preset 1',
    img: prompt1Img,
    values: {
      shot: {
        composition: 'Extreme close-up, tight framing on face and hand, centered composition',
        cameraSettings: 'Wide aperture f/1.8 for shallow depth, ISO 400, 85mm lens',
        filmGrain: 'Fine natural grain emulating analog texture'
      },
      lensEffects: {
        optics: 'Soft bokeh on background with sharp focus on eyes and hand details',
        artifacts: 'Subtle dust and sand particles visible on skin',
        depthOfField: 'Very shallow, sharp focus on eyes and fingertips, blurred background'
      },
      subject: {
        description: 'Female with wet dark curly hair strands falling on face, olive-toned skin with sand particles, intense green eyes, slightly parted lips',
        wardrobe: 'Black sleeveless top barely visible',
        grooming: 'Natural makeup, wet skin appearance, glossy lips, defined eyebrows'
      },
      scene: {
        location: 'Beach or seaside, outdoor',
        timeOfDay: 'Daylight, likely late afternoon',
        environment: 'Sandy, humid atmosphere suggested by moisture on skin'
      },
      visualDetails: {
        action: 'Fingers lightly touching lips, contemplative or thoughtful expression',
        props: 'Turquoise and silver ring on finger, gold hoop earring partially visible',
        physics: 'Visible moisture and sand grains on skin, hair strands wet and clinging'
      },
      cinematography: {
        lighting: 'Soft natural light with warm tone, slight shadowing accentuating facial structure',
        tone: 'Warm, intimate, detailed, contemplative',
        colorPalette: 'Warm beige and brown skin tones, black hair, turquoise ring, subtle blues in background'
      },
      textElements: {
        visibleText: 'None',
        typography: 'None',
        placement: 'None'
      },
      style: {
        visualAesthetic: 'Intense, intimate portrait with natural textures, high detail, slightly gritty sandy texture'
      }
    }
  },
  {
    id: 'prompt2',
    title: 'Preset 2',
    img: prompt2Img,
    values: {
      shot: {
        composition: "Close-up portrait, subject's face and upper shoulders visible, side profile slightly turned towards camera, centered",
        cameraSettings: 'Aperture f/2.8, ISO 100, shutter speed 1/125s, 85mm lens',
        filmGrain: 'Very light, smooth texture, natural skin detail'
      },
      lensEffects: {
        optics: 'Sharp focus on face and lace top, soft background blur, high resolution',
        artifacts: 'None noticeable',
        depthOfField: 'Shallow, focusing on facial features and lace texture, blurred background'
      },
      subject: {
        description: 'Young woman with pale skin, brown amber eyes, light freckles, wet wavy dark copper hair',
        wardrobe: 'Creamy beige lace garment with intricate floral patterns',
        grooming: 'Natural makeup style, fresh dewy skin, subtle lip color, minimal styling'
      },
      scene: {
        location: 'Studio setting or neutral plain light gray background',
        timeOfDay: 'Daylight, mid-morning to afternoon natural light',
        environment: 'Indoor controlled environment with soft natural lighting'
      },
      visualDetails: {
        action: 'Subject gazing softly into the distance',
        props: 'Large ornate gold filigree earrings',
        physics: 'Soft sunlight casting light band shadow across face, creating gentle contrast'
      },
      cinematography: {
        lighting: 'Soft natural diffuse daylight from window, side illumination, slight shadow on cheek',
        tone: 'Calm, serene, ethereal mood',
        colorPalette: 'Muted warm neutrals, beige, cream, soft gold, skin tones, subtle greens in eyes'
      },
      textElements: {
        visibleText: 'none',
        typography: 'none',
        placement: 'none'
      },
      style: {
        visualAesthetic: 'Fine art portraiture, warm and soft, delicate textures, intimate and natural look'
      }
    }
  }
  ,
  {
    id: 'prompt3',
    title: 'Preset 3',
    img: prompt3Img,
    tags: ['bw'],
    values: {
      shot: {
        composition: 'extreme close-up of model in motion, center framed, blurred motion effect',
        cameraSettings: 'Moderate shutter speed for intentional motion blur, black and white monochrome',
        filmGrain: 'Fine grain texture enhancing vintage look'
      },
      lensEffects: {
        optics: 'Soft focus around edges, sharp focus fading into blur from subject center',
        artifacts: 'None',
        depthOfField: 'Shallow depth of field creating smooth background gradient'
      },
      subject: {
        description: 'Female model in angular pose with face partially obscured by large feathered collar, arm bent behind back',
        wardrobe: 'Textured dark top with large white feather collar, fishnet gloves extending to forearms, dark skirt or shorts',
        grooming: 'Hair in vintage style, minimal visible facial features due to motion blur'
      },
      scene: {
        location: 'Plain studio backdrop with gradient shading from dark left to light right',
        timeOfDay: 'Studio-lit, time ambiguous',
        environment: 'Controlled indoor environment, high contrast lighting'
      },
      visualDetails: {
        action: 'Model mid-motion twisting torso slightly, hand gripping opposite hip or back',
        props: 'None visible',
        physics: 'Motion blur emphasizes dynamic movement and fabric texture'
      },
      cinematography: {
        lighting: 'High contrast directional lighting from right side casting soft shadows',
        tone: 'Monochrome black and white, dramatic and elegant atmosphere',
        colorPalette: 'Grayscale with deep blacks, bright whites, and mid-tone grays'
      },
      textElements: {
        visibleText: 'None',
        typography: 'None',
        placement: 'None'
      },
      style: {
        visualAesthetic: 'High fashion editorial, avant-garde, modernist monochrome photography with artistic motion blur'
      }
    }
  }
  ,
  {
    id: 'prompt4',
    title: 'Preset 4',
    img: prompt4Img,
    values: {
      shot: {
        composition: 'Medium shot, vertical framing, two women interacting at wooden table, one woman seated, the other standing, mirror and wallpaper background visible',
        cameraSettings: 'ISO 400, f/4, 1/60 s, moderate flash use',
        filmGrain: 'Slight grain, natural indoor lighting effect'
      },
      lensEffects: {
        optics: "Crisp focus on seated woman's face and hand holding glass, slight reflections on mirror",
        artifacts: 'Flash glare visible on mirror reflection',
        depthOfField: 'Moderate depth of field, both subjects and table clearly focused'
      },
      subject: {
        description: 'Two young women; one seated, mouth open and head tilted back as green olive is offered above her mouth; the other standing, arm extended holding the olive on a toothpick',
        wardrobe: "Both wear oversized casual t-shirts; the seated woman's white shirt has orange and teal text, standing woman's off-white shirt with orange text on sleeve; seated in beige pants and black belt",
        grooming: "Long brown hair on seated woman loose; the standing woman's hair tied back partially unseen"
      },
      scene: {
        location: 'Indoor setting with wood-paneled walls and ornate wallpaper, mirror behind subjects reflecting flash light',
        timeOfDay: 'Evening or night, interior artificial lighting',
        environment: 'Cozy, intimate bar or lounge setting'
      },
      visualDetails: {
        action: 'Seated woman holding a large glass with red drink and ice cubes; standing woman feeding olive to seated woman; red drink in a smaller glass on table along with a plate and napkins containing olives',
        props: 'Wine glasses with red liquid, plate with napkin and olives',
        physics: 'Still moment captured mid-action, reflections from flash'
      },
      cinematography: {
        lighting: 'Direct flash illuminating subjects and foreground, casting shadows behind',
        tone: 'Warm, lively social atmosphere',
        colorPalette: 'Earthy browns, white, beige, red drinks, green olives contrasted with natural skin tones'
      },
      textElements: {
        visibleText: 'Partial word on seated woman\'s shirt reading "Bar Rosso" and smaller text underneath',
        typography: 'Casual script style in orange and teal',
        placement: 'Upper left chest area of seated woman\'s shirt'
      },
      style: {
        visualAesthetic: 'Candid, snapshot style with flash photography, emphasizing natural moment and textures'
      }
    }
  }
  ,
  {
    id: 'prompt5',
    title: 'Preset 5',
    img: prompt5Img,
    values: {
      shot: {
        composition: 'Medium close-up, subject and horse centered, vertical frame',
        cameraSettings: 'ISO 400, f/2.8, 1/125 s, natural color profile',
        filmGrain: 'Fine grain, muted texture'
      },
      lensEffects: {
        optics: 'Soft focus on woman and horse, slight background blur',
        artifacts: 'None',
        depthOfField: 'Shallow depth of field, subject and horse in sharp focus'
      },
      subject: {
        description: "Young woman with long wavy hair, neutral expression, standing next to a large dark brown horse with flowing mane, holding reins",
        wardrobe: 'Oversized cream-colored buttoned coat, loose light-colored pants',
        grooming: 'Natural look, minimal makeup, hair loose and slightly tousled'
      },
      scene: {
        location: 'Open grassy field overlooking distant tree line under cloudy sky',
        timeOfDay: 'Midday with soft diffused sunlight',
        environment: 'Calm and serene outdoor natural environment'
      },
      visualDetails: {
        action: "Woman standing beside and holding the horse's reins gently",
        props: "Rope reins attached to horse bridle",
        physics: "Wind subtly moving hair and horse's mane"
      },
      cinematography: {
        lighting: 'Soft natural diffused daylight',
        tone: 'Muted, earthy, and natural tones',
        colorPalette: 'Soft greens, browns, and creams, desaturated colors'
      },
      textElements: {
        visibleText: 'None',
        typography: 'None',
        placement: 'None'
      },
      style: {
        visualAesthetic: 'Naturalistic, calm, minimalist, with vintage film subtlety'
      }
    }
  }
  ,
  {
    id: 'prompt6',
    title: 'Preset 6',
    img: prompt6Img,
    values: {
      shot: {
        composition: "Close-up side profile shot, subject's head and neck dominating frame, soft background",
        cameraSettings: 'ISO 400, f/2.0, 85mm lens, natural light',
        filmGrain: 'Soft, fine grain effect enhancing texture'
      },
      lensEffects: {
        optics: "Sharp focus on subject's eye and textured fabric",
        artifacts: 'None',
        depthOfField: 'Shallow depth of field blurring background'
      },
      subject: {
        description: "Woman with slicked-back black hair tied in a bun, wearing a large olive-green fuzzy garment covering lower face, gold irregular shaped earrings",
        wardrobe: 'Thick olive-green fuzzy sweater or coat with high collar covering lower face',
        grooming: 'Clean skin, natural makeup, subtle eyebrow defining'
      },
      scene: {
        location: 'Studio or minimally detailed neutral indoor setting',
        timeOfDay: 'Daytime with diffused soft natural light',
        environment: 'Plain white or very light background'
      },
      visualDetails: {
        action: 'Subject looking slightly downward and left',
        props: 'None',
        physics: 'Soft light creating gentle shadows emphasizing texture and contours'
      },
      cinematography: {
        lighting: 'Soft, diffused natural light from front-left, minimal shadows',
        tone: 'Muted, calm, intimate',
        colorPalette: 'Olive green, black, gold, beige skin tones, off-white background'
      },
      textElements: {
        visibleText: 'None',
        typography: 'None',
        placement: 'None'
      },
      style: {
        visualAesthetic: 'Minimalistic, modern, textured, intimate portraiture'
      }
    }
  }
  ,
  {
    id: 'prompt7',
    title: 'Preset 7',
    img: prompt7Img,
    values: {
      shot: {
        composition: 'Close-up portrait, subject centered, arm creating shadow across face',
        cameraSettings: 'Moderate depth of field, neutral exposure, natural light',
        filmGrain: 'Smooth, minimal grain'
      },
      lensEffects: {
        optics: 'Sharp focus on eye and lips, soft edges on shadowed areas',
        artifacts: 'None',
        depthOfField: 'Shallow focus on face, background blurred'
      },
      subject: {
        description: 'Woman with light skin, blue eyes, neutral makeup, looking at camera, arm raised casting shadow on half face',
        wardrobe: 'Black high-neck garment covering neck and arm',
        grooming: 'Hair pulled back tightly, natural skin texture'
      },
      scene: {
        location: 'Outdoors against blue sky background',
        timeOfDay: 'Daytime with bright sunlight',
        environment: 'Clear, cloudless sky'
      },
      visualDetails: {
        action: 'Static pose with arm lifted',
        props: 'Large gold hoop earrings',
        physics: 'Natural sunlight creating sharp shadow'
      },
      cinematography: {
        lighting: 'Direct sunlight from upper left casting strong shadow, soft fill on visible half of face',
        tone: 'Clean, natural, subtle contrast',
        colorPalette: 'Blue sky, black garment, natural skin tones, gold earrings'
      },
      textElements: {
        visibleText: 'none',
        typography: 'none',
        placement: 'none'
      },
      style: {
        visualAesthetic: 'Minimalist, modern portrait, strong play of light and shadow'
      }
    }
  }
  ,
  {
    id: 'prompt8',
    title: 'Preset 8',
    img: prompt8Img,
    values: {
      shot: {
        composition: 'Extreme close-up on left side of face capturing eye, cheek, lips, and ear, tight crop',
        cameraSettings: 'High resolution, shallow depth of field, natural soft light',
        filmGrain: 'Light fine grain enhancing skin texture'
      },
      lensEffects: {
        optics: 'Sharp focus on the eye, eyelashes, and metallic earring, smooth bokeh',
        artifacts: 'None noticeable',
        depthOfField: 'Very shallow, focusing on eye and earring with background softly blurred'
      },
      subject: {
        description: "Partial face of a person with fair skin, blue eye, long dark eyelashes, natural complexion with light freckles",
        wardrobe: 'None visible except subtle dark fabric on shoulder',
        grooming: 'Natural makeup, well-defined lips with muted rose lipstick, slightly flushed cheeks'
      },
      scene: {
        location: 'Studio with plain light background',
        timeOfDay: 'Indeterminate, controlled artificial lighting',
        environment: "Minimalist, clean, focusing on subject's skin and features"
      },
      visualDetails: {
        action: 'Static expression, intense gaze looking sideways to the left',
        props: 'Large metallic abstract earring with two spherical ends connected by a thin rod',
        physics: 'Natural light reflections on the earring, soft light highlighting skin contours'
      },
      cinematography: {
        lighting: 'Soft, diffused lighting from front-left, subtle shadows creating depth',
        tone: 'Moody, intimate, slightly desaturated',
        colorPalette: 'Muted skin tones, blue eye, silver metallic earring, soft beige and brown hues'
      },
      textElements: {
        visibleText: 'none',
        typography: 'none',
        placement: 'none'
      },
      style: {
        visualAesthetic: 'High fashion editorial, intimate portraiture, naturalistic yet polished'
      }
    }
  }
  ,
  {
    id: 'prompt9',
    title: 'Preset 9',
    img: prompt9Img,
    values: {
      shot: {
        composition: 'Tight close-up portrait, centered face and shoulders, slightly turned to left',
        cameraSettings: 'ISO 100, f/4.0, 85 mm lens, studio lighting',
        filmGrain: 'Smooth skin texture, minimal grain'
      },
      lensEffects: {
        optics: 'Sharp focus on lips and nose, soft vignette edges',
        artifacts: 'None',
        depthOfField: 'Shallow DOF with softly blurred background'
      },
      subject: {
        description: 'Person with slicked-back wet black hair, pale skin, pronounced red lips, angular jawline',
        wardrobe: 'None visible, bare shoulders',
        grooming: 'Glossy slick hair, matte skin with shadowed contours, bold red lipstick'
      },
      scene: {
        location: 'Studio with controlled lighting',
        timeOfDay: 'Indeterminate, artificial light',
        environment: 'Neutral pale gray background'
      },
      visualDetails: {
        action: 'Still, contemplative expression with eyes partially closed',
        props: 'None',
        physics: 'Strong shadow cast from above, creating checker-like shaded patterns on face and chest'
      },
      cinematography: {
        lighting: 'High contrast directional light casting dramatic shadows over face and neck',
        tone: 'Moody, intense, slightly mysterious',
        colorPalette: 'Monochrome muted grays with vibrant red lips and pale skin highlights'
      },
      textElements: {
        visibleText: 'None',
        typography: 'None',
        placement: 'None'
      },
      style: {
        visualAesthetic: 'Noir-inspired, fashion editorial, minimalist, striking contrast and shadow interplay'
      }
    }
  }
  ,
  {
    id: 'prompt10',
    title: 'Preset 10',
    img: prompt10Img,
    values: {
      shot: {
        composition: 'Close-up centered portrait, eye-level, shallow framing focusing on face and hand holding glass',
        cameraSettings: 'Wide aperture f/1.8 for shallow depth, 85mm lens, natural light',
        filmGrain: 'Soft, minimal grain for smooth skin texture'
      },
      lensEffects: {
        optics: 'Slight bokeh effect, sharp focus on eyes and fingers around glass',
        artifacts: 'None',
        depthOfField: 'Very shallow, background fully blurred'
      },
      subject: {
        description: 'Young person with blue eyes, slicked-back dark hair, neutral expression, partially obscured face behind glass',
        wardrobe: 'Dark gray oversized blazer, white round-neck top underneath',
        grooming: 'Clean face with minimal makeup, natural skin tone'
      },
      scene: {
        location: 'Studio setup',
        timeOfDay: 'Indeterminate indoor lighting, diffused soft light',
        environment: 'Plain matte orange background'
      },
      visualDetails: {
        action: 'Holding a transparent rounded glass with yellow liquid and lemon slice, glass partially covers mouth and nose',
        props: 'Glass with drink and fruit slice',
        physics: 'Light reflection on glass and skin, subtle translucency'
      },
      cinematography: {
        lighting: 'Soft, even lighting with slight shadows on face for depth',
        tone: 'Warm, natural, contrasted',
        colorPalette: 'Orange background, neutral gray, white, natural skin tones, yellow lemon'
      },
      textElements: {
        visibleText: 'None',
        typography: 'None',
        placement: 'None'
      },
      style: {
        visualAesthetic: 'Modern minimalistic portrait photography with warm earth tones and focus on human expression'
      }
    }
  }
  ,
  {
    id: 'prompt11',
    title: 'Preset 11',
    img: prompt11Img,
    tags: ['bw'],
    values: {
      shot: {
        composition: 'Split-frame diptych with one full-body seated and one close-up portrait, subject centered',
        cameraSettings: 'ISO 400, f/2.8, 1/125s on full-frame camera',
        filmGrain: 'Fine-grain black and white in left, clean digital color right'
      },
      lensEffects: {
        optics: 'Sharp without distortion, subtle background separation',
        artifacts: 'None',
        depthOfField: 'Moderate f/2.8, sharp focus on face and upper body in both images'
      },
      subject: {
        description: 'Woman with shoulder-length dark wet hair, pensive expression, light skin, slightly parted lips',
        wardrobe: 'Black cropped top, black leather jacket loosely worn, white high-waisted pants in left; black jacket in right',
        grooming: 'Natural makeup, wet tousled hair partly covering face'
      },
      scene: {
        location: 'Studio with solid dark backdrop left, light gray backdrop right',
        timeOfDay: 'None',
        environment: 'Minimalist indoor studio setting'
      },
      visualDetails: {
        action: 'Left shows woman sitting barefoot on modern chair, leaning forward; right shows still close-up gaze',
        props: 'Metal and plastic folding chair in left image',
        physics: 'Natural indoor lighting effects, subtle shadows'
      },
      cinematography: {
        lighting: 'Soft diffused light from left frontal for uncluttered shadows',
        tone: 'Moody black and white left, neutral soft color right',
        colorPalette: 'Monochrome left, muted skin tones and black clothing right'
      },
      textElements: {
        visibleText: 'None',
        typography: 'None',
        placement: 'None'
      },
      style: {
        visualAesthetic: 'Contemporary fine art portraiture, expressive, minimalist composition'
      }
    }
  }
  ,
  {
    id: 'prompt12',
    title: 'Preset 12',
    img: prompt12Img,
    values: {
      shot: {
        composition: 'Full-body portrait, subject centered on steps, vertical frame',
        cameraSettings: 'ISO 400, f/2.8, 85mm lens, medium telephoto',
        filmGrain: 'Soft, fine grain emphasizing smooth textures'
      },
      lensEffects: {
        optics: 'Sharp focus on subject, subtle lens flare on left',
        artifacts: 'None',
        depthOfField: 'Shallow DOF with creamy bokeh on background flowers and backdrop mural'
      },
      subject: {
        description: 'Elegant woman with long dark hair, standing on steps, looking upward, holding a red apple',
        wardrobe: 'Draped flowing cream silk fabric wrapped around body, partially exposing left leg and shoulder',
        grooming: 'Natural makeup, glossy skin, loose waves in hair'
      },
      scene: {
        location: 'Indoor studio with painted Renaissance-style mural backdrop, stone column on right edge',
        timeOfDay: 'Simulated evening',
        environment: 'Surrounded by dried flowers and foliage arranged low around steps and floor'
      },
      visualDetails: {
        action: 'Subject delicately holding an apple, arms crossed, contemplative gaze',
        props: 'Apple, dried flowers, classical statue in backdrop, pillar, green draped fabric on steps',
        physics: 'Soft ambient fog or mist drifting from left side, gentle shadow play'
      },
      cinematography: {
        lighting: 'Dramatic low key with warm spotlight on subject from left, cool ambient fill',
        tone: 'Moody, romantic, ethereal',
        colorPalette: 'Earth tones, creams, muted greens, touches of warm orange and brown'
      },
      textElements: {
        visibleText: 'none',
        typography: 'none',
        placement: 'none'
      },
      style: {
        visualAesthetic: 'Classical painting-inspired fine art photography with contemporary fashion elements'
      }
    }
  }
  ,
  {
    id: 'prompt13',
    title: 'Preset 13',
    img: prompt13Img,
    tags: ['faceless'],
    values: {
      shot: {
        composition: 'Side view medium shot, subject centered, chair profile visible',
        cameraSettings: 'ISO 400, f/4, 1/125 s, neutral white balance',
        filmGrain: 'Smooth digital with slight texture'
      },
      lensEffects: {
        optics: 'Sharp focus on subject and chair, mild background softness',
        artifacts: 'None',
        depthOfField: 'Moderate depth of field, background slightly blurred'
      },
      subject: {
        description: 'Woman with long dark copper hair reclined in modern black-metal framed chair, holding newspaper loosely near floor',
        wardrobe: 'Black tailored suit with striped shirt cuffs visible at wrists, black heeled shoes',
        grooming: 'wavy, well-groomed hair, natural makeup'
      },
      scene: {
        location: 'Minimalist indoor space with concrete floor and tall frosted glass panel walls',
        timeOfDay: 'Indeterminate, soft diffuse lighting suggesting daytime',
        environment: 'Quiet, clean, and modern setting'
      },
      visualDetails: {
        action: 'Woman reclining with her head tilted slightly backward, newspaper about to fall from hand',
        props: 'Folded newspaper in right hand',
        physics: 'Newspaper resting partly on smooth floor'
      },
      cinematography: {
        lighting: 'Soft, diffused natural or artificial lighting from front-left',
        tone: 'Calm, relaxed, neutral mood',
        colorPalette: 'Muted grays, blacks, subtle blue and metallic tones'
      },
      textElements: {
        visibleText: 'Small text on newspaper, unreadable headlines',
        typography: 'Newspaper print typical serif font',
        placement: 'Newspaper at bottom center near floor'
      },
      style: {
        visualAesthetic: 'Minimalistic modern realism with subdued colors and clean lines'
      }
    }
  }
  ,
  {
    id: 'prompt14',
    title: 'Preset 14',
    img: prompt14Img,
    tags: ['faceless'],
    values: {
      shot: {
        composition: 'Rear medium shot centered on subject in theater seating',
        cameraSettings: 'ISO 800, f/4.0, 1/60 s',
        filmGrain: 'Moderate grain'
      },
      lensEffects: {
        optics: 'Standard lens, slight vignette',
        artifacts: 'Film scratches and dust visible on seats',
        depthOfField: 'Deep focus capturing entire seating area'
      },
      subject: {
        description: 'Young adult Caucasian female, slim body type, viewed from behind',
        wardrobe: 'Houndstooth patterned blazer',
        grooming: 'Shoulder-length dark hair, loose and natural'
      },
      scene: {
        location: 'Empty, vintage theater or auditorium',
        timeOfDay: 'Evening or night indoors',
        environment: 'Dimly lit with spot illumination on subject, dark background'
      },
      visualDetails: {
        action: 'Subject standing between rows, hands resting on seat backs',
        props: 'Worn red theater seats arranged in rows',
        physics: 'Soft shadows cast behind subject'
      },
      cinematography: {
        lighting: 'Single overhead light casting dramatic shadows',
        tone: 'Moody, nostalgic',
        colorPalette: 'Muted reds, browns, and neutral beige tones'
      },
      textElements: {
        visibleText: 'none',
        typography: 'none',
        placement: 'none'
      },
      style: {
        visualAesthetic: 'Retro, film photography look with deliberate grain and muted colors'
      }
    }
  }
  ,
  {
    id: 'prompt15',
    title: 'Preset 15',
    img: prompt15Img,
    values: {
      shot: {
        composition: 'Low-angle medium full shot, subject centered against tiled wall, slight upward perspective',
        cameraSettings: 'ISO 400, f/4, 1/125 s, 35 mm lens',
        filmGrain: 'Minimal digital noise, smooth tones'
      },
      lensEffects: {
        optics: 'Sharp focus on subject and folders, subtle vignette at edges',
        artifacts: 'None noticeable',
        depthOfField: 'Deep focus on subject and background tiles, uniform sharpness'
      },
      subject: {
        description: 'Young Asian woman with medium-length black hair, wearing round glasses, carrying three large office folders (two yellow, one gray)',
        wardrobe: 'Light brown cropped blazer, white button-up shirt, brown skirt, badge clipped to skirt waistband',
        grooming: 'Neatly styled hair, natural makeup, clear complexion'
      },
      scene: {
        location: 'Indoor modern office or storage room with white modular tiled wall',
        timeOfDay: 'Unspecified indoor lighting, possibly daytime with cool-toned artificial light',
        environment: 'Clean, minimalist background with chrome screws on tiles'
      },
      visualDetails: {
        action: 'Woman holding folders firmly against chest, looking slightly to the side contemplatively',
        props: 'Yellow and gray office binders, employee ID badge',
        physics: 'Static pose, no visible movement'
      },
        cinematography: {
        lighting: 'Cool, diffused overhead lighting casting soft shadows, overall neutral tone',
        tone: 'Professional, subdued, slightly cool',
        colorPalette: 'Muted earth tones with beige, white, gray, and hints of yellow'
      },
      textElements: {
        visibleText: 'Small readable text on ID badge, blurred and not fully legible',
        typography: 'Small sans-serif font on badge',
        placement: "Badge clipped near waist on skirt's right side"
      },
      style: {
        visualAesthetic: 'Clean corporate style, minimalistic and formal'
      }
    }
  }
  ,
  {
    id: 'prompt16',
    title: 'Preset 16',
    img: prompt16Img,
    values: {
      shot: {
        composition: 'Close-up portrait, subject centered, slight low-angle, 85 mm lens',
        cameraSettings: 'ISO 400, f/1.8, 1/200 s, full-frame sensor',
        filmGrain: 'Minimal grain, clean image'
      },
      lensEffects: {
        optics: 'Sharp focus on face and upper torso, natural skin texture visible',
        artifacts: 'None',
        depthOfField: 'Shallow depth, blurred black background'
      },
      subject: {
        description: 'Person with long black hair, red eyes, open mouth showing vampire-like sharp fangs, intense expression',
        wardrobe: 'Light blue sleeveless tank top, black ribbon choker with silver chain and small pendant',
        grooming: 'Natural skin, slightly flushed cheeks, subtle shine on skin'
      },
      scene: {
        location: 'Studio or dark undefined setting',
        timeOfDay: 'Night or artificially lit environment',
        environment: 'Completely black background, no visible objects'
      },
      visualDetails: {
        action: 'Person shouting or growling, hair partially moving',
        props: 'Black ribbon tied around neck with silver chain necklace, pendant',
        physics: 'Hair strands slightly lifted, natural skin highlights'
      },
      cinematography: {
        lighting: 'Hard directional front light creating shadows and highlights on face and chest, high contrast',
        tone: 'Dramatic, intense, edgy',
        colorPalette: 'Muted blues, natural skin tones, black background, slight red accents in eyes'
      },
      textElements: {
        visibleText: 'None',
        typography: 'None',
        placement: 'None'
      },
      style: {
        visualAesthetic: 'Dark dramatic portrait, horror/vampire theme, high contrast'
      }
    }
  }
  ,
  {
    id: 'prompt17',
    title: 'Preset 17',
    img: prompt17Img,
    tags: ['faceless'],
    values: {
      shot: {
        composition: 'Medium shot, figure centered amid flowing grass, flowers framing bottom corners',
        cameraSettings: 'Low shutter speed intentionally blurred motion, medium focal length around 50 mm',
        filmGrain: 'Smooth, minimal grain'
      },
      lensEffects: {
        optics: 'Soft focus due to motion blur',
        artifacts: 'None',
        depthOfField: 'Moderate depth of field keeping grass and flowers distinct'
      },
      subject: {
        description: 'Person dressed in flowing white garment, blurred mid-motion running or moving fast left to right',
        wardrobe: 'Loose, long white dress or robe, no visible patterns',
        grooming: 'Hair styled in bun'
      },
      scene: {
        location: 'Grassy field with tall, flowing green grass and clusters of dense, bright coral-pink flowers',
        timeOfDay: 'Indeterminate, dark solid background suggests studio or night-time artificially lit',
        environment: 'Calm natural field contrasting with strong figure movement'
      },
      visualDetails: {
        action: 'Person appears to be running quickly through grass',
        props: 'None',
        physics: 'Air movement causes grass to bend and flow dynamically'
      },
      cinematography: {
        lighting: 'Soft, even lighting focused on subject and grass',
        tone: 'Dreamlike, surreal',
        colorPalette: 'Deep navy background, vivid green grass, coral-pink flowers, bright white clothing'
      },
      textElements: {
        visibleText: 'None',
        typography: 'None',
        placement: 'None'
      },
      style: {
        visualAesthetic: 'Surreal, ethereal, painterly with motion blur emphasis'
      }
    }
  }
  ,
  {
    id: 'prompt18',
    title: 'Preset 18',
    img: prompt18Img,
    tags: ['faceless'],
    values: {
      shot: {
        composition: 'Wide-angle medium shot, multiple figures evenly spaced in golden dry grass field, rustic hut centered in background',
        cameraSettings: 'ISO 400, f/4, 1/125 sec, natural light',
        filmGrain: 'Slight analog film texture, noticeable grain'
      },
      lensEffects: {
        optics: 'Slight peripheral softness, sharp focus on middle subjects',
        artifacts: 'None',
        depthOfField: 'Moderate depth, background trees slightly blurred'
      },
      subject: {
        description: 'Eight identical young women with short black hair, wearing puffy white textured sweaters and black skirts, black knee-high boots, various standing and crouching poses',
        wardrobe: 'Puffy white feathered or fringed sweaters, short black skirts, black boots',
        grooming: 'Short black hair, natural makeup'
      },
      scene: {
        location: 'Open field with tall dry golden grass, small white rustic hut with worn roof, dense dark green conifer trees in background',
        timeOfDay: 'Overcast daylight, soft diffused lighting',
        environment: 'Dry field, slightly overcast sky, rustic rural setting'
      },
      visualDetails: {
        action: 'Figures arranged in semi-circle facing various directions, one figure in front raising arms covering face',
        props: 'Dilapidated hut with open window and door in background',
        physics: 'Still scene, no motion blur, natural wind effect in grass'
      },
      cinematography: {
        lighting: 'Soft natural overcast light, even illumination, muted shadows',
        tone: 'Earthy, muted, slightly desaturated warm tones',
        colorPalette: 'Golden brown, off-white, dark green, black'
      },
      textElements: {
        visibleText: 'none',
        typography: 'none',
        placement: 'none'
      },
      style: {
        visualAesthetic: 'Surreal, ethereal, minimalist, naturalistic with subtle artistic expression'
      }
    }
  }
  ,
  {
    id: 'prompt19',
    title: 'Preset 19',
    img: prompt19Img,
    values: {
      shot: {
        composition: 'Eye-level medium wide, 35 mm lens, model and yak centered foreground with lake and mountains backdrop',
        cameraSettings: 'ISO 100, f/5.6, 1/200 s, daylight balanced full-frame sensor',
        filmGrain: 'Clean, smooth digital finish'
      },
      lensEffects: {
        optics: 'Sharp focus on model and yak with subtle background softness',
        artifacts: 'None visible',
        depthOfField: 'Moderate depth captured, background slightly blurred'
      },
      subject: {
        description: 'Asian female model with slicked black hair, neutral expression, standing close to large white yak with curved dark horns',
        wardrobe: 'Oversized textured black fur coat, beige pants, cream fuzzy leg warmers with black trim',
        grooming: 'Hair tightly slicked back, natural makeup'
      },
      scene: {
        location: 'Rocky lakeshore with turquoise water, snow-capped mountains in distant background',
        timeOfDay: 'Mid-morning, clear sunny sky with scattered clouds',
        environment: 'Fresh outdoor mountain lake setting with natural light'
      },
      visualDetails: {
        action: 'Model gently touching side of face while leaning on yak',
        props: 'None beyond natural elements',
        physics: 'Soft lake waves lapping rocky shoreline'
      },
      cinematography: {
        lighting: 'Natural sunlight from front-left creating soft natural shadows',
        tone: 'Earthy and natural mood, balanced contrast',
        colorPalette: 'Neutral tones, whites, blacks, earthy rocks, blue-green water'
      },
      textElements: {
        visibleText: 'None',
        typography: 'None',
        placement: 'None'
      },
      style: {
        visualAesthetic: 'High fashion editorial with natural wildlife integration, minimalist and serene atmosphere'
      }
    }
  }
  ,
  {
    id: 'prompt20',
    title: 'Preset 20',
    img: prompt20Img,
    values: {
      shot: {
        composition: 'Centered vertical medium full-body shot, eye-level, model seated on simple white folding chair against textured concrete wall',
        cameraSettings: 'ISO 400, f/2.8, 1/125 s, 85 mm lens',
        filmGrain: 'Smooth digital image with slight natural texture'
      },
      lensEffects: {
        optics: 'Crisp focus on model, subtle background texture in mild blur',
        artifacts: 'None',
        depthOfField: 'Shallow, model fully in focus, background softly blurred'
      },
      subject: {
        description: 'Female model with pale skin, straight dark hair parted center, neutral intense expression, slender build seated with legs crossed',
        wardrobe: 'Long dark olive coat reaching floor, faux fur tiger print shawl draped asymmetrically over shoulders, sheer black stockings with back seam, pointed dark brown heels, small black handbag',
        grooming: 'Straight hair loosely styled, minimal natural makeup, small white earrings'
      },
      scene: {
        location: 'Urban outdoor sidewalk with rough gray concrete wall backdrop',
        timeOfDay: 'Overcast midday with diffused daylight',
        environment: 'Neutral urban setting, minimalistic and slightly weathered'
      },
      visualDetails: {
        action: 'Model sitting with legs crossed clasping hands over knee, direct gaze at camera',
        props: 'White folding chair, black handbag',
        physics: 'Natural relaxed posture, subtle folds in fabric'
      },
      cinematography: {
        lighting: 'Soft diffused natural light, neutral shadows, no harsh contrast',
        tone: 'Cool toned, moody but refined',
        colorPalette: 'Muted earth tones brown, dark olive, gray, black, warm tiger print accents'
      },
      textElements: {
        visibleText: 'none',
        typography: 'none',
        placement: 'none'
      },
      style: {
        visualAesthetic: 'Modern high fashion editorial style, minimalist urban, sophisticated and moody'
      }
    }
  }
  ,
  {
    id: 'prompt21',
    title: 'Preset 21',
    img: prompt21Img,
    tags: ['male'],
    values: {
      shot: {
        composition: 'Low angle close-up from ground, two men filling frame with blue sky and building background',
        cameraSettings: 'Bright daylight, high ISO, f/8 for sharp focus',
        filmGrain: 'Prominent grain, vintage film texture'
      },
      lensEffects: {
        optics: 'Wide-angle lens distortion',
        artifacts: 'Slight chromatic aberration on edges',
        depthOfField: 'Deep focus, both men sharply detailed'
      },
      subject: {
        description: 'Two men in black suits with white shirts and black ties, one light-skinned with shoulder-length hair smiling, one dark-skinned with afro hairstyle holding a revolver, serious expression',
        wardrobe: 'Classic 1960s-style black suit and tie, white dress shirts',
        grooming: 'Neatly groomed, afro and sideburns on darker man, clean-shaven on lighter man'
      },
      scene: {
        location: 'Urban outdoor with visible white building walls',
        timeOfDay: 'Midday with bright sunlight',
        environment: 'Clear blue sky, shadows cast on men\'s faces'
      },
      visualDetails: {
        action: 'Dark-skinned man loading or holding gun, lighter man observing with slight smile',
        props: 'Revolver handgun, gold wrist bracelet',
        physics: 'Natural bright light and shadow interplay on faces and clothing'
      },
      cinematography: {
        lighting: 'Harsh key light from sun, strong shadows',
        tone: 'Slightly warm vintage tone',
        colorPalette: 'Blues, blacks, whites, skin tones, gold accent'
      },
      textElements: {
        visibleText: 'None',
        typography: 'None',
        placement: 'None'
      },
      style: {
        visualAesthetic: 'Gritty 1960s crime film look, bold and iconic composition'
      }
    }
  }
  ,
  {
    id: 'prompt22',
    title: 'Preset 22',
    img: prompt22Img,
    tags: ['faceless'],
    values: {
      shot: {
        composition: 'Low angle, wide lens capturing foreground human and car with background collapsing building',
        cameraSettings: 'ISO 400, f/5.6, 1/500 s, natural light',
        filmGrain: 'Minimal grain, sharp focus'
      },
      lensEffects: {
        optics: 'Wide-angle lens distortion slightly visible on edges',
        artifacts: 'None noticeable',
        depthOfField: 'Deep focus, all elements sharp'
      },
      subject: {
        description: 'Woman with blonde hair, walking away from camera, wearing a long shiny teal coat and black pants',
        wardrobe: 'Glossy teal long coat, dark textured pants, no visible footwear details',
        grooming: 'Medium-length blonde hair, subtle natural makeup'
      },
      scene: {
        location: 'Open gravel field with bushes and sparse trees, distant urban area',
        timeOfDay: 'Midday, bright sunlight',
        environment: 'Clear sky, dusty air from explosion'
      },
      visualDetails: {
        action: 'Large concrete building mid-collapse with debris and dust clouds',
        props: 'Classic black four-door sedan car parked on gravel',
        physics: 'Dust and smoke billowing realistically as building fragments fall'
      },
      cinematography: {
        lighting: 'High-key natural sunlight casting clear shadows',
        tone: 'Dramatic, intense with warm earthy tones',
        colorPalette: 'Earthy browns, greens, greys with teal accent'
      },
      textElements: {
        visibleText: 'License plate on car with characters "42-29-91"',
        typography: 'Standard license plate typeface',
        placement: 'Rear bumper of vehicle'
      },
      style: {
        visualAesthetic: 'Cinematic realism with suspenseful mood and dynamic action'
      }
    }
  }
  ,
  {
    id: 'prompt23',
    title: 'Preset 23',
    img: prompt23Img,
    values: {
      shot: {
        composition: 'Eye-level medium full-body shot, subject centered against lockers, blurred figures passing left and right',
        cameraSettings: 'ISO 400, f/4, 1/30 s for motion blur',
        filmGrain: 'Moderate grain typical of 1980s film'
      },
      lensEffects: {
        optics: 'Slight soft focus, motion blur on peripheral figures',
        artifacts: 'None noticeable',
        depthOfField: 'Deep focus on central figure and lockers, blur on moving figures'
      },
      subject: {
        description: 'Teenage girl with shoulder-length wavy brown hair, neutral expression, standing still',
        wardrobe: 'Black long coat, grey patterned skirt, black scarf with white print, white socks, black shoes, large grey crossbody bag',
        grooming: 'Natural look, no makeup visible'
      },
      scene: {
        location: 'School hallway interior with mustard yellow lockers',
        timeOfDay: 'Daytime, indoor fluorescent lighting',
        environment: 'School corridor, busy with motion'
      },
      visualDetails: {
        action: 'Girl standing stationary with hands behind back; two blurred teenagers running past',
        props: 'Lockers, crossbody bag',
        physics: 'Motion blur effect on moving figures'
      },
      cinematography: {
        lighting: 'Flat even fluorescent lighting typical of school hallway',
        tone: 'Somber, isolated mood',
        colorPalette: 'Muted yellows, blacks, blues, greys'
      },
      textElements: {
        visibleText: 'None',
        typography: 'None',
        placement: 'None'
      },
      style: {
        visualAesthetic: '1980s film still, naturalistic, slightly grainy realistic tone'
      }
    }
  }
  ,
  {
    id: 'prompt24',
    title: 'Preset 24',
    img: prompt24Img,
    tags: ['bw'],
    values: {
      shot: {
        composition: 'Low-angle action shot capturing skier mid-jump with skis angled forward and snow splashing below',
        cameraSettings: 'High shutter speed to freeze motion, medium telephoto lens',
        filmGrain: 'Moderate grain typical of black-and-white film'
      },
      lensEffects: {
        optics: 'Sharp focus on skier with slightly blurred snow particles in foreground',
        artifacts: 'None',
        depthOfField: 'Shallow depth of field isolating subject against blurred background'
      },
      subject: {
        description: 'Female skier wearing sunglasses, braided hair flying backward, focused expression, mid-air jump pose',
        wardrobe: 'Cable knit turtleneck sweater, loose-fitting ski pants, ski boots with bindings',
        grooming: 'Hair neatly braided in two pigtails, clean skin'
      },
      scene: {
        location: 'Snowy mountainous terrain with fresh powder',
        timeOfDay: 'Bright daylight',
        environment: 'Clear sky with contrasty light'
      },
      visualDetails: {
        action: 'Skier launching into air off snow jump, skis angled upwards, snow dramatically spraying',
        props: 'Pair of skis, ski poles gripped in hands',
        physics: 'Snow particles caught mid-air, dynamic airborne pose'
      },
      cinematography: {
        lighting: 'High-contrast natural sunlight creating sharp shadows',
        tone: 'Dramatic black and white monochrome',
        colorPalette: 'Grayscale black, white, and shades of gray'
      },
      textElements: {
        visibleText: 'None',
        typography: 'None',
        placement: 'None'
      },
      style: {
        visualAesthetic: 'Classic vintage black-and-white sports photography capturing motion and energy'
      }
    }
  }
  ,
  {
    id: 'prompt25',
    title: 'Preset 25',
    img: prompt25Img,
    tags: ['male'],
    values: {
      shot: {
        composition: 'Medium portrait shot, subject centered, outdoors with horizon line',
        cameraSettings: 'Natural light, moderate ISO for daylight, shallow focus',
        filmGrain: 'Visible grain and slight aging discoloration'
      },
      lensEffects: {
        optics: 'Soft focus with slight vignette',
        artifacts: 'Light flare and color fade damage on edges',
        depthOfField: 'Shallow depth with blurred background'
      },
      subject: {
        description: 'Bearded man with long dark hair wearing knitted beige hat, holding white lamb',
        wardrobe: 'Dark heavy coat or jacket, brown pants',
        grooming: 'Full beard, natural unstyled hair'
      },
      scene: {
        location: 'Rural outdoor setting, grassy field with trees and hills in distance',
        timeOfDay: 'Late afternoon or overcast daylight',
        environment: 'Earthy tones, cool ambient lighting'
      },
      visualDetails: {
        action: 'Man holding lamb close to chest with both hands',
        props: 'Cigarette in man\'s mouth',
        physics: 'Lamb appears calm and stable in arms'
      },
      cinematography: {
        lighting: 'Diffused natural light, soft shadows',
        tone: 'Nostalgic and warm despite cooler colors',
        colorPalette: 'Muted earthy browns, greens, and creams'
      },
      textElements: {
        visibleText: 'None',
        typography: 'None',
        placement: 'None'
      },
      style: {
        visualAesthetic: 'Vintage, rustic, candid, rural portrait'
      }
    }
  }
  ,
  {
    id: 'prompt26',
    title: 'Preset 26',
    img: prompt26Img,
    tags: ['non-portrait', 'faceless'],
    values: {
      shot: {
        composition: 'Centered medium shot, slight low angle, subject mid-ground, rocks in background',
        cameraSettings: 'Low ISO, slow shutter speed for blur, wide aperture',
        filmGrain: 'Noticeable grain, vintage texture'
      },
      lensEffects: {
        optics: 'Soft focus on subject, sharp edges on rocks',
        artifacts: 'Grain noise, slight chromatic aberration',
        depthOfField: 'Shallow depth, background rocks slightly blurred'
      },
      subject: {
        description: 'Single figure wearing a long white dress, black hair, facing away, barefoot',
        wardrobe: 'Simple, flowing white dress',
        grooming: 'Hair loose, natural'
      },
      scene: {
        location: 'Outdoor rocky terrain, barren landscape',
        timeOfDay: 'Night',
        environment: 'Dark, starless sky, red light illuminating ground and rocks'
      },
      visualDetails: {
        action: 'Figure walking forward, blurred motion',
        props: 'None',
        physics: 'Soft shadows cast on ground, light source low angle'
      },
      cinematography: {
        lighting: 'Intense red spotlight from below, strong contrast',
        tone: 'Surreal, eerie, mysterious',
        colorPalette: 'Dominantly red and black with bright white'
      },
      textElements: {
        visibleText: 'None',
        typography: 'None',
        placement: 'None'
      },
      style: {
        visualAesthetic: 'Surreal, cinematic, high contrast, retro grainy vibe'
      }
    }
  }
  ,
  {
    id: 'prompt27',
    title: 'Preset 27',
    img: prompt27Img,
    tags: ['non-portrait', 'faceless'],
    values: {
      shot: {
        composition: 'Central full-body figure with mountainous horizon; circular vignette framing',
        cameraSettings: 'Low light setting, long exposure causing ghostly blur, high contrast',
        filmGrain: 'Heavy grain with textured noise'
      },
      lensEffects: {
        optics: 'Vignette creating tunnel vision effect',
        artifacts: 'Light flare near figure\'s midsection',
        depthOfField: 'Deep focus on background and figure blurred'
      },
      subject: {
        description: 'Humanoid figure glowing white with hooded robe, casting shadow',
        wardrobe: 'Flowing white robe with hood',
        grooming: 'Indiscernible due to intense glow'
      },
      scene: {
        location: 'Desert terrain with rocky hills',
        timeOfDay: 'Night',
        environment: 'Sparse vegetation, rugged ground, dark sky'
      },
      visualDetails: {
        action: 'Static pose, slight motion blur',
        props: 'None',
        physics: 'Strong light source causing shadow and bright halo'
      },
      cinematography: {
        lighting: 'Harsh red backlight with strong white glow on figure',
        tone: 'Surreal, eerie, otherworldly',
        colorPalette: 'Dominant reds, whites, and deep blacks'
      },
      textElements: {
        visibleText: 'none',
        typography: 'none',
        placement: 'none'
      },
      style: {
        visualAesthetic: 'Experimental, horror, paranormal vibe'
      }
    }
  }
  ,
  {
    id: 'prompt28',
    title: 'Preset 28',
    img: prompt28Img,
    values: {
      shot: {
        composition: 'Close-up side profile of face tilted back, clawed hand close to forehead',
        cameraSettings: 'Soft focus, shallow depth, neutral exposure',
        filmGrain: 'Smooth, minimal grain'
      },
      lensEffects: {
        optics: 'Slight vignette, diffused edges',
        artifacts: 'None',
        depthOfField: 'Very shallow focusing on face and claw'
      },
      subject: {
        description: 'Pale-skinned person with platinum blonde hair, eyes closed, serene expression, small black dot on forehead, claw hand with long black talons on neck and above face',
        wardrobe: 'None visible',
        grooming: 'Smooth, natural skin texture, slightly wavy hair'
      },
      scene: {
        location: 'Indeterminate, plain light grey or white background',
        timeOfDay: 'Indeterminate',
        environment: 'Minimalistic, abstract'
      },
      visualDetails: {
        action: 'Clawed hand reaching near forehead, fingers spread slightly',
        props: 'None',
        physics: 'Soft lighting creating subtle shadows on skin and claws'
      },
      cinematography: {
        lighting: 'Soft, high-key lighting from front or side',
        tone: 'Ethereal, surreal, calm',
        colorPalette: 'Pale skin tones, soft blonde hair, stark black claws contrast'
      },
      textElements: {
        visibleText: 'None',
        typography: 'None',
        placement: 'None'
      },
      style: {
        visualAesthetic: 'Surreal, minimalist, high contrast between dark and light elements'
      }
    }
  }
  ,
  {
    id: 'prompt29',
    title: 'Preset 29',
    img: prompt29Img,
    tags: ['faceless'],
    values: {
      shot: {
        composition: 'Medium shot of three moving figures side by side, central framing',
        cameraSettings: 'Long exposure, slow shutter speed',
        filmGrain: 'Fine grain, enhanced by motion blur'
      },
      lensEffects: {
        optics: 'Light trails and streaking effect surrounding figures',
        artifacts: 'Motion blur, light streak distortion',
        depthOfField: 'Deep focus obscured by blur'
      },
      subject: {
        description: 'Three human figures with indistinct facial features due to motion blur, wearing dark clothing',
        wardrobe: 'Dark jackets with bright reflective or lit stripes creating streak patterns',
        grooming: 'Indistinguishable due to blur'
      },
      scene: {
        location: 'Abstract or studio-like setting with plain blue and beige background',
        timeOfDay: 'Indeterminate due to stylized lighting',
        environment: 'Minimalist, no distinct environmental elements'
      },
      visualDetails: {
        action: 'Figures appear to be walking or moving quickly left to right',
        props: 'None visible',
        physics: 'Motion blur and light movement effects'
      },
      cinematography: {
        lighting: 'Warm lighting enhancing reflections on jackets and faces',
        tone: 'Dynamic, energetic, futuristic',
        colorPalette: 'Deep blues, warm golds, blacks, and whites'
      },
      textElements: {
        visibleText: 'None',
        typography: 'None',
        placement: 'None'
      },
      style: {
        visualAesthetic: 'Abstract, motion blur photography with light streak effects, modern and energetic'
      }
    }
  }
  ,
  {
    id: 'prompt30',
    title: 'Preset 30',
    img: prompt30Img,
    tags: ['non-portrait'],
    values: {
      shot: {
        composition: 'Close-up profile shot of dog\'s head, teeth fully bared, sharp focus on mouth',
        cameraSettings: 'ISO 800, f/4, 1/125 s, medium zoom lens',
        filmGrain: 'Moderate grain giving slightly vintage texture'
      },
      lensEffects: {
        optics: 'Soft vignette at edges, sharp focus on teeth and collar',
        artifacts: 'None noticeable',
        depthOfField: 'Shallow, background blurred to emphasize head'
      },
      subject: {
        description: 'Large black dog with mouth wide open showing exaggerated large sharp teeth',
        wardrobe: 'Sparkling multi-row diamond-encrusted collar',
        grooming: 'Shiny well-groomed black fur'
      },
      scene: {
        location: 'Outdoors',
        timeOfDay: 'Twilight or early night',
        environment: 'Deep blue sky, dark silhouettes of landscape in background'
      },
      visualDetails: {
        action: 'Dog snarling or growling with mouth wide open',
        props: 'Diamond collar reflecting light',
        physics: 'Teeth exaggeratedly large and sharp, realistic tongue and mouth interior'
      },
      cinematography: {
        lighting: 'Low light with focused source illuminating dog\'s face and collar',
        tone: 'Intense, dramatic, slightly surreal',
        colorPalette: 'Dark blues, deep blacks, bright white and silver reflections on teeth and collar'
      },
      textElements: {
        visibleText: 'None',
        typography: 'None',
        placement: 'None'
      },
      style: {
        visualAesthetic: 'High-contrast dramatic close-up, surreal fantasy horror style'
      }
    }
  }
  ,
  {
    id: 'prompt31',
    title: 'Preset 31',
    img: prompt31Img,
    values: {
      shot: {
        composition: 'Close-up centered headshot, eye-level, tight framing on face and upper shoulders',
        cameraSettings: 'ISO 100, f/4.0, 85mm lens, sharp focus on face',
        filmGrain: 'Fine grain, slight digital texture'
      },
      lensEffects: {
        optics: 'Crisp lens with slight reflection on goggles, no distortion',
        artifacts: 'None visible',
        depthOfField: 'Shallow, focused on face and clothing textures'
      },
      subject: {
        description: 'Young woman with flushed cheeks, neutral expression, wearing winter gear',
        wardrobe: 'Cream fluffy fur-lined coat, blue knit beanie under blue hooded zip-up sweater with prominent red-and-white diamond zipper pulls, mirrored ski goggles above forehead',
        grooming: 'Natural makeup, red cheeks from cold, light freckles'
      },
      scene: {
        location: 'Studio with plain white background',
        timeOfDay: 'Unknown, controlled indoor lighting',
        environment: 'Minimalistic studio environment'
      },
      visualDetails: {
        action: 'Subject staring directly at camera with subtle parted lips',
        props: 'Ski goggles resting on head',
        physics: 'Soft natural light creating gentle shadows on face and coat'
      },
      cinematography: {
        lighting: 'Bright, diffused soft lighting from front, minimal shadows',
        tone: 'Cool winter tones with warm skin highlights',
        colorPalette: 'Cream, blue, red accents, light neutral background'
      },
      textElements: {
        visibleText: 'None',
        typography: 'None',
        placement: 'None'
      },
      style: {
        visualAesthetic: 'Fashion editorial, clean, high-detail, winter-themed portrait'
      }
    }
  }
  ,
  {
    id: 'prompt32',
    title: 'Preset 32',
    img: prompt32Img,
    tags: ['faceless'],
    values: {
      shot: {
        composition: 'Full-body side angle, subject centered, shoreline background with breaking waves',
        cameraSettings: 'Medium focal length, likely 50-85mm, balanced exposure, natural light',
        filmGrain: 'Soft digital texture, natural grain from lighting'
      },
      lensEffects: {
        optics: 'Clear focus on subject, smooth background with slight motion blur in water',
        artifacts: 'None',
        depthOfField: 'Moderate depth allowing clear subject against wave details'
      },
      subject: {
        description: 'Person standing barefoot on wet sand, arms extended, wearing a sheer veil over head, facing sideways',
        wardrobe: 'Light cream loose button-up shirt, beige loose-fitting pants rolled at ankles, barefoot',
        grooming: 'Shaved or closely cropped hair, veil partially obscuring face'
      },
      scene: {
        location: 'Rocky or pebbly beach with waves crashing nearby',
        timeOfDay: 'Late afternoon or early evening with soft diffused light',
        environment: 'Windswept shoreline with active water movement and wet sand'
      },
      visualDetails: {
        action: 'Subject subtly balancing on wet sand with waves splashing around feet, gently holding veil',
        props: 'Sheer veil draped over head',
        physics: 'Wave motion causing visible water splashes and wet sand reflections'
      },
      cinematography: {
        lighting: 'Soft natural lighting, diffused, low contrast, directional from above or side',
        tone: 'Serene, contemplative',
        colorPalette: 'Muted earth tones, beige, cream, greens, grayish ocean blues'
      },
      textElements: {
        visibleText: 'None',
        typography: 'None',
        placement: 'None'
      },
      style: {
        visualAesthetic: 'Naturalistic, moody, minimalistic'
      }
    }
  }
  ,
  {
    id: 'prompt33',
    title: 'Preset 33',
    img: prompt33Img,
    values: {
      shot: {
        composition: 'Close-up portrait, centered subject with hands raised near face',
        cameraSettings: 'Low key lighting, shallow depth of field, 85 mm lens, f/1.8, ISO 400, 1/125 s',
        filmGrain: 'Slight grain enhancing texture'
      },
      lensEffects: {
        optics: 'Sharp focus on face and hands, soft background blur',
        artifacts: 'None noticeable',
        depthOfField: 'Shallow focusing on subject\'s face and wrapped hands'
      },
      subject: {
        description: 'Female boxer with wet, dark curly hair partially obscuring face, intense gaze forward',
        wardrobe: 'Boxing hand wraps in beige, branded "EVERLAST"',
        grooming: 'Damp skin with sheen, natural makeup, hair wet and tousled'
      },
      scene: {
        location: 'Studio style dark backdrop',
        timeOfDay: 'Indeterminate',
        environment: 'Controlled indoor lighting, dark background'
      },
      visualDetails: {
        action: 'Subject holding fists up in defensive boxing pose',
        props: 'Boxing hand wraps',
        physics: 'Wet hair clinging to face, glistening skin from sweat or water'
      },
      cinematography: {
        lighting: 'Dramatic low key, single light source highlighting facial contours and muscles',
        tone: 'Intense, gritty, focused mood',
        colorPalette: 'Muted earth tones, warm skin hues against dark background'
      },
      textElements: {
        visibleText: '"EVERLAST" on hand wraps, clear and readable',
        typography: 'Bold black font on white wrist label',
        placement: 'Center of wrist wraps on both hands'
      },
      style: {
        visualAesthetic: 'Realistic, raw, intimate sports portrait with moody atmosphere'
      }
    }
  }
  ,
  {
    id: 'prompt34',
    title: 'Preset 34',
    img: prompt34Img,
    tags: ['non-portrait'],
    values: {
      shot: {
        composition: 'Centered medium shot, 35 mm lens, cat and turntable fill frame',
        cameraSettings: 'ISO 400, f/4.5, 1/125 s, standard full-frame sensor',
        filmGrain: 'Slight graininess, retro film texture'
      },
      lensEffects: {
        optics: 'Sharp focus on cat and turntable, soft background',
        artifacts: 'None',
        depthOfField: 'Shallow depth of field at f/4.5, background softened'
      },
      subject: {
        description: 'Cream-colored cat with pinkish ears wearing white-rimmed sunglasses and black headphones',
        wardrobe: 'White-bordered oval sunglasses, over-ear black DJ headphones',
        grooming: 'Clean, smooth coat, well-groomed'
      },
      scene: {
        location: 'Indoor setting with green fabric backdrop',
        timeOfDay: 'Neutral indoor lighting, no natural light',
        environment: 'Controlled studio-like setup with minimal distractions'
      },
      visualDetails: {
        action: 'Cat posed as if DJing, paws near green vinyl record on turntable',
        props: 'Vintage pink turntable with green vinyl record',
        physics: 'Static scene, no motion blur'
      },
      cinematography: {
        lighting: 'Even soft light with mild shadow on cat\'s left side',
        tone: 'Playful, retro',
        colorPalette: 'Pastel pink, green, cream, black accents'
      },
      textElements: {
        visibleText: 'None',
        typography: 'None',
        placement: 'None'
      },
      style: {
        visualAesthetic: 'Retro pop art style, playful and nostalgic'
      }
    }
  }
  ,
  {
    id: 'prompt35',
    title: 'Preset 35',
    img: prompt35Img,
    tags: ['bw', 'male'],
    values: {
      shot: {
        composition: 'Medium close-up, subject leaning back, centered, square crop',
        cameraSettings: 'Low ISO for clarity, medium aperture for sharpness',
        filmGrain: 'Fine grain typical of black and white portraiture'
      },
      lensEffects: {
        optics: 'Sharp focus on face, chest, and hands, smooth background',
        artifacts: 'None',
        depthOfField: 'Shallow depth of field keeping subject sharp and background soft'
      },
      subject: {
        description: 'Shirtless young man with short wavy hair, cigarette in mouth, intense gaze',
        wardrobe: 'Dark pants partially visible',
        grooming: 'Clean skin, slightly tousled hair, ear hoop earring'
      },
      scene: {
        location: 'Indoor setting with plain vertical blinds or curtains in the background',
        timeOfDay: 'Indeterminate, soft even lighting possibly natural light',
        environment: 'Minimalistic interior with neutral backdrop'
      },
      visualDetails: {
        action: 'Man reclining, holding a cigarette between lips',
        props: 'Cigarette',
        physics: 'Smoke slightly visible around cigarette tip'
      },
      cinematography: {
        lighting: 'Soft diffused lighting highlighting muscles and facial features',
        tone: 'Moody, contemplative black and white',
        colorPalette: 'Grayscale monochrome'
      },
      textElements: {
        visibleText: 'None',
        typography: 'None',
        placement: 'None'
      },
      style: {
        visualAesthetic: 'Fine art black and white portrait with high contrast and texture'
      }
    }
  }
  ,
  {
    id: 'prompt36',
    title: 'Preset 36',
    img: prompt36Img,
    tags: ['bw'],
    values: {
      shot: {
        composition: 'Medium close-up, subject centered facing left in profile',
        cameraSettings: 'ISO 400, f/4, 1/125s, 85mm',
        filmGrain: 'Fine grain, classic black and white film texture'
      },
      lensEffects: {
        optics: 'Soft focus on lace veil with sharp detail, slight vignette',
        artifacts: 'None',
        depthOfField: 'Shallow, background softly blurred'
      },
      subject: {
        description: 'Woman with lace veil draped over head and shoulders, holding a seashell against chest, wearing white bottoms, natural skin tone',
        wardrobe: 'Intricate white lace veil, white fabric bikini bottoms, coral bead necklace',
        grooming: 'Natural makeup, closed eyes, relaxed expression'
      },
      scene: {
        location: 'Outdoor rocky natural environment',
        timeOfDay: 'Daylight, diffused soft lighting',
        environment: 'Outdoor natural setting with blurred rock textures'
      },
      visualDetails: {
        action: 'Woman holds seashell delicately against chest with right hand',
        props: 'White seashell, coral bead necklace',
        physics: 'Light filters softly through lace creating subtle shadows'
      },
      cinematography: {
        lighting: 'Soft, diffuse daylight, high-key black and white contrast',
        tone: 'Serene, ethereal, delicate mood',
        colorPalette: 'Monochrome black and white'
      },
      textElements: {
        visibleText: 'None',
        typography: 'None',
        placement: 'None'
      },
      style: {
        visualAesthetic: 'Fine art black and white portraiture, minimalist, natural textures, ethereal elegance'
      }
    }
  }
  ,
  {
    id: 'prompt37',
    title: 'Preset 37',
    img: prompt37Img,
    tags: ['non-portrait'],
    values: {
      shot: {
        composition: 'Mid-level close-up, metal and plastic objects centered on table',
        cameraSettings: 'ISO 400, f/4.0, 1/125 s, standard lens',
        filmGrain: 'Minimal, smooth texture'
      },
      lensEffects: {
        optics: 'Clear sharp focus on all objects with slight reflections',
        artifacts: 'None',
        depthOfField: 'Deep focus, everything in sharp detail'
      },
      subject: {
        description: 'Five dome-shaped shiny stainless steel containers with knob handles, stacked ice cream cones, stacked white disposable cups',
        wardrobe: 'None applicable',
        grooming: 'None applicable'
      },
      scene: {
        location: 'Indoor countertop or serving station',
        timeOfDay: 'Neutral ambient light, likely daytime',
        environment: 'Clean, minimalistic, neutral gray wall background'
      },
      visualDetails: {
        action: 'Station set up, no movement',
        props: 'Plastic holders for cones and cups, metallic countertop, small tap or dispenser, yellowish small spoons in plastic tube',
        physics: 'Reflections of overhead lights and surroundings on shiny metal surfaces'
      },
      cinematography: {
        lighting: 'Soft and even diffuse light, no strong shadows',
        tone: 'Neutral, utilitarian',
        colorPalette: 'Metallic silver, beige cones, white cups, neutral gray background'
      },
      textElements: {
        visibleText: 'None',
        typography: 'None',
        placement: 'None'
      },
      style: {
        visualAesthetic: 'Functional, modern, minimalistic'
      }
    }
  }
  ,
  {
    id: 'prompt38',
    title: 'Preset 38',
    img: prompt38Img,
    tags: ['bw'],
    values: {
      shot: {
        composition: 'Two-panel diptych, full-body subject at center-right of left panel and center of right panel, chair in foreground on left in both panels',
        cameraSettings: 'High contrast black and white, sharp focus, moderate depth of field',
        filmGrain: 'Fine grain adding classic film texture'
      },
      lensEffects: {
        optics: 'Moderate focal length with slight wide-angle effect',
        artifacts: 'None',
        depthOfField: 'Deep focus keeping subject and chair sharp'
      },
      subject: {
        description: 'Female model with short hair wearing a beret, loose white blouse, tie, and ruched high-waist pants',
        wardrobe: 'White blouse with rolled-up sleeves, black tie, grey ruched pants, black high-heeled shoes, black beret',
        grooming: 'Short bob haircut, dark lipstick'
      },
      scene: {
        location: 'Minimalist studio with white walls and polished concrete floor',
        timeOfDay: 'Indeterminate natural or soft artificial lighting',
        environment: 'Sparse and clean background emphasizing subject and chair'
      },
      visualDetails: {
        action: 'Model in dynamic poses balancing on one leg with the other leg lifted and extended behind or to the side',
        props: 'Simple wooden swivel chair with metal base',
        physics: 'Balance and motion suggested by legs lifted and arms positioned for stability'
      },
      cinematography: {
        lighting: 'Soft even light creating minimal shadows, high-key effect for clarity',
        tone: 'Artistic, stylish, and modern black-and-white fashion editorial',
        colorPalette: 'Monochrome black, white, gray shades'
      },
      textElements: {
        visibleText: 'None',
        typography: 'None',
        placement: 'None'
      },
      style: {
        visualAesthetic: 'Minimalist black and white fashion photography with dynamic posing and clean composition'
      }
    }
  }
  ,
  {
    id: 'prompt39',
    title: 'Preset 39',
    img: prompt39Img,
    tags: ['bw'],
    values: {
      shot: {
        composition: 'Low-angle medium close-up, subject centered crouching, minimalist backdrop',
        cameraSettings: 'ISO 400, f/4, 1/125s, monochrome mode, full-frame sensor',
        filmGrain: 'Fine grain, classic black and white aesthetic'
      },
      lensEffects: {
        optics: 'Sharp focus on face and boots, slight softness on background',
        artifacts: 'None',
        depthOfField: 'Shallow depth of field highlighting subject details, blurred floor and background'
      },
      subject: {
        description: 'Young woman crouching, tousled short wavy hair, intense gaze with winged eyeliner, slightly parted lips',
        wardrobe: 'Strapless corset top, long knit skirt, tied long black scarf wrapping around neck and trailing down',
        grooming: 'Flawless skin with natural texture, bold makeup accentuating eyes and lips, polished nails'
      },
      scene: {
        location: 'Plain studio with seamless white background and floor',
        timeOfDay: 'Indeterminate studio lighting',
        environment: 'Minimalist, controlled setting with no visible furniture or props'
      },
      visualDetails: {
        action: 'Crouching pose with arms wrapped around legs, holding boots, scarf trailing on floor',
        props: 'None besides clothing and accessories',
        physics: 'Natural fabric draping, slight movement implied by hair and scarf positioning'
      },
      cinematography: {
        lighting: 'Soft, diffused key light from front-left, subtle shadows for depth',
        tone: 'High-contrast monochrome emphasizing texture and form',
        colorPalette: 'Black and white with rich tonal range from deep blacks to bright whites'
      },
      textElements: {
        visibleText: 'None',
        typography: 'None',
        placement: 'None'
      },
      style: {
        visualAesthetic: 'High fashion editorial, classic monochrome photography, elegant yet edgy vibe'
      }
    }
  }
  ,
  {
    id: 'prompt40',
    title: 'Preset 40',
    img: prompt40Img,
    tags: ['non-portrait'],
    values: {
      shot: {
        composition: 'Close-up overhead, white salad bowl centered, second bowl top left partially shown',
        cameraSettings: 'ISO 400, f/4.0, 1/125s, 35 mm lens, natural lighting',
        filmGrain: 'None, crisp digital clarity'
      },
      lensEffects: {
        optics: 'Sharp focus on main bowl, slight soft blur on background bowl',
        artifacts: 'None',
        depthOfField: 'Shallow depth, main bowl fully sharp, background slightly blurred'
      },
      subject: {
        description: 'White bowl filled with grilled corn, cherry tomatoes, shredded cheese, purple cabbage, guacamole ball with sesame seeds, roasted yellow squash cubes, leafy greens, creamy dressing topped with red spice in stainless cup',
        wardrobe: 'None',
        grooming: 'None'
      },
      scene: {
        location: 'Outdoor table with floral-patterned tablecloth',
        timeOfDay: 'Midday or early afternoon with strong sunlight',
        environment: 'Bright floral print table surface with wildflower motifs'
      },
      visualDetails: {
        action: 'Static food presentation',
        props: 'Metal fork resting inside bowl, second bowl with visible lime wedge and carrots',
        physics: 'Natural sunlight casting shadows of fork and bowl edges'
      },
      cinematography: {
        lighting: 'Strong direct sunlight from upper left casting distinct shadows, warm tone',
        tone: 'Vibrant, fresh, natural',
        colorPalette: 'Bright greens, yellows, reds, and whites contrasted with dark fork and purple cabbage, floral patterned background with multiple colors'
      },
      textElements: {
        visibleText: 'None',
        typography: 'None',
        placement: 'None'
      },
      style: {
        visualAesthetic: 'Realistic, bright food photography focused on freshness and detail'
      }
    }
  }
  ,
  {
    id: 'prompt41',
    title: 'Preset 41',
    img: prompt41Img,
    values: {
      shot: {
        composition: 'Soft-focus close-up portrait, face and hand centered, blurred edges',
        cameraSettings: 'Low aperture for shallow focus, ISO moderate, subdued lighting',
        filmGrain: 'Prominent vintage grain, soft texture, slight color fringing'
      },
      lensEffects: {
        optics: 'Soft lens blur, slight chromatic aberration around edges',
        artifacts: 'Minor film scratches and dust visible',
        depthOfField: 'Very shallow, only parts of face and fingers in slight focus'
      },
      subject: {
        description: 'Young woman with dark hair wearing a spiked headband, bold winged eyeliner, gold hoop earrings',
        wardrobe: 'Bare-shouldered or strapless, emphasizing face and hand',
        grooming: 'Dark nails, glossy lips, smooth skin, dramatic eye makeup'
      },
      scene: {
        location: 'Indeterminate neutral background',
        timeOfDay: 'Indoor, artificial diffuse light',
        environment: 'Plain, minimalistic'
      },
      visualDetails: {
        action: 'Woman touching lips thoughtfully with elongated manicured nails',
        props: 'Spiked headband, gold earrings',
        physics: 'Soft shadows, muted contrasts, delicate light falloff'
      },
      cinematography: {
        lighting: 'Soft, diffused frontal lighting',
        tone: 'Muted, warm vintage tones with subtle highlights',
        colorPalette: 'Warm beige skin tones, dark hair, gold accents, subtle green tint'
      },
      textElements: {
        visibleText: 'none',
        typography: 'none',
        placement: 'none'
      },
      style: {
        visualAesthetic: 'Vintage film photography, soft focus portrait, glamorous and mysterious vibe'
      }
    }
  }
  ,
  {
    id: 'prompt42',
    title: 'Preset 42',
    img: prompt42Img,
    tags: ['non-portrait'],
    values: {
      shot: {
        composition: 'Eye-level medium shot, 85 mm lens, dog centered reclining on chair',
        cameraSettings: 'ISO 400, f/4, 1/125 s, full-frame sensor',
        filmGrain: 'Fine grain, soft highlights'
      },
      lensEffects: {
        optics: 'Pin-sharp focus on dog\'s face and body, subtle background blur',
        artifacts: 'None',
        depthOfField: 'Shallow depth, f/4 producing gentle bokeh behind chair and table'
      },
      subject: {
        description: 'Large Borzoi dog with white and gray long wavy fur, relaxed pose, expressive eyes looking at camera',
        wardrobe: 'None',
        grooming: 'Well-groomed, fluffy and shiny coat, natural'
      },
      scene: {
        location: 'Classic vintage interior, elegant living or sitting room',
        timeOfDay: 'Late afternoon with soft natural light',
        environment: 'Indoor, floral wallpaper background, olive green heavy drape curtain to left'
      },
      visualDetails: {
        action: 'Dog comfortably lying sideways on ornate cushioned antique chair with wooden frame',
        props: 'Ornate upholstered chair with floral pattern, wooden side table with books and glass decanter',
        physics: 'Soft natural light casting mild shadows and highlights on dog\'s fur and chair'
      },
      cinematography: {
        lighting: 'Soft diffused natural or artificial light from left side, warm low-key ambiance',
        tone: 'Warm, cozy, classic and calm mood',
        colorPalette: 'Muted greens, beige, rich brown wood tones, soft whites and grays of dog fur, deep reds and greens in wallpaper'
      },
      textElements: {
        visibleText: 'Book spine text reading "VRINTEN"',
        typography: 'Serif font on book spine, small size',
        placement: 'On wooden side table behind dog'
      },
      style: {
        visualAesthetic: 'Vintage portrait photography with painterly quality, warm and inviting atmosphere'
      }
    }
  }
  ,
  {
    id: 'prompt43',
    title: 'Preset 43',
    img: prompt43Img,
    tags: ['male'],
    values: {
      shot: {
        composition: 'Profile medium close-up, subject facing right, head and upper torso visible, white background',
        cameraSettings: 'High ISO 800, f/4.0, 85 mm lens, sharp focus on subject',
        filmGrain: 'Minimal grain, smooth digital finish'
      },
      lensEffects: {
        optics: 'Crisp details on face, chain, and sunglasses, slight reflection on lenses',
        artifacts: 'None noticeable',
        depthOfField: 'Shallow depth of field, background completely blurred'
      },
      subject: {
        description: 'Muscular light-skinned man with short mohawk styled in upward spikes, wearing futuristic silver-framed blue mirrored sunglasses, small hoop and dangling flame earrings on left ear, trimmed sideburns and beard',
        wardrobe: 'None visible, nude upper body, chunky silver chain necklace with large links',
        grooming: 'Well-defined facial hair, closely cropped sides of head, styled top hair spikes'
      },
      scene: {
        location: 'Studio with white backdrop',
        timeOfDay: 'Indeterminate due to studio lighting',
        environment: 'Clean, minimalistic, neutral'
      },
      visualDetails: {
        action: 'Static pose, head turned slightly downward and right, intense facial expression',
        props: 'Silver chain necklace, metallic blue mirrored sunglasses, flame-shaped earrings',
        physics: 'Hair spikes rigidly shaped upward, reflecting light'
      },
      cinematography: {
        lighting: 'High-key soft lighting from front and side, no harsh shadows, even illumination',
        tone: 'Cool and assertive',
        colorPalette: 'Natural skin tones, metallic silvers, vibrant royal blue lens'
      },
      textElements: {
        visibleText: 'None',
        typography: 'None',
        placement: 'None'
      },
      style: {
        visualAesthetic: 'Futuristic punk with cyberpunk influences, clean studio portrait'
      }
    }
  }
  ,
  {
    id: 'prompt44',
    title: 'Preset 44',
    img: prompt44Img,
    values: {
      shot: {
        composition: 'Medium close-up, slightly off-center with floating insects, asymmetrical framing',
        cameraSettings: 'Low light, slow shutter for motion blur, f/2.8 and ISO 800, full-frame sensor',
        filmGrain: 'Fine grain adding texture, subtle noise in shadows'
      },
      lensEffects: {
        optics: 'Soft focus with motion blur effect, ghosting of face features, slight chromatic aberration',
        artifacts: 'Double exposure effect creating duplicated face and eyes glow',
        depthOfField: 'Shallow depth of field, background fully blurred'
      },
      subject: {
        description: 'Female figure with long dark disheveled hair, two overlapping translucent faces with glowing eyes, expressionless',
        wardrobe: 'Bare-shouldered nude appearance without visible clothing',
        grooming: 'Loose hair strands, pale complexion with bluish tint'
      },
      scene: {
        location: 'Indeterminate dark studio or abstract space',
        timeOfDay: 'Night or low ambient light setting',
        environment: 'Moody, shadowy, ethereal atmosphere, blue-purple gradient background'
      },
      visualDetails: {
        action: 'Static pose, ethereal motion blur on face',
        props: 'Three detailed flying insects (flies or moths) near head and shoulder',
        physics: 'Light bending around translucent face layers, glowing eyes effect, slight motion trails'
      },
      cinematography: {
        lighting: 'Low-key lighting with cool blue and purple hues, soft shadows, eye glow highlights',
        tone: 'Mysterious and surreal, otherworldly ambiance',
        colorPalette: 'Deep blues, dark purples, black shadows, muted skin tones'
      },
      textElements: {
        visibleText: 'None',
        typography: 'None',
        placement: 'None'
      },
      style: {
        visualAesthetic: 'Surreal, ethereal, dark art photography with digital manipulation'
      }
    }
  }
  ,
  {
    id: 'prompt45',
    title: 'Preset 45',
    img: prompt45Img,
    values: {
      shot: {
        composition: 'Close-up, tilted angle, two female faces mirrored, hands in foreground',
        cameraSettings: 'High ISO for grain effect, narrow aperture, soft focus',
        filmGrain: 'Prominent grain texture, vintage film style'
      },
      lensEffects: {
        optics: 'Slight soft focus with film noise, low contrast',
        artifacts: 'Visible grain and retro artifacting',
        depthOfField: 'Shallow, focus mostly on hands and portions of faces'
      },
      subject: {
        description: 'Two overlapping female faces with long dark hair, pale skin, soft features',
        wardrobe: 'Pearl necklace with cross pendant, dark clothing',
        grooming: 'Natural makeup, neatly styled hair partially obscuring faces'
      },
      scene: {
        location: 'Indeterminate dark or studio background',
        timeOfDay: 'Night or low light setting',
        environment: 'Minimalist, dark ambiance'
      },
      visualDetails: {
        action: 'One hand raised near face with long nails gently touching, hair partially covering faces',
        props: 'Pearl necklace with cross pendant',
        physics: 'Subtle motion blur on hair strands and hand'
      },
      cinematography: {
        lighting: 'Low key, green tint color grading, directional soft light',
        tone: 'Moody, mysterious, ethereal',
        colorPalette: 'Dominantly greenish-blue with dark shadows'
      },
      textElements: {
        visibleText: 'none',
        typography: 'none',
        placement: 'none'
      },
      style: {
        visualAesthetic: 'Film noir, vintage grainy, surreal and intimate mood'
      }
    }
  }
  ,
  {
    id: 'prompt46',
    title: 'Preset 46',
    img: prompt46Img,
    tags: ['non-portrait'],
    values: {
      shot: {
        composition: 'Centered square photograph with visible folds and tears, subject moderately framed',
        cameraSettings: 'None applicable (scanned photo)',
        filmGrain: 'Old photo grain, scratches, wear prominent'
      },
      lensEffects: {
        optics: 'Static image of a printed photo, no lens effects',
        artifacts: 'Physical damage, creases, and torn edges on photo',
        depthOfField: 'Entire photo in focus'
      },
      subject: {
        description: 'Man standing with arms crossed on rooftop terrace, cityscape background',
        wardrobe: 'Dark short-sleeve top, light-colored trousers, belt',
        grooming: 'Short dark hair, clean-shaven'
      },
      scene: {
        location: 'Rooftop terrace with tiled floor and low wall, urban environment with trees and buildings in distance',
        timeOfDay: 'Daytime with soft natural light',
        environment: 'Clear sky, outdoor urban setting'
      },
      visualDetails: {
        action: 'Man poses stoically, arms crossed',
        props: 'Rooftop lamp attached to low wall, tiles on terrace floor',
        physics: 'Photo is creased, torn, with worn and ripped corners, lay on textured fabric background'
      },
      cinematography: {
        lighting: 'Soft natural daylight, shadows subtle',
        tone: 'Monochrome sepia-toned aged photo with high contrast in midtones',
        colorPalette: 'Sepia, beige, off-white, grayscale variations'
      },
      textElements: {
        visibleText: 'None',
        typography: 'None',
        placement: 'None'
      },
      style: {
        visualAesthetic: 'Vintage, nostalgic, worn photograph on fabric surface'
      }
    }
  }
  ,
  {
    id: 'prompt47',
    title: 'Preset 47',
    img: prompt47Img,
    tags: ['faceless'],
    values: {
      shot: {
        composition: 'Close-up portrait with front-facing subject, centered framing, tight crop around head and shoulders',
        cameraSettings: 'ISO 400, f/4, 85mm focal length, sharp focus on face',
        filmGrain: 'Smooth digital texture, minimal grain'
      },
      lensEffects: {
        optics: 'Crisp detail on facial features and fabric textures',
        artifacts: 'None',
        depthOfField: 'Shallow, blurred background'
      },
      subject: {
        description: 'Person with black-painted face, white tears designs from eyes, white pupil-less eyes, long white wavy hair covered with thick white wool hood',
        wardrobe: 'Thick textured green garment with a cracked pattern, heavy wool hood covering head',
        grooming: 'Hair styled naturally flowing from hood, lips painted black'
      },
      scene: {
        location: 'Studio with white seamless or isolated background',
        timeOfDay: 'Neutral artificial lighting',
        environment: 'Controlled indoor'
      },
      visualDetails: {
        action: 'Subject gazes slightly downward, still pose',
        props: 'None',
        physics: 'Soft shadows on right side of face'
      },
      cinematography: {
        lighting: 'Soft, diffused frontal light emphasizing texture and shadow on face',
        tone: 'Mysterious, dramatic',
        colorPalette: 'High contrast between black face, white hair and hood, muted green clothing'
      },
      textElements: {
        visibleText: 'None',
        typography: 'None',
        placement: 'None'
      },
      style: {
        visualAesthetic: 'Surreal, gothic fantasy, high contrast theatrical makeup and costume'
      }
    }
  }
  ,
  {
    id: 'prompt48',
    title: 'Preset 48',
    img: prompt48Img,
    tags: ['non-portrait', 'faceless'],
    values: {
      shot: {
        composition: 'Medium shot, subject centered, vertical orientation',
        cameraSettings: 'ISO 400, f/4.0, 1/125 s, natural light',
        filmGrain: 'Slight organic grain for texture'
      },
      lensEffects: {
        optics: 'Sharp focus on subject, soft background blur',
        artifacts: 'None',
        depthOfField: 'Moderate depth, isolating subject from forest background'
      },
      subject: {
        description: 'Person with long hair obscured by face-covering made of long hanging fringes, head adorned with large, semicircular headdress made of wheat or dried grasses',
        wardrobe: 'Traditional garment with embroidered red and white patterns on skirt, beige blouse with wide sleeves, knitted cream scarf around waist, wheat sheaf gloves covering hands',
        grooming: 'Long brown hair flowing beneath face covering, natural hair texture'
      },
      scene: {
        location: 'Dense forest edge with dark green foliage and grassy meadow',
        timeOfDay: 'Late afternoon or overcast for soft, diffused lighting',
        environment: 'Quiet, natural, slightly shadowed woodland'
      },
      visualDetails: {
        action: 'Subject standing still, hands crossed holding wheat sheaves, facing camera',
        props: 'Large wheat/grain headdress, wheat gloves, embroidered textile elements',
        physics: 'Natural light, no visible movement'
      },
      cinematography: {
        lighting: 'Soft ambient lighting, minimal shadows',
        tone: 'Earthy, muted colors with natural warmth',
        colorPalette: 'Deep greens, beige, brown, cream, muted reds'
      },
      textElements: {
        visibleText: 'none',
        typography: 'none',
        placement: 'none'
      },
      style: {
        visualAesthetic: 'Ethnographic, folkloric, moody natural portraiture'
      }
    }
  }
  ,
  {
    id: 'prompt49',
    title: 'Preset 49',
    img: prompt49Img,
    values: {
      shot: {
        composition: 'Eye-level medium close-up, subject centered crouching on sandy beach, rocks and waves in background',
        cameraSettings: 'ISO 400, f/2.8, 1/125s, 85mm lens',
        filmGrain: 'None, clean digital image'
      },
      lensEffects: {
        optics: 'Sharp focus on subject\'s face and upper body, soft background',
        artifacts: 'None noticeable',
        depthOfField: 'Shallow depth, blurred rocks and waves'
      },
      subject: {
        description: 'Young woman with fair skin, red-brown hair slicked back with multiple silver hair clips, looking over shoulder towards camera with neutral expression',
        wardrobe: 'Fitted grey sleeveless dress with darker grey ombré effect at hem',
        grooming: 'Smooth complexion, natural makeup, black nail polish on nails, silver earrings and rings'
      },
      scene: {
        location: 'Sandy beach with large rocky formations and green foliage in background, ocean waves crashing',
        timeOfDay: 'Daytime, diffused natural light',
        environment: 'Calm beach with wet sand near waterline, rocks partially covered in moss or algae'
      },
      visualDetails: {
        action: 'Woman crouching closely to sand with arms wrapped around knees',
        props: 'None',
        physics: 'Wet sand around feet, slight water reflections'
      },
      cinematography: {
        lighting: 'Soft, natural, even daylight with slight overcast or shade',
        tone: 'Neutral, serene mood',
        colorPalette: 'Muted earth tones, greys, greens, skin tones, whites'
      },
      textElements: {
        visibleText: 'none',
        typography: 'none',
        placement: 'none'
      },
      style: {
        visualAesthetic: 'Contemporary naturalistic portrait, minimalistic aesthetics with focus on subject and environment'
      }
    }
  }
  ,
  {
    id: 'prompt50',
    title: 'Preset 50',
    img: prompt50Img,
    tags: ['bw'],
    values: {
      shot: {
        composition: 'Close-up portrait, face centered but slightly tilted, tight crop emphasizing face and hair',
        cameraSettings: 'High ISO, likely f/2.8 or wider aperture, slow shutter speed causing motion blur',
        filmGrain: 'Heavy visible grain texture enhancing gritty aesthetic'
      },
      lensEffects: {
        optics: 'Soft focus with significant blur on edges, sharpness compromised by motion',
        artifacts: 'Motion blur and grain noise',
        depthOfField: 'Shallow depth of field focused mostly on central facial area'
      },
      subject: {
        description: 'Young female face with partially closed eyes and slightly parted lips, hair partially obscuring face and blowing across it',
        wardrobe: 'Dark clothing barely visible, portion of textured fabric on lower right suggesting layered or patterned garment',
        grooming: 'Loose hair strands framing face, natural look with no strong makeup evident'
      },
      scene: {
        location: 'Indeterminate, solid black background',
        timeOfDay: 'Indeterminate, high contrast suggests artificial lighting',
        environment: 'Minimalist studio-like setting or generic dark backdrop'
      },
      visualDetails: {
        action: 'Subject in motion or camera moved causing blur; hair appears to be blowing or moving across face',
        props: 'None visible',
        physics: 'Motion blur implies movement either of subject or camera during exposure'
      },
      cinematography: {
        lighting: 'High-contrast, strong directional light illuminating face, creating stark highlights and deep shadows',
        tone: 'Moody, abstract, intense monochrome black and white',
        colorPalette: 'Monochrome grayscale, dominant whites and deep blacks'
      },
      textElements: {
        visibleText: 'None',
        typography: 'None',
        placement: 'None'
      },
      style: {
        visualAesthetic: 'Abstract, expressionist, gritty black and white photography with intentional blur and grain'
      }
    }
  }
]
