import { ImageResponse } from 'next/og'
import { profile } from '@/data/profile'

export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '80px',
          backgroundColor: '#142A21',
          backgroundImage:
            'radial-gradient(circle at 85% 15%, rgba(176,141,60,0.28), transparent 55%), radial-gradient(circle at 8% 90%, rgba(30,58,47,0.6), transparent 50%)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div
            style={{
              width: 14,
              height: 14,
              borderRadius: '50%',
              backgroundColor: '#C9A24B',
              display: 'flex',
            }}
          />
          <span style={{ fontSize: 28, fontWeight: 700, color: '#F3EFE6', letterSpacing: '-0.02em' }}>
            {profile.name}
          </span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <span
            style={{
              fontSize: 56,
              fontWeight: 700,
              color: '#F3EFE6',
              lineHeight: 1.15,
              letterSpacing: '-0.01em',
              maxWidth: 980,
            }}
          >
            {profile.headline}
          </span>
          <span style={{ fontSize: 26, fontWeight: 600, color: '#C9A24B' }}>
            {profile.role}
          </span>
          <span style={{ fontSize: 22, color: 'rgba(243,239,230,0.7)' }}>{profile.location} · Founder of NexWerk AI</span>
        </div>
      </div>
    ),
    { ...size }
  )
}
