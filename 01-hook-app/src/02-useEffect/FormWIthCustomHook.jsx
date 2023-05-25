import React, { useEffect, useState } from 'react';
import { useForm } from '../hook/useForm';

export const FormWithCustomHook = () => {

    // const [formState, setFormState] = useState({
    //     username: '',
    //     email: '',
    //     password: ''
    // })

    const {username, email, password, formState, onInputChange, onResetForm} = useForm({
        username: '',
        email: '',
        password: '',
    })


    useEffect(() => {
    //   console.log('useEffect');
    }, [])
    useEffect(() => {
    //   console.log('formstate');
    }, [formState])
    useEffect(() => {
    //   console.log('email');
    }, [email])
    

  return (
    <>
        <h1>Formulario With Custom Hook</h1>
        <hr />
        <input 
            type="text" 
            className='form-control'
            placeholder='Username'
            name="username" 
            value={username}
            onChange={onInputChange}
        />
        <input 
            type="email" 
            className='form-control mt-2'
            placeholder='oscar@gmail.com'
            name="email" 
            value={email}
            onChange={onInputChange}
        />
        <input 
            type="password" 
            className='form-control mt-2'
            placeholder='contrasena'
            name="password" 
            value={password}
            onChange={onInputChange}
        />
        <button className='btn btn-primary mt-2' onClick={onResetForm}>Borrar</button>
    </>
  )
}
 