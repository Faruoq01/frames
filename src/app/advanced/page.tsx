import { getFrameMetadata } from '@coinbase/onchainkit/frame'
import type { Metadata } from 'next'

const frameMetadata = getFrameMetadata({
  buttons: [
    {
      label: 'Click here to mint a garden!',
    },
  ],
  image: {
    src: `${process.env.NEXT_PUBLIC_SITE_URL}/park-1.png`,
  },
  postUrl: `${process.env.NEXT_PUBLIC_SITE_URL}/api/continue`,
})

export const metadata: Metadata = {
  title: 'Garden Frame',
  description: 'Ready for a harvest?',
  openGraph: {
    title: 'Garden',
    description: 'Ready for a harvest?',
    images: [`${process.env.NEXT_PUBLIC_SITE_URL}/park-1.png`],
  },
  other: {
    ...frameMetadata,
  },
}

export default function Page() {
  return (
    <>
      <h1>Advanced Frame</h1>
    </>
  )
}
