import React, { useEffect, useState } from 'react'
import { ChangeEvent } from 'react'
import axios from 'axios'
import { Controller, useForm } from 'react-hook-form'
import { useForm3, FormActions } from '../../../contexts/FormGroupContext'
import './Style.Modal/modalGroup.css'
import { TableClient } from '../../TableClient'
// import { Dialog, Transition } from '@headlessui/react'
// import { PencilIcon, TrashIcon, XIcon } from '@heroicons/react/outline'

function refreshPage() {
  window.location.reload()
}
// onChange={handleStatusChange}
export const ModalGroup = () => {
  const { state, dispatch } = useForm3()
  const { control, register, handleSubmit } = useForm()
  const [groups, setGroups] = useState<any[]>([])

  // const [open, setOpen] = useState(false)

  useEffect(() => {
    axios
      .get('http://localhost:3006/Groups')
      .then(response => {
        setGroups(response.data)
      })
      .catch(() => {
        console.log('DEU ERRADO')
      })
  }, [])

  // const deleteForm = (
  //   id: any,
  //   e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  // ) => {
  //   e.preventDefault()
  //   alert('Tem certeza que deseja exluir?')
  //   axios
  //     .delete(`http://localhost:3006/Groups/${id}`)
  //     .then(res => console.log('Deleted!!!', res))
  //     .catch(err => console.log(err))
  //   refreshPage()
  // }

  const addForm = (data: any) =>
    axios
      .post('http://localhost:3006/Groups', data)
      .then(response => {
        console.log(response.data)
        refreshPage()
      })
      .catch(error => {
        console.log(error)
      })
  const addForm2 = (data: any) =>
    axios
      .post('http://localhost:3006/Groups_Client', data)
      .then(response => {
        console.log(response.data)
        refreshPage()
      })
      .catch(error => {
        console.log(error)
      })

  const handleGroupChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: FormActions.setGroups,
      payload: e.target.value
    })
  }
  const handleClientChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: FormActions.setClient,
      payload: e.target.value
    })
  }
  // const handleDataChange = (e: ChangeEvent<HTMLInputElement>) => {
  //   dispatch({
  //     type: FormActions.setData,
  //     payload: e.target.value
  //   })
  // }

  // const handleStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
  //   dispatch({
  //     type: FormActions.setStatus,
  //     payload: e.target.value
  //   })
  // }

  return (
    <>
      <form onSubmit={handleSubmit(addForm)}>
        <div className="relative border border-gray-300 rounded-md px-3 py-2 shadow-sm focus-within:ring-1 focus-within:ring-indigo-600 focus-within:border-indigo-600 modal_group">
          <label
            htmlFor="name"
            className="absolute -top-2 left-2 -mt-px inline-block px-1 bg-white text-xs font-medium text-gray-900"
          >
            Grupo
          </label>
          <input
            type="text"
            {...register('groups')}
            value={state.groups}
            onChange={handleGroupChange}
            id="name"
            className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
            placeholder="Jane Smith"
          />
        </div>

        <div className="relative border border-gray-300 rounded-md px-3 py-2 shadow-sm focus-within:ring-1 focus-within:ring-indigo-600 focus-within:border-indigo-600 modal_group">
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
          />
        </div>

        <Controller
          render={({ field }) => (
            <select {...field} className="active_group">
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
          className="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Salvar
        </button>
        <TableClient />
      </form>
    </>
  )
}
