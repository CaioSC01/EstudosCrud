import { PlusSmIcon } from '@heroicons/react/outline'
import { Modal } from 'react-bootstrap'
import { TableClassi } from '../components/TableClassi'
import { ModalAdd } from '../components/modals/ModalAdd'
// import Form from './Form'
import './page.style/classific.css'
import { useState } from 'react'

export const ClassificCli = () => {
  const [show, setShow] = useState(false)
  const handleShow = () => setShow(true)
  const handleClose = () => setShow(false)
  return (
    <>
      <div className=" content_group">
        <div className="md:flex md:items-center md:justify-between">
          <div className="flex-1 flex flex-col overflow-hidden">
            <div className="flex-1 flex items-stretch overflow-hidden">
              <main className="flex-1 overflow-y-auto">
                <section
                  aria-labelledby="primary-heading"
                  className="min-w-0 flex-1 h-full flex flex-col overflow-hidden lg:order-last p-4"
                >
                  <div className="ml-2 flex items-center space-x-4 sm:ml-6 sm:space-x-6">
                    <h2 className="p-4 text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
                      Classificação
                    </h2>
                    <button
                      type="button"
                      className="flex bg-[#9a8e74] p-1 rounded-full items-center justify-center text-white hover:bg-[#b5aa92] focus:outline-none  "
                      onClick={handleShow}
                      // onClick={() => setOpen(true)}
                    >
                      <PlusSmIcon className="h-6 w-6" aria-hidden="true" />
                      <span className="sr-only">Add arquivo</span>
                    </button>
                  </div>
                  {/* {open ? (
                  //   <Form
                  //     show={open}
                  //     closeButton={() => setOpen(false)}
                  //   />
                  // ) : null}  */}

                  <TableClassi />
                  <Modal show={show} onHide={handleClose}>
                    <Modal.Header>
                      <Modal.Title>Adicionar Classificação</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <ModalAdd />
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
                </section>
              </main>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
