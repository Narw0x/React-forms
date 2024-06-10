import Input from './Input';
import { isEmail, isNotEmpty, hasMinLength } from '../util/validation';
import { useInput } from '../hooks/useInput';

export default function Login() {

  const {
    value : email,
    handleChange : handleChangeEmail,
    handleBlur : handleBlurEmail,
    hasError : emailIsInvalid

  } = useInput('', (value) => isEmail(value) && isNotEmpty(value));

  const {
    value : password,
    handleChange : handleChangePassword,
    handleBlur : handleBlurPassword,
    hasError : passwordIsInvalid
  } = useInput('', (value) => hasMinLength(value, 6));


  function handleSubmit(event){
    event.preventDefault();

    if(emailIsInvalid || passwordIsInvalid){
      return;
    }

    console.log(email, password);
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
          value={email}
          onChange={handleChangeEmail}
          onBlur={handleBlurEmail}
        />

        <Input
          label="Password"
          id="password"
          name="password"
          type="password"
          error={passwordIsInvalid && 'Password must be at least 6 characters long'}
          value={password}
          onChange={handleChangePassword}
          onBlur={handleBlurPassword}
        />
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
