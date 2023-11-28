import React, { useState } from 'react';
import './App.css';

function Registro() {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');
  const [password, setPassword] = useState('');
  const [confirmarPassword, setConfirmarPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí podrías realizar la lógica de envío de los datos del formulario
  };

  return (
    <form className="container-form" onSubmit={handleSubmit}>
      <div>
        <h1 id="tituloH1">Solicitud de Registro</h1>
      </div>
      <div className="form-group">
        <label htmlFor="nombreInput">Nombre:</label>
        <input type="text" id="nombreInput" placeholder="Ingresa tu Nombre" value={nombre} onChange={(event) => setNombre(event.target.value)} />
      </div>
      <div className="form-group">
        <label htmlFor="apellidoInput">Apellido:</label>
        <input type="text" id="apellidoInput" placeholder="Ingresa tu Apellido" value={apellido} onChange={(event) => setApellido(event.target.value)} />
      </div>
      <div className="form-group">
        <label htmlFor="emailInput">Email:</label>
        <input type="email" id="emailInput" placeholder="xx@xxx.com"value={email} onChange={(event) => setEmail(event.target.value)} />
      </div>
      <div className="form-group">
        <label htmlFor="telefonoInput">Teléfono:</label>
        <input type="tel" id="telefonoInput" placeholder="1144685958" value={telefono} onChange={(event) => setTelefono(event.target.value)} />
      </div>
      <div className="form-group">
        <label htmlFor="contraseñaInput">Contraseña:</label>
        <input type="password" id="contraseñaInput" placeholder="C*******A"  value={password} onChange={(event) => setPassword(event.target.value)} />
      </div>
      <div className="form-group">
        <label htmlFor="cContraseña">Confirmar Contraseña:</label>
        <input type="password" id="cContraseña" placeholder="C*******A" value={confirmarPassword} onChange={(event) => setConfirmarPassword(event.target.value)} />
      </div>
      <button type="submit">Registrarse</button>
    </form>
  );
}

export default Registro;


