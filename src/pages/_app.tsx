import '../styles/globals.css'

import { AppProps } from 'next/app'

import GlobalContext from '~/context'
const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
      <GlobalContext>
        <Component {...pageProps} />
      </GlobalContext>
  )
}

export default MyApp
