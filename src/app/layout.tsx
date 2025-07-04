import logoDark from '/public/assets/images/logo-dark.png'
import AppProvidersWrapper from '@/components/wrappers/AppProvidersWrapper'
import type { Metadata } from 'next'
import { Figtree } from 'next/font/google'
import Image from 'next/image'
import NextTopLoader from 'nextjs-toploader'
import '@/assets/scss/app.scss'
import { DEFAULT_PAGE_TITLE } from '@/context/constants'
import 'bootstrap/dist/css/bootstrap.min.css';

const figtree = Figtree({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    template: '%s | Mogul  - AI Rental Services for Tanants and LandLords',
    default: DEFAULT_PAGE_TITLE,
  },
  description: 'A fully responsive premium admin dashboard template, AI Rental Services for Tanents and LandLords',
}

const splashScreenStyles = `
#splash-screen {
  position: fixed;
  top: 50%;
  left: 50%;
  background: white;
  display: flex;
  height: 100%;
  width: 100%;
  transform: translate(-50%, -50%);
  align-items: center;
  justify-content: center;
  z-index: 9999;
  opacity: 1;
  transition: all 15s linear;
  overflow: hidden;
}

#splash-screen.remove {
  animation: fadeout 0.7s forwards;
  z-index: 0;
}

@keyframes fadeout {
  to {
    opacity: 0;
    visibility: hidden;
  }
}
`
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <style suppressHydrationWarning>{splashScreenStyles}</style>
      </head>
      <body className={figtree.className}>
        {/* <MainHeader /> */}
        <div id="splash-screen">
          <Image alt="Logo" width={112} height={24} src={logoDark} style={{ height: '6%', width: 'auto' }} priority />
        </div>
        <NextTopLoader color="#604ae3" showSpinner={false} />
        <div id="__next_splash">
          <AppProvidersWrapper>{children}</AppProvidersWrapper>
        </div>

       {/* <MainFooter /> */}
      </body>
    </html>
  )
}
