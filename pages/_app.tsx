import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { wrapper } from './../store'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => (
  <Component {...pageProps} />
)

export default wrapper.withRedux(MyApp)
