import { ToastProvider } from './Components'
import { Navigation } from './Routes'

const App = () => {
  return (
    <ToastProvider>
      <Navigation />
    </ToastProvider>
  )
}

export default App
