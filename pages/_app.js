import '../styles/globals.css'
import {ThirdwebWeb3Provider} from "@3rdweb/hooks"
const supporttedChainIds=[4]
const connectors={
  injected:{},
}

function MyApp({ Component, pageProps }) {
  return (
  <ThirdwebWeb3Provider
  supportedChainIds={supporttedChainIds}
  connectors={connectors}
  >
  <Component {...pageProps} />
  </ThirdwebWeb3Provider>
  )
}

export default MyApp
