<<<<<<< HEAD
import React, { useState, useEffect } from 'react'
import axios from 'axios'
// import { Dialog, Transition } from '@headlessui/react
import { TrashIcon, PencilIcon } from '@heroicons/react/outline'
// import { EditClient } from '../components/modals/ModalEdit/EditCliet'
import { Modal } from 'react-bootstrap'
// import { useForm } from 'react-hook-form'
=======
import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";
import { Dialog, Transition } from "@headlessui/react";
import { XIcon, TrashIcon, PencilIcon } from "@heroicons/react/outline";
import { ModalEdit } from "../components/modals/ModalEdit/EditCliet";
import { Modal } from "react-bootstrap";
import { useForm } from "react-hook-form";
>>>>>>> c34c1fca9d717c1951034ded40a18bd8dfc02f4d

// const groups = [
//   {
//     id: 1,
//     classificacao: 'Revenda +',
//     status: 'Ativo',
//     description: 'Team of Developer ..'
//   },
//   {
//     id: 2,
//     classificacao: 'Developers',
//     status: 'Inativo',
//     description: 'Team of Developer ..'
//   }
// ]
function refreshPage() {
  window.location.reload();
}

export const TableClassi = () => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const [groups, setGroups] = useState<any[]>([]);
  const [id, setId] = useState<any[]>([]);

<<<<<<< HEAD
  // const [open, setOpen] = useState(false)
=======
  const [open, setOpen] = useState(false);
>>>>>>> c34c1fca9d717c1951034ded40a18bd8dfc02f4d

  useEffect(() => {
    axios
      .get("http://localhost:3006/client")
      .then((response) => {
        setGroups(response.data);
      })
      .catch(() => {
        console.log("DEU ERRADO");
      });
  }, []);

  const deleteForm = (
    id: any,
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    alert("Tem certeza que deseja exluir?");
    axios
      .delete(`http://localhost:3006/client/${id}`)
      .then((res) => console.log("Deleted!!!", res))
      .catch((err) => console.log(err));
    refreshPage();
  };

  const EditForm = (
    id: any,
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    axios.get(`http://localhost:3006/client/${id}`).then((response) => {
      setId(response.data);
    });
  };

  return (
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
                      className="px-15 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider content_action"
                    >
                      Ações
                    </th>
                  </tr>
                </thead>
                {groups.map((group) => {
                  return (
                    <React.Fragment key={group.id}>
                      <tbody className="bg-white divide-y divide-gray-200">
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap">
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
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div
                              className={
                                group.status === "Ativo"
                                  ? "inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-green-100 text-green-800"
                                  : "inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-red-100 text-red-800"
                              }
                            >
                              {group.status}
                            </div>
                          </td>

                          <td className="content_td">
                            <button
                              onClick={(e) => EditForm(group.id, e)}
                              className="text-gray-400 hover:text-gray-100  mx-2"
                            >
                              <span className="sr-only">Close panel</span>
                              <PencilIcon
                                className="h-6 w-6"
                                aria-hidden="true"
                                onClick={handleShow}
                              />
                            </button>

                            <button
                              className="text-gray-400 hover:text-gray-100  ml-2"
                              onClick={(e) => deleteForm(group.id, e)}
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
<<<<<<< HEAD
=======
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
                                            onClick={(handleShow) =>
                                              setOpen(false)
                                            }
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
>>>>>>> c34c1fca9d717c1951034ded40a18bd8dfc02f4d
                    </React.Fragment>
                  );
                })}

                <Modal show={show} onHide={handleClose}>
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
                      onClick={handleClose}
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
  );
};
