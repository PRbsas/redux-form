import React, { Component } from 'react'
import { Field, FieldArray, reduxForm } from 'redux-form'
import { customInput, customSelect, discounts } from './fields'
// import { validate } from '../validation'
import capitalize from 'capitalize'
import {
  required,
  minLength,
  maxLength,
  matchesPassword,
  asyncValidate
} from '../validation'
import './RegisterForm.css'

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
          normalize={capitalize}
        />
        <Field
          name='lastname'
          component={customInput}
          type='text'
          label='Last Name'
          validate={[required]}
          normalize={capitalize}
        />
        <Field
          name='username'
          component={customInput}
          type='text'
          label='Username'
          validate={[required, minLength, maxLength]}
        />
        <Field
          name='password'
          component={customInput}
          type='password'
          label='Password'
          validate={[required]}
        />
        <Field
          name='confirmPassword'
          component={customInput}
          type='password'
          label='Confirm Password'
          validate={[required, matchesPassword]}
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
        <FieldArray name='discountCodes' component={discounts} />
        <button type='submit'>Submit</button>
      </form>
    )
  }
}

RegisterForm = reduxForm({
  form: 'register',
  asyncValidate,
  asyncBlurFields: ['username']
  // validate
})(RegisterForm)

export default RegisterForm
