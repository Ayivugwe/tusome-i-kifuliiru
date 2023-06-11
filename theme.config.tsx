import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import { useRouter } from 'next/router'

const config: DocsThemeConfig = {
  logo: <span>Tusome i Kifuliiru</span>,
  project: {
    link: 'https://github.com/MyIKAHDesign/tusome-i-kifuliiru',
  },
  chat: {
    link: 'https://twitter.com/ibufuliiru',
    icon: <svg width="24" height="24" viewBox="0 0 256 256"><path fill="currentColor" d="M22.1,12.1c0.7-0.4,1.2-1.1,1.4-1.8c-0.6,0.4-1.3,0.6-2.1,0.8 c-0.6-0.6-1.5-1-2.4-1c-1.8,0-3.3,1.5-3.3,3.3c0,0.3,0,0.5,0.1,0.7c-2.7-0.1-5.2-1.4-6.8-3.4c-0.3,0.5-0.4,1.1-0.4,1.7 c0,1.1,0.6,2.1,1.5,2.7c-0.5,0-1-0.2-1.5-0.4v0c0,1.6,1.1,2.9,2.6,3.2C11,17.9,10.7,18,10.4,18c-0.2,0-0.4,0-0.6-0.1 c0.4,1.3,1.6,2.3,3.1,2.3c-1.1,0.9-2.5,1.4-4.1,1.4c-0.3,0-0.5,0-0.8,0c1.4,0.9,3,1.4,4.7,1.5h0.8c5.7-0.3,8.9-5.1,8.9-9.3 c0-0.1,0-0.3,0-0.4c0.6-0.5,1.2-1,1.6-1.7v0C23.4,11.8,22.8,12,22.1,12.1z"></path></svg>,
    
  },
  docsRepositoryBase: 'https://github.com/MyIKAHDesign/tusome-i-kifuliiru',
  // footer: {
  //   text: 'Tusome i Kifuliiru',
  // },
  useNextSeoProps() {
    const { route } = useRouter()
    if (route !== '/') {
      return {
        titleTemplate: '%s – Tusome i Kifuliiru'
      }
    }
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="Tusome i Kifuliiru. Kifuliiru ndeto yitu" />
      <meta property="og:description" content="Tusome indeto yitu Kifuliiru mu Kifuliiru. Kifuliiru ndeto yitu, ndeto ngale." />
    </>
  ),
  banner: {
    key: '2.0-release',
    text: <a href="https://kifuliiru.vercel.app/" target="_blank">
      🎉 Tusome i Kifuliiru 2.0. Wangakoli yaandika naho kifuliiru.vercel.com. Lenga hano →
    </a>,
  },
  footer: {
    text: <div>
      <span>
      Tusome i Kifuliiru {new Date().getFullYear()} © <a href="https://kifuliiru.vercel.app/"> Tumenye Ibufuliiru</a>. 
    </span>
    <span> Mukolwa gumwa <a href="https://ayivugwe.editorx.io/ayivugwekabemba" target="_blank">Ayivugwe Kabemba</a>.</span>
    </div>,
  },
  search:{
    placeholder: "Looza hano...",
    emptyResult: "Ndabyo twaloonga",
    loading: "Tugweeti tugalooza",
    error:"Hali ibitagendeka bwija",
  },
  sidebar:{
     toggleButton:true,
  },
}

export default config
