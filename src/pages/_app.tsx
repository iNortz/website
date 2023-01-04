import React, { useEffect } from 'react'
import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

import GlobalContext from '../context'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
      <GlobalContext>
        <Component {...pageProps} />
        {/* <GlobalStyle /> */}
      </GlobalContext>
  )
}

export default MyApp
