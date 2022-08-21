import React from 'react'
import classnames from 'classnames'
import {
   Input
  } from "reactstrap";
function InputGroup({ type, name, onChangeHandler, errors, value , placeholder}) {
  return (
    <div>
    <Input type={type} value={value} className={(classnames("no-border input-lg" 
                          , {"is-invalid": errors}))}  name={name} onChange={onChangeHandler} placeholder={placeholder} />
    {
      errors && (<div class="invalid-feedback">
      {errors}
    </div>)
    }
  </div>
  )
}

export default InputGroup