// import React, { useEffect } from 'react'
import { ChangeEvent } from 'react'
// import axios from 'axios'
// import { useForm, Controller } from 'react-hook-form'
// import { useForm2, FormActions } from '../../../contexts/FormContext'
// import { useParams } from 'react-router-dom'
// import { convertCompilerOptionsFromJson } from 'typescript'

// function refreshPage() {
//   window.location.reload()
// }

// export const EditClient = () => {
//   const { id } = useParams()
//   const { state, dispatch } = useForm2()
//   const { control, register, handleSubmit, reset } = useForm({
//     // defaultValues
//   })

//   useEffect(() => {
//     axios.put(`http://localhost:3006/client/${id}`).then(response => {
//       console.log(response.data)
//     })
//   })

//   // const addForm = data =>
//   //   axios
//   //     .put(`http://localhost:3006/client/${id}`, data)
//   //     .then(() => {
//   //       console.log('Deu tudo certo')
//   //     })
//   //     .catch(() => {
//   //       console.log('DEU ERRADO')
//   //     })

//   return (
//     <>
//       <form onSubmit={handleSubmit(addForm)}>
//         <Controller
//           render={({ field }) => (
//             <select {...field}>
//               <option></option>
//               <option>Ativo</option>
//               <option>Inativo</option>
//             </select>
//           )}
//           control={control}
//           name="status"
//         />
//         <div>
//           <label
//             htmlFor="Classificação"
//             className="block text-sm font-medium text-gray-700"
//           >
//             Classificação
//           </label>
//           <div className="mt-1">
//             <input
//               required
//               type="text"
//               {...register('classificacao')}
//               value={state.classificação}
//               onChange={handleClassificacaoChange}
//               className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
//             />
//           </div>
//         </div>

//         <button
//           type="submit"
//           className="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//         >
//           Salvar
//         </button>
//       </form>
//     </>
//   )
// }
// function data(arg0: string, data: any) {
//   throw new Error('Function not implemented.')
// }
