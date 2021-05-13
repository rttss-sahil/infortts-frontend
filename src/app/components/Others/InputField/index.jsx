import React from 'react'
import './InputField.scss'
function InputField({ type, onChange, placeholder, value, autofocus }) {
  return (
    <input autoFocus={autofocus} type={type || "text"} onChange={onChange} placeholder={placeholder || ''} value={value} />
  )
}
export default InputField;