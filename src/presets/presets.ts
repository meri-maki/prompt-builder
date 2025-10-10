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
]
