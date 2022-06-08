import React from 'react'
import { ChangeEvent } from 'react'
import axios from 'axios'
import { useForm, Controller } from 'react-hook-form'
import { useCPForm, FormActions } from '../../../contexts/FormCpContext'
import './Style.Modal/modalClient.css'

function refreshPage() {
  window.location.reload()
}

export const ModalCampanha = () => {
  const { state, dispatch } = useCPForm()
  const { control, register, handleSubmit } = useForm()

  const addForm = (data: any) =>
    axios
      .post('http://localhost:3006/campanha', data)
      .then(response => {
        console.log(response.data)
        refreshPage()
      })
      .catch(error => {
        console.log(data)
        console.log(error)
      })

  const handleCPNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: FormActions.setNameCP,
      payload: e.target.value
    })
  }

  return (
    <>
      <form onSubmit={handleSubmit(addForm)}>
        <div className="relative border border-gray-300 rounded-md px-3 py-2 shadow-sm focus-within:ring-1 focus-within:ring-indigo-600 focus-within:border-indigo-600 modal_content">
          <label
            htmlFor="name"
            className="absolute -top-2 left-2 -mt-px inline-block px-1 bg-white text-xs font-medium text-gray-900"
          >
            Nome da Campanha
          </label>
          <input
            type="text"
            id="name_cp"
            className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
            {...register('name')}
            value={state.name_cp}
            onChange={handleCPNameChange}
            placeholder=""
          />
        </div>
        <div className="relative border border-gray-300 rounded-md px-3 py-2 shadow-sm focus-within:ring-1 focus-within:ring-indigo-600 focus-within:border-indigo-600 modal_content">
          <label
            htmlFor="name"
            className="absolute -top-2 left-2 -mt-px inline-block px-1 bg-white text-xs font-medium text-gray-900"
          >
            Data
          </label>
          <input
            type="date"
            id="date"
            className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
            {...register('data')}
            placeholder=""
          />
        </div>
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
