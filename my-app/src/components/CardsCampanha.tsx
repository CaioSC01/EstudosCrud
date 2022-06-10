import React, { useEffect, useState } from 'react'
import { EyeIcon, PencilIcon, TrashIcon } from '@heroicons/react/solid'
import axios from 'axios'
import { Modal } from 'react-bootstrap'
import { ModalEditCamp } from './modals/ModalEdit/EditCamp'

function refreshPage() {
  window.location.reload()
}

export const CardsCampanha = () => {
  const [showE, setShowE] = useState(false)
  const handleShowE = () => setShowE(true)
  const handleCloseE = () => setShowE(false)
  const [showD, setShowD] = useState(false)
  const handleShowD = () => setShowD(true)
  const handleCloseD = () => setShowD(false)
  const [camp, setCamp] = useState<any[]>([])
  const [id, setId] = useState<any[]>([])

  useEffect(() => {
    axios
      .get('https://localhost:44328/api/campanha')
      .then(response => {
        setCamp(response.data)
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

    if (!window.confirm('Deseja realmente excluir este post?')) return

    try {
      axios.delete(`https://localhost:44328/api/campanha/${id}`)
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
    console.log('aquioh;', id)
    e.preventDefault()
    axios.get(`https://localhost:44328/api/campanha/${id}`).then(response => {
      setId(response.data)
    })
  }

  return (
    <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {camp.map(camp => (
        <li
          key={camp.Nome}
          className="col-span-1 bg-white rounded-lg shadow divide-y divide-gray-200"
        >
          <div className="w-full flex items-center justify-between p-6 space-x-6">
            <div className="flex-1 truncate">
              <div className="flex items-center space-x-3">
                <h3 className="text-sm font-medium text-gray-500 truncate">
                  {camp.Nome}
                </h3>
                <span
                  className={
                    camp.Fl_Ativo === true
                      ? 'inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-green-100 text-green-800'
                      : 'inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-red-100 text-red-800'
                  }
                >
                  {camp.Fl_Ativo === true ? 'Ativo' : 'Inativo'}
                </span>
              </div>
            </div>
          </div>
          <div>
            <div className="-mt-px flex divide-x divide-gray-200">
              <div className="w-0 flex-1 flex">
                <button
                  onClick={e => EditForm(camp.ID, e)}
                  className="text-gray-400 hover:text-gray-100 px-10 mx-2"
                >
                  <span className="sr-only">Close panel</span>
                  <PencilIcon
                    className="h-6 w-6"
                    aria-hidden="true"
                    onClick={handleShowE}
                  />
                </button>
              </div>
              <div className="w-0 flex-1 flex">
                <button className="text-gray-400 hover:text-gray-100 px-10 py-2 mx-2">
                  <span className="sr-only">Close panel</span>
                  <EyeIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>

              <div className="-ml-px w-0 flex-1 flex">
                <button
                  onClick={e => deleteForm(camp.ID, e)}
                  className="text-gray-400 hover:text-gray-100  ml-2"
                >
                  <span className="sr-only">Close panel</span>
                  <TrashIcon
                    className="h-6 w-6"
                    aria-hidden="true"

                    // values={classific.DS_Classificacao}
                  />
                </button>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  )
}
