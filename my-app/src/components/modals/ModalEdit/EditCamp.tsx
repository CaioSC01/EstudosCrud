import React from 'react'
import { ChangeEvent } from 'react'
import axios from 'axios'
import { useForm, Controller } from 'react-hook-form'
import { useForm2, FormActions } from '../../../contexts/FormContext'
import { TableClient } from '../../TableClient'

function refreshPage() {
  window.location.reload()
}

export const ModalEditCamp = (id: any) => {
  const { dispatch } = useForm2()
  const { control, register, handleSubmit } = useForm()

  const editForm = (data: any) => {
    axios
      .put(`https://localhost:44328/api/campanha/${id.id['0']['ID']}`, data)
      .then(() => {
        console.log('Deu tudo certo', data)
        refreshPage()
      })
      .catch(() => {
        console.log('DEU ERRADO', data, id)
      })
  }

  const handleGroupChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: FormActions.setClassificação,
      payload: e.target.value
    })
  }

  return (
    <>
      <form onSubmit={handleSubmit(editForm)}>
        <Controller
          render={({ field }) => (
            <select {...field} className="active_content">
              <option></option>
              <option value={'true'}>Ativo</option>
              <option value={'false'}>Inativo</option>
            </select>
          )}
          control={control}
          name="Status"
        />
        <div className="relative border border-gray-300 rounded-md px-3 py-2 shadow-sm focus-within:ring-1 focus-within:ring-indigo-600 focus-within:border-indigo-600 modal_content">
          <label
            htmlFor="name"
            className="absolute -top-2 left-2 -mt-px inline-block px-1 bg-white text-xs font-medium text-gray-900"
          >
            Nomw do Grupo
          </label>
          <input
            type="text"
            id="classificacao"
            className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
            {...register('DS_Grupo')}
            onChange={handleGroupChange}
            placeholder=""
          />
        </div>
        <TableClient />
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
