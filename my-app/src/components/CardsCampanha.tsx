import React, { useEffect, useState } from 'react'
import { EyeIcon, PencilIcon, TrashIcon } from '@heroicons/react/solid'
import axios from 'axios'
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'

function refreshPage() {
  window.location.reload()
}
function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export const CardsCampanha = () => {
  const [show, setShow] = useState(false)
  const handleShow = () => setShow(true)
  const handleClose = () => setShow(false)
  const [groups, setGroups] = useState<any[]>([])
  const [id, setId] = useState<any[]>([])
  const [open, setOpen] = useState(false)

  useEffect(() => {
    axios
      .get('http://localhost:3006/Campanha')
      .then((response: { data: React.SetStateAction<any[]> }) => {
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
      .delete(`http://localhost:3006/Campanha/${id}`)
      .then(res => console.log('Deleted!!!', res))
      .catch(err => console.log(err))
    refreshPage()
  }

  const EditForm = (
    id: any,
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault()
    axios.get(`http://localhost:3006/Campanha/${id}`).then(response => {
      setId(response.data)
    })
  }
  return (
    <ul
      role="list"
      className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
    >
      {groups.map(groups => (
        <li
          key={groups.name_cp}
          className="col-span-1 bg-white rounded-lg shadow divide-y divide-gray-200"
        >
          <div className="w-full flex items-center justify-between p-6 space-x-6">
            <div className="flex-1 truncate">
              <div className="flex items-center space-x-3">
                <h3 className="text-gray-900 text-sm font-medium truncate">
                  {groups.name}
                </h3>
                <span
                  className={
                    groups.status === 'Ativo'
                      ? 'inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-green-100 text-green-800'
                      : 'inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-red-100 text-red-800'
                  }
                >
                  {groups.status}
                </span>
              </div>
            </div>
            {groups.data}
          </div>
          <div>
            <div className="-mt-px flex divide-x divide-gray-200">
              <div className="w-0 flex-1 flex">
                <button
                  onClick={e => EditForm(groups.id, e)}
                  className="text-gray-400 hover:text-gray-100 px-10 mx-2"
                >
                  <span className="sr-only">Close panel</span>
                  <PencilIcon
                    className="h-6 w-6"
                    aria-hidden="true"
                    onClick={handleShow}
                  />
                </button>
              </div>
              <div className="w-0 flex-1 flex">
                <button
                  onClick={e => EditForm(groups.id, e)}
                  className="text-gray-400 hover:text-gray-100 px-10 py-2 mx-2"
                >
                  <span className="sr-only">Close panel</span>
                  <EyeIcon
                    className="h-6 w-6"
                    aria-hidden="true"
                    onClick={handleShow}
                  />
                </button>
              </div>

              <div className="-ml-px w-0 flex-1 flex">
                <button
                  className="text-gray-400 hover:text-gray-100 px-10 ml-2"
                  onClick={e => deleteForm(groups.id, e)}
                >
                  <span className="sr-only">Close panel</span>
                  <TrashIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  )
}
