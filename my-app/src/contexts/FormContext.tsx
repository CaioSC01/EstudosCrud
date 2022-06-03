// Context -> caixinha que armazena dados
// Reducer -> executa as nossas ações
// Provider -> providencia os dados
// Hook -> faz ter acesso essas informaçoões de forma mais simples

import { createContext, useContext, useReducer, ReactNode } from 'react'

//criação de types
type State = {
  classificação: string
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
const initialData: State = {
  classificação: '',
  status: ''
}

export enum FormActions {
  setClassificação,
  setStatus
}

//Criação do nosso contexto
const FormContext = createContext<ContextType | undefined>(undefined)

const formReducer = (state: State, action: Action) => {
  switch (action.type) {
    case FormActions.setClassificação:
      //pego o meu dado como ele esta no momento
      //e troco pelo passo atual que estou mandando
      //retorna o novo state
      return { ...state, classificação: action.payload }
    case FormActions.setStatus:
      return { ...state, status: action.payload }
    default:
      return state
  }
}

export const FormProvider = ({ children }: FormProviderProps) => {
  //state: tenho os dados
  //dispatch: função que executa as minhas ações
  const [state, dispatch] = useReducer(formReducer, initialData)
  const value = { state, dispatch }

  return (
    //componente que esta usando meu provider, ele cria o ambeinte e clc meu site inteiro dentro desse provider
    <FormContext.Provider value={value}>{children}</FormContext.Provider>
  )
}

export const useForm2 = () => {
  const context = useContext(FormContext)

  //se o context esta indefinido, eu to usando meu hook fora do provider
  if (context === undefined) {
    throw new Error('useForm precisa ser usado dentro do formProvider')
  }
  return context
}
