import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import Image from 'next/image'

const config: DocsThemeConfig = {
  logo: (
    <>
      <Image 
      src='/logo/logo-48.png'
      width={40}
      height={40}
      alt='logo'
      />
      <span style={{ marginLeft: '.4em', fontWeight: 800 }}>
        smarteye.id
      </span>
    </>
  ),
  project: {
    link: 'https://github.com/adheichsn/repos',
  },
  chat: {
    link: 'https://discord.gg/yGMX9VgxZc',
  },
  docsRepositoryBase: 'https://github.com/adheichsn/repos',
  footer: {
    text: 'smarteye.id',
  },
}

export default config
