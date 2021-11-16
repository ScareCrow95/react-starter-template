import { ChakraProvider } from '@chakra-ui/react'
import Login from './pages/Login'
import { useStores } from './store/rootStore'
import { darkTheme } from './theme/darkTheme'
import { lightTheme } from './theme/lightTheme'

function App() {
  const rootStore = useStores()
  return (
    <ChakraProvider
      theme={rootStore.uiStore.theme === 'light' ? lightTheme : darkTheme}>
      <Login />
    </ChakraProvider>
  )
}

export default App
