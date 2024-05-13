import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Basic Frame',
  description: 'A Farcaster Frame Demo',
  openGraph: {
    title: 'Basic Frame',
    description: 'A Farcaster Frame Demo',
    images: [`https://images.unsplash.com/photo-1565772838491-cbeb32fac6ca?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D`],
  },
  other: {
    'fc:frame': 'vNext',
    'fc:frame:image': `https://images.unsplash.com/photo-1565772838491-cbeb32fac6ca?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D`,
    'fc:frame:post_url': `${process.env.NEXT_PUBLIC_SITE_URL}/api/basic?id=1`,
    'fc:frame:button:1': 'Start',
  },
}

export default function Page() {
  return (
    <div>
      <h1>Basic Frame</h1>
    </div>
  )
}
