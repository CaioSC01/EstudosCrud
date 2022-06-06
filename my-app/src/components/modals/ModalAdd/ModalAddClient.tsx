import React from 'react'
import { ChangeEvent } from 'react'
import axios from 'axios'
import { useForm, Controller } from 'react-hook-form'
import { useForm2, FormActions } from '../../../contexts/FormContext'
import './Style.Modal/modalClient.css'

function refreshPage() {
  window.location.reload()
}

export const ModalAdd = () => {
  const { state, dispatch } = useForm2()
  const { control, register, handleSubmit } = useForm({
    // defaultValues
  })

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

  return (
    <>
      <form onSubmit={handleSubmit(addForm)}>
        <Controller
          render={({ field }) => (
            <select {...field} className="active_content">
              <option></option>
              <option>Ativo</option>
              <option>Inativo</option>
            </select>
          )}
          control={control}
          name="status"
        />
        <div className="relative border border-gray-300 rounded-md px-3 py-2 shadow-sm focus-within:ring-1 focus-within:ring-indigo-600 focus-within:border-indigo-600 modal_content">
          <label
            htmlFor="name"
            className="absolute -top-2 left-2 -mt-px inline-block px-1 bg-white text-xs font-medium text-gray-900"
          >
            Classificação
          </label>
          <input
            type="text"
            id="classificacao"
            className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
            {...register('classificacao')}
            value={state.classificação}
            onChange={handleClassificacaoChange}
            placeholder=""
          />
        </div>

        <button
          type="submit"
          className="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-[#9a8e74] hover:bg-[#b5aa92] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Salvar
        </button>
      </form>
    </>
  )
}
