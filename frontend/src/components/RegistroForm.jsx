import { useState } from 'react';

const RegistroForm = () => {
  const [datos, setDatos] = useState({ nombre_completo: '', oficio: '', contacto: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Aquí conectaremos con el backend (POST /api/profesionales)
    console.log("Registrando profesional:", datos);
  };

  return (
    <form className="registro-form" onSubmit={handleSubmit}>
      <h2 className="registro-form__title">Regístrate como Profesional</h2>
      <input 
        type="text" 
        placeholder="Nombre Completo" 
        className="registro-form__input"
        onChange={(e) => setDatos({...datos, nombre_completo: e.target.value})}
        required 
      />
      <input 
        type="text" 
        placeholder="Oficio (ej: Plomero)" 
        className="registro-form__input"
        onChange={(e) => setDatos({...datos, oficio: e.target.value})}
        required 
      />
      <input 
        type="text" 
        placeholder="Contacto (Tel/Email)" 
        className="registro-form__input"
        onChange={(e) => setDatos({...datos, contacto: e.target.value})}
        required 
      />
      <button type="submit" className="registro-form__button">Unirse</button>
    </form>
  );
};

export default RegistroForm;