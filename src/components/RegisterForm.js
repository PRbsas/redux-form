import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { customInput, customSelect } from './fields'
// import { validate } from '../validation'
import {
  required,
  minLength,
  maxLength
} from '../validation'

class RegisterForm extends Component {
  render () {
    const { handleSubmit } = this.props
    return (
      <form onSubmit={handleSubmit}>
        <Field
          name='firstname'
          component={customInput}
          type='text'
          label='First Name'
          validate={[required]}
        />
        <Field
          name='lastname'
          component={customInput}
          type='text'
          label='Last Name'
          validate={[required]}
        />
        <Field
          name='username'
          component={customInput}
          type='text'
          label='Username'
          validate={[required, minLength, maxLength]}
        />
        <Field
          name='preference'
          component={customSelect}
          label='Preferred Formatting'
        />
        <Field
          name='newsletter'
          component={customInput}
          type='checkbox'
          label='Sign up to newsletter?'
        />
        <button type='submit'>Submit</button>
      </form>
    )
  }
}

RegisterForm = reduxForm({
  form: 'register'
  // validate
})(RegisterForm)

export default RegisterForm
