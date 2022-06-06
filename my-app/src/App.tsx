import Router from './router'
import { FormClientProvider } from './contexts/FormContext'
import { FormGroupProvider } from './contexts/FormGroupContext'

function App() {
  return (
    <FormClientProvider>
      <FormGroupProvider>
        <Router />
      </FormGroupProvider>
    </FormClientProvider>
  )
}

export default App
