import React from 'react'
import { ChangeEvent } from 'react'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import { useForm2, FormActions } from '../../contexts/FormContext'

function refreshPage() {
  window.location.reload()
}

export const ModalAdd = () => {
  const { state, dispatch } = useForm2()
  const { register, handleSubmit } = useForm()

  const addForm = (data: any) =>
    axios
      .post('http://localhost:3006/client', data)
      .then(response => {
        console.log(response.data)
        refreshPage()
      })
      .catch(error => {
        console.log(error)
      })

  const handleClassificacaoChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: FormActions.setClassificação,
      payload: e.target.value
    })
  }

  const handleStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: FormActions.setStatus,
      payload: e.target.value
    })
  }

  return (
    <>
      <form onSubmit={handleSubmit(addForm)}>
        <div>
          <label
            htmlFor="Classificação"
            className="block text-sm font-medium text-gray-700"
          >
            Classificação
          </label>
          <div className="mt-1">
            <input
              required
              type="text"
              {...register('classificacao')}
              value={state.classificação}
              onChange={handleClassificacaoChange}
              className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="Classificação"
            className="block text-sm font-medium text-gray-700"
          >
            Status
          </label>
          <div className="mt-1">
            <input
              required
              {...register('status')}
              value={state.status}
              onChange={handleStatusChange}
              type="text"
              className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
            />
          </div>
        </div>

        <button
          type="submit"
          className="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Salvar
        </button>
      </form>
    </>
  )
}
