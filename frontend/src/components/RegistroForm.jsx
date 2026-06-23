import { useState } from 'react';
import { profesionalService } from '../services/api';

const RegistroForm = () => {
  const [datos, setDatos] = useState({
    nombre_completo: '',
    oficio: '',
    contacto: '',
    ubicacion: '',
    descripcion: '',
  });
  const [mensaje, setMensaje] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMensaje(null);
    setError(null);
    try {
      await profesionalService.registrar(datos);
      setMensaje('¡Registro exitoso! Ya puedes buscarte en la lista.');
      setDatos({ nombre_completo: '', oficio: '', contacto: '', ubicacion: '', descripcion: '' });
    } catch {
      setError('No se pudo registrar. Verifica los datos e intenta de nuevo.');
    }
  };

  return (
    <form className="registro-form" onSubmit={handleSubmit}>
      <h2 className="registro-form__title">Regístrate como Profesional</h2>
      <input 
        type="text" 
        placeholder="Nombre Completo" 
        className="registro-form__input"
        value={datos.nombre_completo}
        onChange={(e) => setDatos({...datos, nombre_completo: e.target.value})}
        required 
      />
      <input 
        type="text" 
        placeholder="Oficio (ej: Plomero)" 
        className="registro-form__input"
        value={datos.oficio}
        onChange={(e) => setDatos({...datos, oficio: e.target.value})}
        required 
      />
      <input 
        type="text" 
        placeholder="Contacto (Tel/Email)" 
        className="registro-form__input"
        value={datos.contacto}
        onChange={(e) => setDatos({...datos, contacto: e.target.value})}
        required 
      />
      <input 
        type="text" 
        placeholder="Ubicación" 
        className="registro-form__input"
        value={datos.ubicacion}
        onChange={(e) => setDatos({...datos, ubicacion: e.target.value})}
        required
      />
      <textarea 
        placeholder="Descripción de servicios" 
        className="registro-form__input"
        value={datos.descripcion}
        onChange={(e) => setDatos({...datos, descripcion: e.target.value})}
        rows={3}
        required
      />
      {mensaje && <p className="registro-form__mensaje registro-form__mensaje--ok">{mensaje}</p>}
      {error && <p className="registro-form__mensaje registro-form__mensaje--error">{error}</p>}
      <button type="submit" className="registro-form__button">Unirse</button>
    </form>
  );
};

export default RegistroForm;