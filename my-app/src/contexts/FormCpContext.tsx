// Context -> caixinha que armazena dados
// Reducer -> executa as nossas ações
// Provider -> providencia os dados
// Hook -> faz ter acesso essas informaçoões de forma mais simples

import { createContext, useContext, useReducer, ReactNode } from 'react'

//criação de types
type State = {
  name_cp: string
  status: string
}
type Action = {
  type: FormActions
  payload: any
}
type ContextType = {
  state: State
  dispatch: (action: Action) => void
}
type FormProviderProps = {
  children: ReactNode
}

//dados iniciais
const initialDate: State = {
  name_cp: '',
  status: ''
}

export enum FormActions {
  setNameCP,
  setStatus
}

//Criação do nosso contexto
const FormCPContext = createContext<ContextType | undefined>(undefined)

const formReducer = (state: State, action: Action) => {
  switch (action.type) {
    case FormActions.setNameCP:
      return { ...state, name_cp: action.payload }
    case FormActions.setStatus:
      return { ...state, status: action.payload }
    default:
      return state
  }
}

export const FormCPProvider = ({ children }: FormProviderProps) => {
  //state: tenho os dados
  //dispatch: função que executa as minhas ações
  const [state, dispatch] = useReducer(formReducer, initialDate)
  const value = { state, dispatch }

  return (
    //componente que esta usando meu provider, ele cria o ambeinte e clc meu site inteiro dentro desse provider
    <FormCPContext.Provider value={value}>{children}</FormCPContext.Provider>
  )
}

export const useCPForm = () => {
  const context = useContext(FormCPContext)

  //se o context esta indefinido, eu to usando meu hook fora do provider
  if (context === undefined) {
    throw new Error('useForm precisa ser usado dentro do formProvider')
  }
  return context
}
