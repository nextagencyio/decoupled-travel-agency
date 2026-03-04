import { ImageResponse } from 'next/og'
export const size = { width: 180, height: 180 }
export const contentType = 'image/png'
export default function AppleIcon() {
  return new ImageResponse(
    (<div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(135deg, #155e75 0%, #164e63 100%)', borderRadius: '20%' }}>
      <svg width="120" height="120" viewBox="0 0 48 48" fill="white"><path d="M35.6 38.4 32 22l7-7C42 12 43 8 42 6c-2-1-6 0-9 3L26 16 9.6 12.4c-1-.2-1.8.2-2.2 1l-.6 1c-.4 1-.2 2 .6 2.6L18 24l-4 6H8l-2 2 6 4 4 6 2-2v-6l6-4 7 10.6c.6.8 1.6 1 2.6.6l1-.4c.8-.6 1.2-1.4 1-2.4z"/></svg>
    </div>), { ...size }
  )
}
