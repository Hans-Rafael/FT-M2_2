import React, { useState, useEffect, useRef } from 'react';
import './Timer.css';
import logo from './DayN.png';

//**************** */
const Timer = () => {
  const [segundos, setSegundos] = useState(0);
  const [activo, setActivo] = useState(false);
  const [tipo, setTipo] = useState('Contador');
  const[bkgcolor, setBkgcolor] = useState('#fff');
  const [checked, setChecked] = useState(
    localStorage.getItem("theme") === "dark" ? true : false
  );


//***** */
  function toggle() {
    setActivo(!activo);
  }
  function reset() {
    setSegundos(0);
    setActivo(false);
  }

  function reset2() {
    setBkgcolor('red');
    setActivo(false);
  }

  function cambioTipo() {
    if (tipo === 'Contador') setTipo('Cuenta Regresiva')
    if (tipo === 'Cuenta Regresiva') setTipo('Contador')
  }
  //************ */
  //useEffect contador o a infinito
  /* useEffect(() => {
    let intervalo = null;
    if (activo && tipo === 'Contador') {
      intervalo = setInterval(() => {
        setSegundos(segundos => segundos + 1);
      }, 1000);
    }
    if (!activo && segundos !== 0 && tipo === 'Contador') {
      clearInterval(intervalo);
    }
    return () => clearInterval(intervalo);
  }, [activo, segundos, tipo]); */

  useEffect(() => {
    document
      .getElementsByTagName("HTML")[0]
      .setAttribute("data-theme", localStorage.getItem("theme"));
  }, [checked]);

  /**
   * Actualiza el estado checked y el contenido de nuestro objeto
   * theme en el localStorage basados en el checkbox
   */
  const toggleThemeChange = () => {
    if (checked === false) {
      localStorage.setItem("theme", "dark");
      setChecked(true);
    } else {
      localStorage.setItem("theme", "light");
      setChecked(false);
    }
  };

  //******* */
  //useEffect cuenta regresiva
  useEffect(() => {
    let intervalo = null;
    if (activo && tipo === 'Contador') {
      intervalo = setInterval(() => {
        setSegundos(segundos => segundos + 1);
      }, 1000);
    }
    if (activo && tipo === 'Cuenta Regresiva') {
      intervalo = setInterval(() => {
        setSegundos(segundos => segundos - 1);
      }, 1000);
    }
    if (!activo && segundos !== 0 && tipo === 'Contador') {
      clearInterval(intervalo);
    }
    if (segundos === 0 && tipo === 'Cuenta Regresiva') {
      reset();
      clearInterval(intervalo);
    }

    return () => clearInterval(intervalo);
  }, [activo, segundos, tipo]);

  //********************** */

  const myRef = useRef(null);

   function agregaSegundos() {
    // `current` apunta al elemento de entrada de texto montado
    let ref = myRef.current.value
    setSegundos(ref)
} 



  //************************ */
  return (
    <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Click para cambiar el tema</p>
        <label>
        {/* <div className="app"> */}

      <div className="time">
        {segundos}s
      </div>
      <div className="row">
        <button className={`button button-primary button-primary-${activo ? 'active' : 'inactive'}`} onClick={toggle}>
          {activo ? 'Pausa' : 'Inicio'}
        </button>
        <button className={`button button-secondary button-secondary-${activo ? 'active' : 'inactive'}`} onClick={reset}>
          {activo ? 'Reset' : 'Reset'}
        </button>
      </div>
      <button className="button" onClick={cambioTipo}>
        {tipo}
      </button>
      {tipo === 'Cuenta Regresiva' && <input type="number" placeholder="Ingresa Segundos" autoComplete="off" ref={myRef} onChange={agregaSegundos}/>}
      
      {/* prueba botonn extra reset background */}

      {/* <button className={`button button-dos button-dos-${activo ? 'active' : 'inactive'}`} onClick={reset2}>
          {activo ? 'Reset' : 'Reset'}
        </button> */}
        
        {/* <div className="App"> */}
      
          <input
            type="checkbox"
            defaultChecked={checked}
            onChange={() => toggleThemeChange()}
          />
        </label>
      </header>

  );
};

export default Timer;
