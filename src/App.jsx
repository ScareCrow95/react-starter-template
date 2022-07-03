import { ChakraProvider } from '@chakra-ui/react'
import { createStandaloneToast } from '@chakra-ui/toast'
import Home from './pages/Home'
import { useStores } from './store/rootStore'
import { darkTheme } from './theme/darkTheme'
import { lightTheme } from './theme/lightTheme'
const { ToastContainer, toast } = createStandaloneToast({ theme: darkTheme })
function App() {
  const rootStore = useStores()
  rootStore.toast = toast

  return (
    <ChakraProvider
      theme={rootStore.uiStore.theme === 'light' ? lightTheme : darkTheme}>
      <Home />
      <ToastContainer />
    </ChakraProvider>
  )
}

export default App
