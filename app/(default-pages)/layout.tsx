'use client'

import { useEffect } from 'react'

import AOS from 'aos'
import 'aos/dist/aos.css'

import Header from '@/components/ui/header'
import Footer from '@/components/ui/footer'
import { Bubble } from "@typebot.io/nextjs";


export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {  

  useEffect(() => {
    AOS.init({
      once: true,
      disable: 'phone',
      duration: 700,
      easing: 'ease-out-cubic',
    })
  })

  return (
    <>
      <Header />
      
      <main className="grow">

        {children}

      </main>
      <Bubble
      typebot="lead-gen-with-ai-zun2hu2"
      theme={{
        button: {
          backgroundColor: "#e2204a",
          customIconSrc:
            "https://s3.typebot.io/public/workspaces/cm0sd3okm001979phtpqw8wyw/typebots/cm0sd9bnj001f79phizun2hu2/bubble-icon?v=1725728933440",
        },
      }}
    />

      <Footer />
    </>
  )
}
