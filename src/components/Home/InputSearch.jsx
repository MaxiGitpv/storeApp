import React from 'react'
import { useForm } from 'react-hook-form'

const InputSearch = () => {

  const {handleSubmit, register, reset} = useForm()

  const submit = data => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(submit)} className='form-home'>
      <input placeholder="Search your product" type="text" {...register('searchText')} />
      <button className="btn-input">Search</button>
    </form>
  )
}

export default InputSearch