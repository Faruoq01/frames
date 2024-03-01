import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'My First Frame',
  description: 'A Farcaster Frame Demo',
  openGraph: {
    title: 'My First Frame',
    description: 'A Farcaster Frame Demo',
    images: [`${process.env.NEXT_PUBLIC_SITE_URL}/site-preview.jpg`],
  },
  other: {
    'fc:frame': 'vNext',
    'fc:frame:image': `${process.env.NEXT_PUBLIC_SITE_URL}/site-preview.jpg`,
    'fc:frame:post_url': `${process.env.NEXT_PUBLIC_SITE_URL}/api`,
    'fc:frame:button:1': 'Mint',
  },
}

export default function Page() {
  return (
    <div>
      <h1>hunterchang.com</h1>
    </div>
  )
}