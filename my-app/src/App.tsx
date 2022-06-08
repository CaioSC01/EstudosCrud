import Router from './router'
import { FormClientProvider } from './contexts/FormContext'
import { FormGroupProvider } from './contexts/FormGroupContext'
import { FormCPProvider } from './contexts/FormCpContext'

function App() {
  return (
    <FormClientProvider>
      <FormGroupProvider>
        <FormCPProvider>
          <Router />
        </FormCPProvider>
      </FormGroupProvider>
    </FormClientProvider>
  )
}

export default App
