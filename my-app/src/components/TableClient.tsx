import axios from 'axios'
import React, { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid'
import { Combobox } from '@headlessui/react'

const people = [
  { id: 1, name: 'Leslie Alexander' },
  { id: 2, name: 'Caio Silva' },
  { id: 3, name: 'Eduardo' },
  { id: 4, name: 'Julia' },
  { id: 5, name: 'Lucas' },
  { id: 6, name: 'Ricardo' }
  // More users...
]

function classNames(...classes: (string | boolean)[]) {
  return classes.filter(Boolean).join(' ')
}

function refreshPage() {
  window.location.reload()
}

export const TableClient = () => {
  const { control, register, handleSubmit } = useForm()
  const [query, setQuery] = useState('')
  const [selectedPerson, setSelectedPerson] = useState()

  const filteredPeople =
    query === ''
      ? people
      : people.filter(person => {
          return person.name.toLowerCase().includes(query.toLowerCase())
        })

  const addForm2 = (data: any) =>
    axios
      .post(`https://localhost:44328/api/grupocliente/`, data)
      .then(response => {
        console.log(response.data)
        refreshPage()
      })
      .catch(error => {
        console.log(error, data)
      })

  return (
    <>
      <form onSubmit={handleSubmit(addForm2)}>
        <Combobox as="div" value={selectedPerson} onChange={setSelectedPerson}>
          <Combobox.Label className="block text-sm font-medium text-gray-700">
            Clientes
          </Combobox.Label>
          <div className="relative mt-1">
            <Combobox.Input
              className="w-full rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
              //   onChange={(event) => setQuery(event.target.value)}
              displayValue={(person: any) => person.name}
              {...register('DS_Grupo')}
            />
            <Combobox.Button
              type="submit"
              className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none"
            >
              <SelectorIcon
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </Combobox.Button>

            {filteredPeople.length > 0 && (
              <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {filteredPeople.map(person => (
                  <Combobox.Option
                    key={person.id}
                    value={person}
                    className={({ active }) =>
                      classNames(
                        'relative cursor-default select-none py-2 pl-8 pr-4',
                        active ? 'bg-indigo-600 text-white' : 'text-gray-900'
                      )
                    }
                  >
                    {({ active, selected }) => (
                      <>
                        <span
                          className={classNames(
                            'block truncate',
                            selected && 'font-semibold'
                          )}
                        >
                          {person.name}
                        </span>

                        {selected && (
                          <span
                            className={classNames(
                              'absolute inset-y-0 left-0 flex items-center pl-1.5',
                              active ? 'text-white' : 'text-indigo-600'
                            )}
                          >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        )}
                      </>
                    )}
                  </Combobox.Option>
                ))}
              </Combobox.Options>
            )}
          </div>
        </Combobox>
      </form>
    </>
  )
}
