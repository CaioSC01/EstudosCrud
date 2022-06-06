import React, { Fragment, useEffect, useState } from 'react'
import { ChangeEvent } from 'react'
import axios from 'axios'
import { Controller, useForm } from 'react-hook-form'
import { useForm3, FormActions } from '../../../contexts/FormGroupContext'
import './Style.Modal/modalGroup.css'
import { Dialog, Transition } from '@headlessui/react'
import { PencilIcon, TrashIcon, XIcon } from '@heroicons/react/outline'

function refreshPage() {
  window.location.reload()
}
// onChange={handleStatusChange}
export const ModalGroup = () => {
  const { state, dispatch } = useForm3()
  const { control, register, handleSubmit } = useForm()
  const [groups, setGroups] = useState<any[]>([])

  const [open, setOpen] = useState(false)

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

  const deleteForm = (
    id: any,
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault()
    alert('Tem certeza que deseja exluir?')
    axios
      .delete(`http://localhost:3006/Groups/${id}`)
      .then(res => console.log('Deleted!!!', res))
      .catch(err => console.log(err))
    refreshPage()
  }

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
            type="datetime-local"
            id="name"
            className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
            placeholder="Jane Smith"
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
        <div className="w-full">
          <div className="flex flex-col">
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-10">
                      <tr>
                        <th
                          scope="col"
                          className="px-8 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Grupo
                        </th>
                        <th
                          scope="col"
                          className="px-8 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Clientes
                        </th>
                        <th
                          scope="col"
                          className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Status
                        </th>
                        <th
                          scope="col"
                          className="px-10 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Data
                        </th>

                        <th
                          scope="col"
                          className="px-15 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider content_action"
                        >
                          Ações
                        </th>
                      </tr>
                    </thead>
                    {groups.map(group => {
                      return (
                        <React.Fragment key={group.id}>
                          <tbody className="bg-white divide-y divide-gray-200">
                            <tr>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <div className="flex items-center">
                                  <div className="ml-4">
                                    <div className="text-sm font-medium text-gray-900">
                                      {group.groups}
                                    </div>
                                  </div>
                                </div>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <div className="font-bold text-sm text-gray-900">
                                  {group.clientes}
                                </div>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <div
                                  className={
                                    group.status === 'Ativo'
                                      ? 'inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-green-100 text-green-800'
                                      : 'inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-red-100 text-red-800'
                                  }
                                >
                                  {group.status}
                                </div>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <div className="font-bold text-sm text-gray-900">
                                  {group.data}
                                </div>
                              </td>

                              <td className="content_td">
                                <button
                                  // onClick={() => setEdit(true)}
                                  className="text-gray-400 hover:text-gray-100  mx-2"
                                >
                                  <span className="sr-only">Close panel</span>
                                  <PencilIcon
                                    className="h-6 w-6"
                                    aria-hidden="true"
                                  />
                                </button>

                                <button
                                  className="text-gray-400 hover:text-gray-100  ml-2"
                                  onClick={e => deleteForm(group.id, e)}
                                >
                                  <span className="sr-only">Close panel</span>
                                  <TrashIcon
                                    className="h-6 w-6"
                                    aria-hidden="true"
                                  />
                                </button>
                              </td>
                            </tr>
                          </tbody>
                          <Transition.Root show={open} as={Fragment}>
                            <Dialog
                              as="div"
                              className="fixed inset-0 overflow-hidden"
                              onClose={setOpen}
                            >
                              <div className="absolute inset-0 overflow-hidden">
                                <Dialog.Overlay className="absolute inset-0" />

                                <div className="fixed inset-y-0 right-0 pl-10 max-w-full flex">
                                  <Transition.Child
                                    as={Fragment}
                                    enter="transform transition ease-in-out duration-500 sm:duration-700"
                                    enterFrom="translate-x-full"
                                    enterTo="translate-x-0"
                                    leave="transform transition ease-in-out duration-500 sm:duration-700"
                                    leaveFrom="translate-x-0"
                                    leaveTo="translate-x-full"
                                  >
                                    <div className="w-screen max-w-md">
                                      <div className="h-full flex flex-col py-6 bg-white shadow-xl overflow-y-scroll">
                                        <div className="px-4 sm:px-6">
                                          <div className="flex items-start justify-between">
                                            <div className="ml-3 h-7 flex items-center">
                                              <button
                                                type="button"
                                                className="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                                onClick={() => setOpen(false)}
                                              >
                                                <span className="sr-only">
                                                  Close panel
                                                </span>
                                                <XIcon
                                                  className="h-6 w-6"
                                                  aria-hidden="true"
                                                />
                                              </button>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="mt-6 relative flex-1 px-4 sm:px-6">
                                          {/* Replace with your content */}
                                          <div className="absolute inset-0 px-4 sm:px-6">
                                            <div
                                              className="h-full border-2 border-dashed border-gray-200"
                                              aria-hidden="true"
                                            >
                                              {/* <Dados dados={groups} /> */}
                                            </div>
                                          </div>
                                          {/* /End replace */}
                                        </div>
                                      </div>
                                    </div>
                                  </Transition.Child>
                                </div>
                              </div>
                            </Dialog>
                          </Transition.Root>
                        </React.Fragment>
                      )
                    })}
                  </table>
                </div>
              </div>
            </div>
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
function setOpen(arg0: boolean): void {
  throw new Error('Function not implemented.')
}
