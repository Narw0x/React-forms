import { useState } from 'react';

export default function Login() {
  const [values, setValues] = useState({
    email: '',
    password: ''
  });

  const [didEdit, setDidEdit] = useState({
    email: false,
    password: false
  });

  const emailIsInvalid = didEdit.email && !values.email.includes('@');

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
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" onBlur={handleBlur} onChange={handleChange} value={values.email}/>
          <div className="control-error">
            {emailIsInvalid && 'Please enter a valid email'}
          </div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" onChange={handleChange} value={values.password}/>
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
