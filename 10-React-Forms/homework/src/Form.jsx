import React from 'react';

export default function Form() {

  const [errors, setErrors] = React.useState({});//PROVAR ERROR en input
  //let [input, setInput] = React.useState({ o puede ser como la siguiente linea
  const [state, setState] = React.useState({//
    username: "",
    password: "",
  });
  
   function handleOnChange(e) {
    setState((prevState) => {
      //Creando el nuevo estado
      //[e.target.name] --> permite manipular dos inputs distintos al mismo tiempo
      const newState = {
        ...prevState,  // las propiedades que ya tenia input es prevState
        [e.target.name]: e.target.value,
      };
      //Valido los errores
      setErrors(validate(newState));
      //Retornando el estado
      return newState;
    });
  } 

  return (
    <form>
      <div>
        <label>Username:</label>
        <input
          type="text"
          value={state.username}
          name="username"
          placeholder="must be an email"
          onChange={handleOnChange}/* value={username} */
          className={errors.username && 'danger'}
        />
        {//line agregada por martina
          errors.username && <p>{errors.username}</p>
        }
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          value={state.password}
          name='password'
          onChange={handleOnChange}/* value={password} */
          placeholder="password"
          className={errors.password && 'danger'}
        />
        {//line agregada por martina
          errors.password && <p>{errors.password}</p>
        }
      </div>
      <input type="submit" value="ingresarrrrr"/>
    </form>
  )
}

export function validate(input) {
  let errors = {};
  if (!input.username) {
    errors.username = 'Username is required';
  } else if (!/\S+@\S+\.\S+/.test(input.username)) {
    errors.username = 'Username is invalid';
  }
  /***/
  if (!input.password) {
    errors.password = 'Password is required';
  } else if (!/(?=.*[0-9])/.test(input.password)) {
    errors.password = 'Password is invalid';
  }
  return errors;
};
