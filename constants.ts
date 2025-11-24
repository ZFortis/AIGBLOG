import { ArtPiece } from './types';

// =============================================================================
// 💡 HOW TO UPDATE IMAGES / 如何更新图片
// =============================================================================
// 1. Prepare your image URL (Cloud hosting or local public folder).
//    准备你的图片链接 (图床链接或放在 public 文件夹内的路径)。
//
// 2. Modify the objects in the ARTWORK_DATA array below.
//    修改下方 ARTWORK_DATA 数组中的对象。
//
// 3. Fields Explanation / 字段说明:
//    - imageUrl: The link to your image (e.g., "https://..." or "/images/art.jpg")
//    - prompt: The prompt used to generate the image (supports copy functionality).
//    - negativePrompt: What you excluded (optional).
//    - model: The model version (e.g., "Niji V6", "Stable Diffusion XL").
//    - seed: The generation seed for reproducibility.
// =============================================================================

export const ARTWORK_DATA: ArtPiece[] = [
  {
    id: '1',
    title: 'Cybernetic Miku',
    imageUrl: 'https://nrvsdjix2yjgkyk2.public.blob.vercel-storage.com/00176-3266640519.png', // 👈 Replace this with your image / 替换这里
    width: 2243,
    height: 1198,
    prompt: 'Hatsune Miku, cybernetic upgrades, glowing neon circuitry, futuristic tokyo background, rain, cinematic lighting, masterpiece, 8k, extremely detailed eyes',
    negativePrompt: 'low quality, blurry, distorted hands, extra fingers, mutation, bad anatomy',
    model: 'Niji V6',
    seed: '39393939',
    tags: ['Anime', 'Cyberpunk', 'Character'],
    date: '2023-10-05'
  },
  {
    id: '2',
    title: 'Neon Cityscape',
    imageUrl: 'https://picsum.photos/600/400?random=2',
    width: 600,
    height: 400,
    prompt: 'Isometric view of a cyberpunk city, neon lights, flying cars, rain slicked streets, blade runner vibe, octane render',
    negativePrompt: 'flat, dull, monochrome',
    model: 'Stable Diffusion XL',
    seed: '8844121',
    tags: ['Scenery', 'Sci-Fi', 'Architecture'],
    date: '2023-10-08'
  },
  {
    id: '3',
    title: 'Mecha Pilot Interface',
    imageUrl: 'https://picsum.photos/600/600?random=3',
    width: 600,
    height: 600,
    prompt: 'Inside mecha cockpit, view of space battle, HUD interface, holograms, warning signals, complex machinery',
    negativePrompt: 'simple, organic, bright sun',
    model: 'Midjourney V6',
    seed: '1230984',
    tags: ['Mecha', 'Sci-Fi', 'Interior'],
    date: '2023-11-01'
  },
  {
    id: '4',
    title: 'Ethereal Spirit',
    imageUrl: 'https://picsum.photos/600/900?random=4',
    width: 600,
    height: 900,
    prompt: 'Portrait of a ghost princess, translucent skin, flowing glowing hair, ancient ruins background, mystical atmosphere, soft lighting',
    negativePrompt: 'harsh shadows, strong contrast, solid',
    model: 'Niji V5',
    seed: '5552211',
    tags: ['Fantasy', 'Portrait', 'Ethereal'],
    date: '2023-11-12'
  },
  {
    id: '5',
    title: 'Retro Terminal',
    imageUrl: 'https://picsum.photos/600/500?random=5',
    width: 600,
    height: 500,
    prompt: '90s anime style, computer hacker room, messy cables, crt monitors, green code on screen, dark room, glow from screens',
    negativePrompt: 'modern lcd, clean, vector art',
    model: 'Niji V6',
    seed: '1010101',
    tags: ['Retro', '90s', 'Slice of Life'],
    date: '2023-11-20'
  },
  {
    id: '6',
    title: 'Abyssal Guardian',
    imageUrl: 'https://picsum.photos/600/700?random=6',
    width: 600,
    height: 700,
    prompt: 'Giant robotic knight standing in dark ocean, bioluminescent whales swimming around, scale contrast, terrifying, majestic',
    negativePrompt: 'cartoonish, bright colors, happy',
    model: 'Stable Diffusion 1.5',
    seed: '7748291',
    tags: ['Mecha', 'Monster', 'Ocean'],
    date: '2023-12-01'
  },
   {
    id: '7',
    title: 'Quantum Flower',
    imageUrl: 'https://picsum.photos/600/650?random=7',
    width: 600,
    height: 650,
    prompt: 'A flower made of crystal and light, fractals, macro photography, bokeh, galaxy inside petals',
    negativePrompt: 'wilted, dirt, bug',
    model: 'Midjourney V5.2',
    seed: '9988776',
    tags: ['Abstract', 'Nature', '3D'],
    date: '2023-12-05'
  },
   {
    id: '8',
    title: 'Void Walker',
    imageUrl: 'https://picsum.photos/600/850?random=8',
    width: 600,
    height: 850,
    prompt: 'Full body shot of a space explorer, black void suit, helmet reflection showing a black hole, zero gravity pose',
    negativePrompt: 'gravity, ground, trees',
    model: 'Stable Diffusion XL',
    seed: '2233445',
    tags: ['Sci-Fi', 'Character', 'Space'],
    date: '2023-12-10'
  }
];
