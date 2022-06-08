import React from 'react'
import { ChangeEvent } from 'react'
import axios from 'axios'
import { useForm, Controller } from 'react-hook-form'
import { useForm2, FormActions } from '../../contexts/FormContext'

function refreshPage() {
  window.location.reload()
}

export const ModalDelete = (id: any) => {
  const { state, dispatch } = useForm2()
  const { control, register, handleSubmit } = useForm()
 

  return (
    <>

    </>
  )
}
