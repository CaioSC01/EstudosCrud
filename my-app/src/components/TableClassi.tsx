import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {
  TrashIcon,
  PencilIcon,
  BookmarkAltIcon
} from '@heroicons/react/outline'
import { ModalEdit } from './modals/ModalEdit/EditCliet'
import { Button, Modal } from 'react-bootstrap'

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
  const [groups, setGroups] = useState<any[]>([])
  const [id, setId] = useState<any[]>([])

  useEffect(() => {
    axios
      .get('http://localhost:3006/client')
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
    axios
      .delete(`http://localhost:3006/client/${id}`)
      .then(res => console.log('Deleted!!!', res))
      .catch(err => console.log(err))
    refreshPage()
  }

  const EditForm = (
    id: any,
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault()
    axios.get(`http://localhost:3006/client/${id}`).then(response => {
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
                {groups.map(group => {
                  return (
                    <React.Fragment key={group.id}>
                      <tbody className="bg-white divide-y divide-gray-200">
                        <tr>
                          <td className="px-2 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="ml-4">
                                <div className="text-sm font-medium text-gray-900">
                                  {group.id}
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="font-bold text-sm text-gray-900">
                              {group.classificacao}
                            </div>
                          </td>
                          <td className="px-9 py-4 whitespace-nowrap">
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

                          <td className="content_td">
                            <button
                              onClick={e => EditForm(group.id, e)}
                              className="text-gray-400 hover:text-gray-100  mx-2"
                            >
                              <span className="sr-only">Close panel</span>
                              <PencilIcon
                                className="h-6 w-6"
                                aria-hidden="true"
                                onClick={handleShowE}
                              />
                            </button>

                            <button className="text-gray-400 hover:text-gray-100  ml-2">
                              <span className="sr-only">Close panel</span>
                              <TrashIcon
                                className="h-6 w-6"
                                aria-hidden="true"
                                onClick={handleShowD}
                              />
                            </button>
                          </td>
                        </tr>
                      </tbody>
                      <Modal
                        show={showD}
                        onHide={handleCloseD}
                        backdrop="static"
                        keyboard={false}
                      >
                        <Modal.Header closeButton>
                          <Modal.Title>
                            Deletar <b>{group.classificacao}</b>
                          </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                          Tem certeza que deseja deletar{' '}
                          <b>{group.classificacao}</b> ? Essa ação é
                          irreversivel.
                        </Modal.Body>
                        <Modal.Footer>
                          <button onClick={handleCloseD}>Cancelar</button>
                          <button onClick={e => deleteForm(group.id, e)}>
                            Deletar
                          </button>
                        </Modal.Footer>
                      </Modal>
                    </React.Fragment>
                  )
                })}

                <Modal
                  show={showE}
                  onHide={handleCloseE}
                  backdrop="static"
                  keyboard={false}
                >
                  <Modal.Header>
                    <Modal.Title>Editar Classificação</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <ModalEdit id={id}></ModalEdit>
                  </Modal.Body>
                  <Modal.Footer>
                    <button
                      type="button"
                      className="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      onClick={handleCloseE}
                    >
                      Cancelar
                    </button>
                  </Modal.Footer>
                </Modal>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
