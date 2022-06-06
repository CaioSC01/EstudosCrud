import axios from 'axios'
import React, { useState } from 'react'
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid'
import { Combobox } from '@headlessui/react'

const people = [
  { id: 1, name: 'Leslie Alexander' }
  // More users...
]

function classNames(...classes: (string | boolean)[]) {
  return classes.filter(Boolean).join(' ')
}

const addForm2 = (data: any) =>
  axios
    .post('http://localhost:3006/Groups_Client', data)
    .then(response => {
      console.log(response.data)
      // refreshPage()
    })
    .catch(error => {
      console.log(error)
    })

export const TableClient = () => {
  const [groups, setGroups] = useState<any[]>([])
  const [query, setQuery] = useState('')
  const [selectedPerson, setSelectedPerson] = useState()

  const filteredPeople =
    query === ''
      ? people
      : people.filter(person => {
          return person.name.toLowerCase().includes(query.toLowerCase())
        })
  return (
    <>
      <form onSubmit={handleSubmit(addForm2)}>
        <div className="w-full content_client">
          <h2>Clientes</h2>
          <div className="flex flex-col content_client">
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8 ">
              <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-10">
                      <tr>
                        <th
                          scope="col"
                          className="px-8 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Clientes
                        </th>
                        <th
                          scope="col"
                          className="px-8 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          <input type="search" />
                        </th>
                      </tr>
                    </thead>
                    {groups.map(group => {
                      return (
                        <React.Fragment key={group.id}>
                          <tbody className="bg-white divide-y divide-gray-200">
                            <tr>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <div className="font-bold text-sm text-gray-900">
                                  <input type="checkbox" />
                                  {group.clientes}
                                </div>
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
      </form>
    </>
  )
}
function handleSubmit(
  addForm2: (data: any) => Promise<void>
): React.FormEventHandler<HTMLFormElement> | undefined {
  throw new Error('Function not implemented.')
}
