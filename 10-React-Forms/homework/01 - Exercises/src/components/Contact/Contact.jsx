import React, { useState } from 'react'
import './Contact.modules.css'

// eslint-disable-next-line
const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

export function validate (inputs) {
  const errors= {}

  if (!inputs.name) errors.name= "Se requiere un nombre"
  if (!regexEmail.test(inputs.email)) errors.email= "Debe ser un correo electrónico"
  if (inputs.phone < 0) errors.phone= "Sólo números positivos"
  if (!inputs.subject) errors.subject= "Se requiere un asunto"
  if (!inputs.message) errors.message= "Se requiere un mensaje"

  return errors;
}

export default function Contact () {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    phone: 0,
    subject: "",
    message: ""
  })
  
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  })
  
  const handleChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value
    })
    setErrors(
      validate({
        ...inputs,
        [e.target.name]: e.target.value
      })
    )
  }

  const handleSubmit = (e) => {
    e.preventDefault() // Evita que se refresque la página
    if (!Object.keys(errors).length) {
      setInputs({
        name: "",
        email: "",
        phone: 0,
        subject: "",
        message: ""
      })
      setErrors({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
      })
      return window.alert("Datos completos")
    }
    else {
      return window.alert("Debes corregir los errores")
    }
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <label>Nombre:</label>
      <input 
        type='text' 
        placeholder='Escribe tu nombre...' 
        name='name' 
        value={inputs.name} 
        onChange={(e) => handleChange(e)}
        className={errors.name && "warning"} 
      />
      <p className='danger'>{errors.name && errors.name}</p>
      <label>Correo Electrónico:</label>
      <input 
        type='text' 
        placeholder='Escribe tu email...' 
        name='email' 
        value={inputs.email} 
        onChange={(e) => handleChange(e)}
        className={errors.email && "warning"} 
      />
      <p className='danger'>{errors.email && errors.email}</p>
      <label>Teléfono:</label>
      <input 
        type='number' 
        placeholder='Escribe un teléfono...' 
        name='phone' 
        value={inputs.phone} 
        onChange={(e) => handleChange(e)}
        className={errors.phone && "warning"} 
      />
      <p className='danger'>{errors.phone && errors.phone}</p>
      <label>Asunto:</label>
      <input 
        type='text' 
        placeholder='Escribe el asunto...' 
        name='subject' 
        value={inputs.subject} 
        onChange={(e) => handleChange(e)}
        className={errors.subject && "warning"} 
      />
      <p className='danger'>{errors.subject && errors.subject}</p>
      <label>Mensaje:</label>
      <textarea 
        type='text' 
        placeholder='Escribe tu mensaje...' 
        name='message' 
        value={inputs.message} 
        onChange={(e) => handleChange(e)}
        className={errors.message && "warning"} 
      />
      <p className='danger'>{errors.message && errors.message}</p>
      <button type="submit">Enviar</button>
    </form>
  )
}
