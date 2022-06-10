import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { TrashIcon, PencilIcon } from '@heroicons/react/outline'
import { ModalEdit } from './modals/ModalEdit/EditClassific'
import { Modal } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function refreshPage() {
  window.location.reload()
}

export const TableClassi = () => {
  const [showE, setShowE] = useState(false)
  const handleShowE = () => setShowE(true)
  const handleCloseE = () => setShowE(false)
  const [showD, setShowD] = useState(false)
  const handleShowD = () => setShowD(true)
  const handleCloseD = () => setShowD(false)
  const [classific, setClassific] = useState<any[]>([])
  const [id, setId] = useState<any[]>([])

  useEffect(() => {
    axios
      .get('https://localhost:44328/api/classific')
      .then(response => {
        setClassific(response.data)
      })
      .catch(() => {
        console.log('DEU ERRADO')
      })
  }, [])

  //   async deletePost(postId) {

  //     if (!window.confirm("Deseja realmente excluir este post?")) return;

  //     try {
  //         await postsService.delete(postId)
  //         alert("Post excluído com sucesso")
  //         this.props.history.replace('/post-list')
  //     } catch (error) {
  //         console.log(error);
  //         alert("Não foi excluir o post.")
  //     }

  // }

  const deleteForm = (
    id: any,
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault()

    if (!window.confirm('Deseja realmente excluir este post?')) return

    try {
      axios.delete(`https://localhost:44328/api/classific/${id}`)
      alert('Post excluído com sucesso')
      refreshPage()
    } catch (error) {
      console.log(error)
      alert('Não foi excluir o post.')
    }
  }

  const EditForm = (
    id: any,
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault()
    axios.get(`https://localhost:44328/api/classific/${id}`).then(response => {
      setId(response.data)
    })
  }

  return (
    <div className="w-full">
      <div className="flex flex-col">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-10">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-10">
                  <tr>
                    <th
                      scope="col"
                      className="px-8 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      ID
                    </th>
                    <th
                      scope="col"
                      className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Classificação
                    </th>
                    <th
                      scope="col"
                      className="px-10 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Status
                    </th>

                    <th
                      scope="col"
                      className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider content_action"
                    >
                      Ações
                    </th>
                  </tr>
                </thead>

                {classific.map(classific => {
                  return (
                    <React.Fragment key={classific.DS_Classificacao}>
                      <tbody className="bg-white divide-y divide-gray-200">
                        <tr>
                          <td className="px-2 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="ml-4">
                                <div className="text-sm font-medium text-gray-900">
                                  {classific.ID}
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="font-bold text-sm text-gray-900">
                              {classific.DS_Classificacao}
                            </div>
                          </td>
                          <td className="px-9 py-4 whitespace-nowrap">
                            <div
                              className={
                                classific.Status === true
                                  ? 'inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-green-100 text-green-800'
                                  : 'inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-red-100 text-red-800'
                              }
                            >
                              {classific.Status === true ? 'Ativo' : 'Inativo'}
                            </div>
                          </td>

                          <td className="content_td">
                            <button
                              // onClick={e => EditForm(classific.ID, e)}
                              className="text-gray-400 hover:text-gray-100  mx-2"
                            >
                              <span className="sr-only">Close panel</span>
                              <PencilIcon
                                className="h-6 w-6"
                                aria-hidden="true"
                              />
                            </button>

                            <button
                              onClick={e => deleteForm(classific.ID, e)}
                              className="text-gray-400 hover:text-gray-100  ml-2"
                            >
                              <span className="sr-only">Close panel</span>
                              <TrashIcon
                                className="h-6 w-6"
                                aria-hidden="true"

                                // values={classific.DS_Classificacao}
                              />
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    </React.Fragment>
                  )
                })}
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
