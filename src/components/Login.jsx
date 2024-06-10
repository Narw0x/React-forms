import { useState } from 'react';
import Input from './Input';
import { isEmail, isNotEmpty, hasMinLength } from '../util/validation';

export default function Login() {
  const [values, setValues] = useState({
    email: '',
    password: ''
  });

  const [didEdit, setDidEdit] = useState({
    email: false,
    password: false
  });

  const emailIsInvalid = didEdit.email && !isEmail(values.email) && !isNotEmpty(values.email);
  const passwordIsInvalid = didEdit.password && !hasMinLength(values.password, 6);

  function handleSubmit(event){
    event.preventDefault();
  }

  function handleChange(event){
    const { name, value } = event.target;
    setDidEdit({
      ...didEdit,
      [name]: false
    });

    setValues({
      ...values,
      [name]: value
    });
  }

  function handleBlur(event){
    const { name } = event.target;
    setDidEdit({
      ...didEdit,
      [name]: true
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <Input
          label="Email"
          id="email"
          name="email"
          type="email"
          error={emailIsInvalid && 'Please enter a valid email'}
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
        />

        <Input
          label="Password"
          id="password"
          name="password"
          type="password"
          error={passwordIsInvalid && 'Password must be at least 6 characters long'}
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
